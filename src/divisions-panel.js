(function () {
  "use strict";
  if (window.__AGA_DIVISION_PANEL_V1__) return;
  window.__AGA_DIVISION_PANEL_V1__ = true;

  var script = document.currentScript;
  var endpoint;
  try {
    endpoint = new URL("/api/divisions", script && script.src || window.location.href).toString();
  } catch (_) { return; }

  function el(tag, text) {
    var node = document.createElement(tag);
    if (text !== undefined) node.textContent = String(text);
    return node;
  }
  function css(node, value) { node.style.cssText = value; return node; }
  var baseCard = "border:1px solid var(--border-color,rgba(148,163,184,.2));background:var(--card-background,rgba(148,163,184,.045));border-radius:15px;padding:15px;min-width:0;";
  var muted = "font-size:11px;opacity:.68;";

  function ensurePanel() {
    var found = document.getElementById("aga-all-divisions-panel");
    if (found) return found;
    var host = css(el("section"), "margin:20px 0;color:var(--text-color,inherit);font:inherit;");
    host.id = "aga-all-divisions-panel";
    host.setAttribute("aria-live", "polite");
    var headingRow = css(el("div"), "display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px;");
    var headingCol = el("div");
    headingCol.appendChild(css(el("h2", "AIGROWTH Division Control"), "font-size:18px;font-weight:700;margin:0 0 5px;"));
    headingCol.appendChild(css(el("p", "11 divisions · shared registry · approval-controlled operations"), "font-size:12px;opacity:.72;margin:0;"));
    headingRow.appendChild(headingCol);
    var refresh = css(el("button", "Refresh"), "border:1px solid var(--border-color,rgba(148,163,184,.3));border-radius:9px;background:transparent;color:inherit;padding:8px 11px;font:inherit;font-size:12px;cursor:pointer;");
    refresh.type = "button";
    refresh.addEventListener("click", load);
    headingRow.appendChild(refresh);
    host.appendChild(headingRow);
    var status = css(el("p", "Loading division registry…"), "font-size:12px;opacity:.72;margin:0 0 12px;");
    status.id = "aga-divisions-status";
    host.appendChild(status);
    var stats = css(el("div"), "display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:14px;");
    stats.id = "aga-divisions-stats";
    host.appendChild(stats);
    var grid = css(el("div"), "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:12px;");
    grid.id = "aga-divisions-grid";
    host.appendChild(grid);

    var anchor = document.getElementById("aga-live-website-analytics");
    if (anchor && anchor.parentElement) anchor.insertAdjacentElement("afterend", host);
    else (document.querySelector("main") || document.body).appendChild(host);
    return host;
  }

  function metricCard(label, value, detail) {
    var card = css(el("div"), baseCard);
    card.appendChild(css(el("div", Number(value || 0).toLocaleString()), "font-size:23px;font-weight:750;line-height:1.25;font-variant-numeric:tabular-nums;"));
    card.appendChild(css(el("div", label), "font-size:12px;margin-top:5px;"));
    if (detail) card.appendChild(css(el("div", detail), muted + "margin-top:4px;"));
    return card;
  }

  function listBlock(title, items) {
    var wrap = css(el("div"), "margin-top:12px;");
    wrap.appendChild(css(el("div", title), "font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;opacity:.7;margin-bottom:5px;"));
    var list = css(el("ul"), "padding-left:16px;margin:0;font-size:12px;line-height:1.55;");
    (items || []).slice(0, 3).forEach(function (item) {
      list.appendChild(el("li", item));
    });
    wrap.appendChild(list);
    return wrap;
  }

  function render(data) {
    var host = ensurePanel();
    var status = host.querySelector("#aga-divisions-status");
    var stats = host.querySelector("#aga-divisions-stats");
    var grid = host.querySelector("#aga-divisions-grid");
    var divisions = data.divisions || [];
    var integrations = data.integrations || [];
    var connected = integrations.filter(function (i) { return i.status === "connected" || i.status === "verified"; }).length;
    var required = integrations.filter(function (i) { return Number(i.required) === 1 || i.required === true; }).length;
    var openTasks = Number(data.summary && data.summary.open_tasks || 0);
    status.textContent = "Registry loaded · " + divisions.length + " divisions · " + new Date(data.generated_at || Date.now()).toLocaleTimeString() + ". Status shows configuration readiness, not proof that an AI agent is currently executing.";
    stats.replaceChildren(
      metricCard("Registered divisions", divisions.length, "Shared D1 registry"),
      metricCard("Connected integrations", connected, "of " + integrations.length + " defined connections"),
      metricCard("Required connections", Math.max(0, required - integrations.filter(function(i){return Number(i.required)===1 && (i.status==="connected"||i.status==="verified");}).length), "still to verify"),
      metricCard("Open tasks", openTasks, "waiting / queued / running")
    );
    grid.replaceChildren();

    divisions.sort(function (a, b) { return Number(a.sort_order || 999) - Number(b.sort_order || 999); });
    divisions.forEach(function (division) {
      var card = css(el("article"), baseCard);
      var top = css(el("div"), "display:flex;justify-content:space-between;align-items:flex-start;gap:10px;");
      var names = el("div");
      names.appendChild(css(el("div", String(division.sort_order || "").padStart(2,"0") + " · " + division.name), "font-size:14px;font-weight:700;line-height:1.4;"));
      names.appendChild(css(el("div", division.category || "Operations"), muted + "margin-top:4px;"));
      top.appendChild(names);
      var badge = css(el("span", division.runtime_status === "active" ? "ACTIVE" : "SETUP NEEDED"), "flex:none;border:1px solid " + (division.runtime_status === "active" ? "rgba(34,197,94,.4)" : "rgba(148,163,184,.35)") + ";border-radius:999px;padding:4px 7px;font-size:9px;font-weight:700;letter-spacing:.04em;");
      top.appendChild(badge);
      card.appendChild(top);
      card.appendChild(css(el("p", division.mission), "font-size:12px;line-height:1.55;margin:12px 0 0;opacity:.9;"));
      card.appendChild(listBlock("Core responsibilities", division.responsibilities || []));
      card.appendChild(listBlock("Success metrics", division.kpis || []));
      var related = integrations.filter(function (i) { return i.division_slug === division.slug; });
      var conn = css(el("div"), "margin-top:12px;padding-top:10px;border-top:1px solid var(--border-color,rgba(148,163,184,.17));");
      conn.appendChild(css(el("div", "Required integrations: " + related.filter(function(i){return Number(i.required)===1 || i.required===true;}).length), "font-size:11px;font-weight:700;margin-bottom:6px;"));
      related.forEach(function (item) {
        var row = css(el("div"), "display:flex;align-items:flex-start;justify-content:space-between;gap:8px;padding:4px 0;font-size:11px;");
        row.appendChild(css(el("span", item.label), "min-width:0;"));
        row.appendChild(css(el("span", String(item.status || "not_connected").replace(/_/g, " ")), "opacity:.68;text-align:right;"));
        conn.appendChild(row);
      });
      card.appendChild(conn);
      var policy = css(el("p", "Approval: " + division.approval_policy), "font-size:11px;line-height:1.5;opacity:.7;margin:12px 0 0;");
      card.appendChild(policy);
      grid.appendChild(card);
    });
  }

  function load() {
    ensurePanel();
    var status = document.getElementById("aga-divisions-status");
    if (status) status.textContent = "Loading division registry from Cloudflare D1…";
    fetch(endpoint, { method: "GET", credentials: "omit", cache: "no-store", headers: { "Accept": "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("division_registry_unavailable"); return r.json(); })
      .then(function (d) { if (!d || d.ok !== true) throw new Error("division_registry_unavailable"); render(d); })
      .catch(function () {
        var host = ensurePanel();
        var statusNode = host.querySelector("#aga-divisions-status");
        if (statusNode) statusNode.textContent = "Division registry is not deployed or the D1 migration is not applied yet. No division is marked operational until its integrations are verified.";
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load, { once: true });
  else load();
})();
