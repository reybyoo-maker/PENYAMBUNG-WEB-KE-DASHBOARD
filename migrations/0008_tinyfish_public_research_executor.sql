-- Persistent, low-cost public research executor state.
-- This keeps operational readiness separate from registry/setup status.
CREATE TABLE IF NOT EXISTS aga_division_executor_state (
  singleton_id INTEGER PRIMARY KEY NOT NULL CHECK(singleton_id = 1),
  enabled INTEGER NOT NULL DEFAULT 1 CHECK(enabled IN (0,1)),
  last_division_sort_order INTEGER NOT NULL DEFAULT 0,
  last_cycle_at TEXT,
  last_completed_at TEXT,
  last_error TEXT NOT NULL DEFAULT '',
  paused_reason TEXT NOT NULL DEFAULT '',
  paused_until TEXT,
  last_key_fingerprint TEXT NOT NULL DEFAULT '',
  total_completed INTEGER NOT NULL DEFAULT 0,
  total_failed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
INSERT OR IGNORE INTO aga_division_executor_state (singleton_id, enabled) VALUES (1, 1);
CREATE INDEX IF NOT EXISTS idx_aga_division_public_research_daily
  ON aga_division_tasks(task_type, requested_by, status, created_at);
