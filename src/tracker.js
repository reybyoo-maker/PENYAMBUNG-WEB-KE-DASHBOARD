export const TRACKER_JS = String.raw\`(function () {
  "use strict";
  if (window.__AGA_TRACKER_V1__) return;
  window.__AGA_TRACKER_V1__ = true;

  var currentScript = document.currentScript;
  if (!currentScript || !currentScript.src) return;
  var endpoint;
  try {
    endpoint = new URL("/collect", currentScript.src).toString();
  } catch (_) {
    return;
  }

  var queueKey = "aga_tracker_queue_v1";
  var visitorKey = "aga_tracker_visitor_v1";
  var sessionKey = "aga_tracker_session_v1";
  var MAX_QUEUE = 40;
  var flushing = false;

  function randomId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return "aga-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 14);
  }

  function storageGet(storage, key) {
    try { return storage.getItem(key); } catch (_) { return null; }
  }

  function storageSet(storage, key, value) {
    try { storage.setItem(key, value); } catch (_) {}
  }

  function getOrCreate(storage, key) {
    var existing = storageGet(storage, key);
    if (existing) return existing;
    var value = randomId();
    storageSet(storage, key, value);
    return value;
  }

  function safeText(value, max) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
  }

  function safeReferrer() {
    try {
      if (!document.referrer) return "";
      return new URL(document.referrer).origin;
    } catch (_) { return ""; }
  }

  function getUtm(name) {
    try { return safeText(new URLSearchParams(window.location.search).get(name), 120); }
    catch (_) { return ""; }
  }

  function classifyDevice(ua) {
    if (/ipad|tablet/i.test(ua)) return "tablet";
    if (/mobile|iphone|ipod|android/i.test(ua)) return "mobile";
    return "desktop";
  }

  function classifyModel(ua) {
    var match;
    if (/iPhone/i.test(ua)) return "iPhone";
    if (/iPad/i.test(ua)) return "iPad";
    match = ua.match(/;\s*(SM-[A-Z0-9-]+|Pixel [A-Za-z0-9 ]+|Redmi [A-Za-z0-9 ]+|POCO [A-Za-z0-9 ]+)/i);
    return match ? safeText(match[1], 80) : "";
  }

  function classifyOS(ua) {
    if (/Windows NT/i.test(ua)) return "Windows";
    if (/Android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS/iPadOS";
    if (/Mac OS X/i.test(ua)) return "macOS";
    if (/Linux/i.test(ua)) return "Linux";
    return "Other";
  }

  function classifyBrowser(ua) {
    if (/Edg\//i.test(ua)) return "Edge";
    if (/OPR\//i.test(ua)) return "Opera";
    if (/Firefox\//i.test(ua)) return "Firefox";
    if (/CriOS|Chrome\//i.test(ua)) return "Chrome";
    if (/Safari\//i.test(ua)) return "Safari";
    return "Other";
  }

  function readQueue() {
    try {
      var value = JSON.parse(storageGet(window.localStorage, queueKey) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (_) { return []; }
  }

  function writeQueue(queue) {
    storageSet(window.localStorage, queueKey, JSON.stringify(queue.slice(-MAX_QUEUE)));
  }

  function pagePath() {
    // Do not transmit query strings or fragments; UTM values are collected separately.
    return window.location.pathname || "/";
  }

  function makeEvent(type, details) {
    var ua = navigator.userAgent || "";
    var event = {
      schema_version: 1,
      event_id: randomId(),
      event_type: type,
      occurred_at: new Date().toISOString(),
      page_url: pagePath(),
      page_title: safeText(document.title, 180),
      referrer_domain: safeReferrer(),
      utm_source: getUtm("utm_source"),
      utm_medium: getUtm("utm_medium"),
      utm_campaign: getUtm("utm_campaign"),
      utm_content: getUtm("utm_content"),
      utm_term: getUtm("utm_term"),
      visitor_id: getOrCreate(window.localStorage, visitorKey),
      session_id: getOrCreate(window.sessionStorage, sessionKey),
      device_type: classifyDevice(ua),
      device_model: classifyModel(ua),
      os: classifyOS(ua),
      browser: classifyBrowser(ua),
      language: safeText(navigator.language, 24),
      timezone: (function () {
        try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (_) { return ""; }
      })(),
      screen_width: Number(window.screen && window.screen.width) || 0,
      screen_height: Number(window.screen && window.screen.height) || 0
    };
    details = details || {};
    ["event_name", "element_tag", "element_text", "element_id", "track_name", "link_domain", "product_hint"].forEach(function (key) {
      if (details[key]) event[key] = safeText(details[key], key === "element_text" ? 120 : 100);
    });
    return event;
  }

  function enqueue(event) {
    var queue = readQueue();
    queue.push(event);
    writeQueue(queue);
    flush();
  }

  function flush() {
    if (flushing || !navigator.onLine) return;
    var queue = readQueue();
    if (!queue.length) return;
    flushing = true;
    var batch = queue.slice(0, 10);
    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ events: batch })
    }).then(function (response) {
      if (!response.ok) throw new Error("bridge rejected batch");
      var ids = {};
      batch.forEach(function (event) { ids[event.event_id] = true; });
      writeQueue(readQueue().filter(function (event) { return !ids[event.event_id]; }));
    }).catch(function () {
      // Keep a short, bounded retry queue; no form values or free-form text are stored.
    }).finally(function () {
      flushing = false;
    });
  }

  function pageView() {
    enqueue(makeEvent("page_view"));
  }

  function onClick(event) {
    var target = event.target && event.target.closest
      ? event.target.closest("a,button,[data-track]")
      : null;
    if (!target) return;
    var href = target.href || "";
    var label = safeText(
      target.getAttribute("data-track") ||
      target.getAttribute("aria-label") ||
      target.getAttribute("title") ||
      target.innerText ||
      target.textContent,
      120
    );
    var trackName = safeText(target.getAttribute("data-track"), 100);
    var linkDomain = "";
    try { if (href) linkDomain = new URL(href, window.location.href).hostname; } catch (_) {}
    var ebook = /e[\s-]?book/i.test(href + " " + label);
    enqueue(makeEvent(ebook ? "ebook_click" : (trackName ? "custom_event" : "click"), {
      event_name: trackName || (ebook ? "ebook_click" : "element_click"),
      element_tag: (target.tagName || "").toLowerCase(),
      element_text: label,
      element_id: safeText(target.id, 100),
      track_name: trackName,
      link_domain: linkDomain,
      product_hint: ebook ? label : ""
    }));
  }

  function onSubmit(event) {
    var form = event.target;
    if (!form || !form.tagName || form.tagName.toLowerCase() !== "form") return;
    // Deliberately do not read or transmit any input values.
    enqueue(makeEvent("form_submit", {
      event_name: safeText(form.getAttribute("data-track") || form.getAttribute("name") || "form_submit", 100),
      element_tag: "form",
      element_id: safeText(form.id, 100),
      track_name: safeText(form.getAttribute("data-track"), 100)
    }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", pageView, { once: true });
  } else {
    pageView();
  }

  document.addEventListener("click", onClick, true);
  document.addEventListener("submit", onSubmit, true);
  window.addEventListener("online", flush);
  window.addEventListener("pageshow", flush);
  window.addEventListener("popstate", pageView);
  window.addEventListener("hashchange", pageView);
  window.setInterval(function () {
    if (document.visibilityState === "visible") enqueue(makeEvent("active_ping"));
  }, 30000);
  window.setInterval(flush, 10000);
})();\`;