CREATE TABLE IF NOT EXISTS aga_division_setup (
  division_slug TEXT PRIMARY KEY NOT NULL REFERENCES aga_division_registry(slug) ON DELETE CASCADE,
  setup_stage TEXT NOT NULL DEFAULT 'not_started'
    CHECK(setup_stage IN ('not_started','in_progress','blocked','ready_for_test','configured')),
  setup_priority INTEGER NOT NULL DEFAULT 3 CHECK(setup_priority BETWEEN 1 AND 5),
  owner_notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE TABLE IF NOT EXISTS aga_division_integration_setup (
  integration_id INTEGER PRIMARY KEY NOT NULL REFERENCES aga_division_integrations(id) ON DELETE CASCADE,
  setup_stage TEXT NOT NULL DEFAULT 'not_started'
    CHECK(setup_stage IN ('not_started','awaiting_credentials','configured','blocked','ready_for_test')),
  documentation_url TEXT NOT NULL DEFAULT '',
  credential_refs_json TEXT NOT NULL DEFAULT '[]',
  owner_notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_aga_division_setup_stage ON aga_division_setup(setup_stage, setup_priority);
CREATE INDEX IF NOT EXISTS idx_aga_integration_setup_stage ON aga_division_integration_setup(setup_stage);
INSERT OR IGNORE INTO aga_division_setup (division_slug) SELECT slug FROM aga_division_registry;
INSERT OR IGNORE INTO aga_division_integration_setup (integration_id) SELECT id FROM aga_division_integrations;
