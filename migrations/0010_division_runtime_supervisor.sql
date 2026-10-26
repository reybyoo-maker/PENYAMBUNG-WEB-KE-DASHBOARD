-- Persistent supervisor snapshot for every enabled AIGROWTH division.
-- Monitoring/readiness is intentionally separate from actual operational runtime status.
CREATE TABLE IF NOT EXISTS aga_division_runtime_audit (
  division_slug TEXT PRIMARY KEY NOT NULL REFERENCES aga_division_registry(slug) ON DELETE CASCADE,
  supervisor_enabled INTEGER NOT NULL DEFAULT 1 CHECK(supervisor_enabled IN (0,1)),
  readiness_state TEXT NOT NULL DEFAULT 'blocked_integrations'
    CHECK(readiness_state IN ('blocked_integrations','connectors_ready_runtime_missing','active')),
  readiness_percent INTEGER NOT NULL DEFAULT 0 CHECK(readiness_percent BETWEEN 0 AND 100),
  required_integrations INTEGER NOT NULL DEFAULT 0,
  verified_required_integrations INTEGER NOT NULL DEFAULT 0,
  completed_operations INTEGER NOT NULL DEFAULT 0,
  failed_operations INTEGER NOT NULL DEFAULT 0,
  open_operations INTEGER NOT NULL DEFAULT 0,
  total_operations INTEGER NOT NULL DEFAULT 0,
  latest_research_status TEXT NOT NULL DEFAULT 'no_result',
  latest_research_at TEXT,
  blockers_json TEXT NOT NULL DEFAULT '[]',
  last_checked_at TEXT,
  last_error TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_aga_division_runtime_audit_state
  ON aga_division_runtime_audit(readiness_state, last_checked_at);
INSERT OR IGNORE INTO aga_division_runtime_audit (division_slug)
  SELECT slug FROM aga_division_registry WHERE catalog_enabled=1;
