const API = "https://api.cloudflare.com/client/v4";
const ACCOUNT_ID = String(process.env.CLOUDFLARE_ACCOUNT_ID || "").trim();
const API_TOKEN = String(process.env.CLOUDFLARE_API_TOKEN || "").trim();
const SCRIPT_NAME = "aigrowth-owner-dashboard";
const PANEL_URL = "https://aga-dashboard-bridge.reybyoo.workers.dev/dashboard-panel.js";

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error("Owner dashboard panel injection blocked: Cloudflare deployment credentials are missing.");
  process.exit(1);
}

async function request(url, options) {
  const response = await fetch(url, {
    ...(options || {}),
    headers: {
      Authorization: "Bearer " + API_TOKEN,
      Accept: "*/*",
      ...((options && options.headers) || {})
    }
  });
  if (!response.ok) {
    let detail = "";
    try {
      const body = await response.clone().json();
      detail = (body.errors || []).map((e) => e.message || e.code).filter(Boolean).join("; ");
    } catch {}
    throw new Error("Cloudflare API HTTP " + response.status + (detail ? ": " + detail : ""));
  }
  return response;
}

function extractSource(raw, contentType, headers) {
  const mainHeader = headers.get("CF-WORKER-MAIN-MODULE-PART");
  const bodyHeader = headers.get("CF-WORKER-BODY-PART");
  const parts = [];

  if (/multipart\//i.test(contentType)) {
    const boundaryMatch = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType);
    if (!boundaryMatch) throw new Error("Cloudflare returned multipart content without a boundary. No change made.");
    const boundary = (boundaryMatch[1] || boundaryMatch[2]).trim();
    for (const chunk of raw.split("--" + boundary)) {
      const part = chunk.replace(/^\r?\n/, "");
      const split = part.indexOf("\r\n\r\n");
      if (split < 0) continue;
      const partHeaders = part.slice(0, split);
      let body = part.slice(split + 4);
      body = body.replace(/\r\n$/, "");
      const disposition = /content-disposition:\s*form-data;\s*name="([^"]+)"(?:;\s*filename="([^"]+)")?/i.exec(partHeaders);
      if (disposition) parts.push({
        name: disposition[1],
        filename: disposition[2] || disposition[1],
        headers: partHeaders,
        body
      });
    }
    const sourcePart = parts.find((p) => !/\.map$/i.test(p.filename) && p.body.includes("var HTML"));
    if (sourcePart) {
      const namedPart = mainHeader || bodyHeader || sourcePart.filename || sourcePart.name || "worker.js";
      return { source: sourcePart.body, filename: namedPart, module: Boolean(mainHeader) };
    }
    const diagnostics = parts.map((p) => ({
      name: p.name,
      filename: p.filename,
      contentType: (/content-type:\s*([^\r\n]+)/i.exec(p.headers) || [])[1] || "",
      bytes: p.body.length,
      hasHtmlMarker: p.body.includes("var HTML"),
      hasFetchHandler: p.body.includes("self.addEventListener") || p.body.includes("export default"),
      beginning: p.body.slice(0, 80).replace(/[\r\n\t]/g, " ")
    }));
    console.error("Safe multipart diagnostics:", JSON.stringify({
      contentType: contentType,
      bodyBytes: raw.length,
      parts: diagnostics
    }));
    throw new Error("Could not identify the existing Worker source in Cloudflare multipart content. No change made.");
  }

  if (/application\/json/i.test(contentType)) {
    let data;
    try { data = JSON.parse(raw); } catch { throw new Error("Cloudflare returned invalid JSON content. No change made."); }
    function walk(value, path) {
      if (typeof value === "string" && value.includes("var HTML") && !/worker\.js\.map/i.test(path.join("."))) {
        parts.push({ source: value, path: path });
      } else if (Array.isArray(value)) {
        value.forEach((v, i) => walk(v, path.concat(String(i))));
      } else if (value && typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => walk(v, path.concat(k)));
      }
    }
    walk(data, []);
    if (!parts.length) throw new Error("Cloudflare JSON response did not contain the existing Worker source. No change made.");
    const candidate = parts[0];
    const namedPart = mainHeader || bodyHeader || candidate.path.find((v) => /\.(m?js|cjs)$/i.test(v)) || "worker.js";
    return { source: candidate.source, filename: namedPart, module: Boolean(mainHeader) };
  }

  if (raw.includes("var HTML") && raw.includes("self.addEventListener")) {
    return { source: raw, filename: mainHeader || bodyHeader || "worker.js", module: Boolean(mainHeader) };
  }
  throw new Error("Cloudflare content response is not a recognizable single-file Worker source. No change made.");
}

function findTemplateClose(source, openAt) {
  for (let i = openAt + 1; i < source.length; i++) {
    if (source.charCodeAt(i) !== 96) continue;
    let slashCount = 0;
    for (let j = i - 1; j > openAt && source[j] === "\\"; j--) slashCount++;
    if (slashCount % 2 === 0) return i;
  }
  return -1;
}

