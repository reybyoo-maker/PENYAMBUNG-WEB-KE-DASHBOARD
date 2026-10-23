CREATE TABLE IF NOT EXISTS website_analytics_events (
  event_id TEXT PRIMARY KEY NOT NULL,
  event_type TEXT NOT NULL,
  event_name TEXT NOT NULL DEFAULT '',
  occurred_at TEXT NOT NULL,
  received_at TEXT NOT NULL,
  page_url TEXT NOT NULL DEFAULT '/',
  page_title TEXT NOT NULL DEFAULT '',
  referrer_domain TEXT NOT NULL DEFAULT '',
  utm_source TEXT NOT NULL DEFAULT '',
  utm_medium TEXT NOT NULL DEFAULT '',
  utm_campaign TEXT NOT NULL DEFAULT '',
  utm_content TEXT NOT NULL DEFAULT '',
  utm_term TEXT NOT NULL DEFAULT '',
  visitor_id TEXT NOT NULL DEFAULT '',
  session_id TEXT NOT NULL DEFAULT '',
  device_type TEXT NOT NULL DEFAULT '',
  device_model TEXT NOT NULL DEFAULT '',
  os TEXT NOT NULL DEFAULT '',
  browser TEXT NOT NULL DEFAULT '',
  language TEXT NOT NULL DEFAULT '',
  timezone TEXT NOT NULL DEFAULT '',
  screen_width INTEGER NOT NULL DEFAULT 0,
  screen_height INTEGER NOT NULL DEFAULT 0,
  element_tag TEXT NOT NULL DEFAULT '',
  element_text TEXT NOT NULL DEFAULT '',
  element_id TEXT NOT NULL DEFAULT '',
  track_name TEXT NOT NULL DEFAULT '',
  link_domain TEXT NOT NULL DEFAULT '',
  product_hint TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  region TEXT NOT NULL DEFAULT '',
  city TEXT NOT NULL DEFAULT '',
  continent TEXT NOT NULL DEFAULT '',
  user_agent_family TEXT NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS idx_website_analytics_event_time
  ON website_analytics_events(event_type, occurred_at);
CREATE INDEX IF NOT EXISTS idx_website_analytics_page_time
  ON website_analytics_events(page_url, occurred_at);
CREATE INDEX IF NOT EXISTS idx_website_analytics_visitor_time
  ON website_analytics_events(visitor_id, occurred_at);
CREATE INDEX IF NOT EXISTS idx_website_analytics_source_time
  ON website_analytics_events(utm_source, referrer_domain, occurred_at);
