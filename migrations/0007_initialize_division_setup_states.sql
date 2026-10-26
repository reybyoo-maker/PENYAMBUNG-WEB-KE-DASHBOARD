-- Initialize a truthful setup-tracking status for every registered division.
-- This is a checklist state only; it does not mark runtime agents or integrations active.
UPDATE aga_division_setup
SET setup_stage = 'in_progress',
    owner_notes = 'Registered in the shared Cloudflare D1 and surfaced in the Owner Dashboard. Division-specific provider credentials, connectors/adapters, and live connection tests remain pending. Keep runtime inactive until each integration is verified.',
    updated_at = strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE setup_stage = 'not_started'
  AND owner_notes = '';