function patchHtmlTemplate(source) {
  const assignment = /\b(?:var|let|const)\s+HTML\s*=\s*/.exec(source);
  if (!assignment) throw new Error("Static HTML template assignment was not found. No change made.");
  const openAt = assignment.index + assignment[0].length;
  if (source.charCodeAt(openAt) !== 96) throw new Error("HTML is not assigned as a template literal. No change made.");
  const closeAt = findTemplateClose(source, openAt);
  if (closeAt < 0) throw new Error("HTML template boundaries are not valid. No change made.");

  const html = source.slice(openAt + 1, closeAt);
  const openHead = /<head\b[^>]*>/i.exec(html);
  if (!openHead) throw new Error("Opening HTML head tag not found inside the real template. No change made.");
  const headCloseAt = html.toLowerCase().indexOf("</head>", openHead.index + openHead[0].length);
  if (headCloseAt < 0) throw new Error("Closing HTML head tag not found after the real opening head. No change made.");

  const head = html.slice(openHead.index, headCloseAt + 7);
  const existingScriptTags = head.match(/<script\b[^>]*>/gi) || [];
  const alreadyLoaded = existingScriptTags.some((tag) => tag.includes(PANEL_URL) && /\bsrc\s*=/i.test(tag));
  if (alreadyLoaded) {
    return { source, changed: false, message: "Bridge panel script element already exists inside the HTML head." };
  }

  const insertAt = openAt + 1 + openHead.index + openHead[0].length;
  const tag = "\n<script defer src=\"" + PANEL_URL + "\"></script>\n";
  const patched = source.slice(0, insertAt) + tag + source.slice(insertAt);

  const marker = /\b(?:var|let|const)\s+HTML\s*=\s*/.exec(patched);
  const verifiedOpen = patched.indexOf("<head", marker.index);
  const verifiedClose = patched.indexOf("</head>", verifiedOpen);
  const verifiedHead = verifiedOpen >= 0 && verifiedClose >= 0 ? patched.slice(verifiedOpen, verifiedClose + 7) : "";
  const verifiedTags = verifiedHead.match(/<script\b[^>]*>/gi) || [];
  const hasScriptTag = verifiedTags.some((tag) => tag.includes(PANEL_URL) && /\bsrc\s*=/i.test(tag));
  if (!hasScriptTag) {
    throw new Error("Post-patch validation failed: actual script src tag is not inside the HTML head. Source was not uploaded.");
  }
  return { source: patched, changed: true, message: "Added one deferred bridge panel script to the existing HTML head." };
}

async function readSource() {
  const url = API + "/accounts/" + encodeURIComponent(ACCOUNT_ID) +
    "/workers/scripts/" + encodeURIComponent(SCRIPT_NAME) + "/content/v2";
  const response = await request(url);
  const contentType = response.headers.get("content-type") || "";
  const raw = await response.text();
  return extractSource(raw, contentType, response.headers);
}

async function uploadSource(filename, source, isModule) {
  const url = API + "/accounts/" + encodeURIComponent(ACCOUNT_ID) +
    "/workers/scripts/" + encodeURIComponent(SCRIPT_NAME) + "/content";
  const form = new FormData();
  const meta = isModule ? { main_module: filename } : { body_part: filename };
  form.append("metadata", JSON.stringify(meta));
  form.append(filename, new Blob([source], { type: isModule ? "application/javascript+module" : "application/javascript" }), filename);

  const headers = isModule
    ? { "CF-WORKER-MAIN-MODULE-PART": filename }
    : { "CF-WORKER-BODY-PART": filename };

  const response = await request(url, { method: "PUT", headers: headers, body: form });
  const raw = await response.text();
  if (raw) {
    try {
      const result = JSON.parse(raw);
      if (result.success === false || (result.errors && result.errors.length)) {
        const messages = (result.errors || []).map((e) => e.message || e.code).filter(Boolean).join("; ");
        throw new Error("Cloudflare rejected the Worker content update" + (messages ? ": " + messages : ""));
      }
    } catch (error) {
      if (/Cloudflare rejected/.test(String(error && error.message))) throw error;
    }
  }
}

async function verifyLiveHtml() {
  const urls = [
    "https://aigrowth-owner-dashboard.reybyoo.workers.dev/",
    "https://dashboard.aigrowth.my.id/"
  ];
  for (const url of urls) {
    const response = await fetch(url, {
      headers: { Accept: "text/html" },
      cache: "no-store"
    });
    if (!response.ok) throw new Error("Live Owner Dashboard verification returned HTTP " + response.status + " for " + url);
    const html = await response.text();
    const headStart = html.search(/<head\b[^>]*>/i);
    const headClose = headStart >= 0 ? html.toLowerCase().indexOf("</head>", headStart) : -1;
    const head = headStart >= 0 && headClose >= 0 ? html.slice(headStart, headClose + 7) : "";
    const tags = head.match(/<script\b[^>]*>/gi) || [];
    const present = tags.some((tag) => tag.includes(PANEL_URL) && /\bsrc\s*=/i.test(tag));
    console.log("Live HTML check " + url + ": script_tag=" + present + ", html_bytes=" + html.length);
    if (!present) throw new Error("Live HTML does not include the bridge script in <head> for " + url + ".");
  }
}

async function main() {
  const current = await readSource();
  const patch = patchHtmlTemplate(current.source);

  if (!patch.changed) {
    console.log(patch.message);
    await verifyLiveHtml();
    console.log("Live Owner Dashboard HTML verification passed; no content update was required.");
    return;
  }

  console.log("Verified existing Owner Dashboard source; source_bytes=" + current.source.length + "; file=" + current.filename);
  console.log(patch.message);
  await uploadSource(current.filename, patch.source, current.module);

  const after = await readSource();
  const check = patchHtmlTemplate(after.source);
  if (check.changed) throw new Error("Post-upload Worker source did not preserve the bridge script inside the head.");
  await verifyLiveHtml();
  console.log("Owner Dashboard panel injection succeeded and verified. Only HTML script content changed; existing bindings, secrets, cron and deployment settings were not intentionally modified.");
}

main().catch((error) => {
  console.error("Owner Dashboard panel injection failed safely: " + (error && error.message ? error.message : "unknown error"));
  process.exitCode = 1;
});
