-- Record only internal connections with live production evidence as verified.
-- External CRM, email, payment, messaging and social connectors remain not_connected until provider credentials/adapters exist.
UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: TinyFish Search API returned source-linked public research persisted to shared Cloudflare D1.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='marketing_intelligence' AND integration_key='research_sources';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: scheduled public-research tasks were written to and read from the shared aga_division_tasks D1 table.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='operations_service_delivery' AND integration_key='project_store';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: /api/divisions returns the live 150-division registry from shared Cloudflare D1.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='owner_control' AND integration_key='division_registry';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: shared Cloudflare D1 is bound, schema migrations succeeded, and scheduled research rows were persisted.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='technology_automation' AND integration_key='d1_storage';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: Cloudflare bridge Worker is deployed and /health reports ready with shared D1 configured.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='technology_automation' AND integration_key='cloudflare_workers';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: GitHub Actions successfully ran CI and deployed the bridge from repository main.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='technology_automation' AND integration_key='source_control';

UPDATE aga_division_integrations SET status='verified',
 notes='Verified in production: Cloudflare Cron ran the scheduled TinyFish executor and saved completion timestamps in D1.',
 last_checked_at=strftime('%Y-%m-%dT%H:%M:%fZ','now'), updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
 WHERE division_slug='website_system_monitoring' AND integration_key='scheduled_monitor';
