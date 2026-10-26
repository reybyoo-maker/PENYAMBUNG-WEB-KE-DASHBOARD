-- Safe, idempotent starting defaults for the Owner Setup Center.
-- Never alters integration runtime status or stores real credential values.
-- Existing manual setup is preserved by each WHERE clause.

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Owner dashboard, authentication, D1 binding and setup/approval surfaces are deployed. Verify audit logs and owner approval behavior for each live action.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='owner_control' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Cloudflare Worker and shared D1 bridge plus deployment workflows are deployed. Individual third-party adapters still need provider choices, credentials and real tests.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='technology_automation' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Shared D1 registry, migrations, analytics API and setup API are deployed. Configure and test each source-specific sync adapter separately.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='data_integration_intelligence' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Website tracking and Worker monitoring foundations are deployed. Add each production target, expected response, schedule and tested incident notification route.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='website_system_monitoring' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Bridge smoke tests and CI checks are deployed. Add adapter-specific tests, failure handling and rollback checks before enabling each connector.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='qa_reliability' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Shared D1 registry and CRM/lead framework are present. Email delivery, inbox replies and lead-source connectors still require provider selection and testing.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='sales_crm' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_stage='in_progress', setup_priority=1, owner_notes='Multi-platform opportunity and approval structures are defined. Select platforms with authorized access and configure only official/supported connector methods.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug='sales_outsourcing_multi_platform' AND setup_stage='not_started'
  AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_setup
SET setup_priority=2, updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE division_slug IN (SELECT slug FROM aga_division_registry WHERE lower(category)='revenue')
  AND setup_stage='not_started' AND setup_priority=3 AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='https://developers.cloudflare.com/d1/',
    credential_refs_json='[]',
    owner_notes='Internal storage foundation: verify the existing shared D1 binding, required schema/migrations, access pattern and read/write smoke test. No external API secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_crm' AND integration_key='crm_database'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASSWORD","SMTP_FROM","IMAP_HOST","IMAP_USER","IMAP_PASSWORD"]',
    owner_notes='Choose the email provider first and use its official SMTP/IMAP settings. Store actual values in Worker Secrets, configure SPF/DKIM/DMARC and opt-out handling, apply sending caps, then test delivery and inbound replies before enabling sends.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_crm' AND integration_key='email_inbox'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LEAD_SOURCES_API_BASE_URL","AGA_LEAD_SOURCES_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_crm' AND integration_key='lead_sources'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PLATFORM_CONNECTORS_API_BASE_URL","AGA_PLATFORM_CONNECTORS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_outsourcing_multi_platform' AND integration_key='platform_connectors'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_outsourcing_multi_platform' AND integration_key='opportunity_db'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_outsourcing_multi_platform' AND integration_key='proposal_approval'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RESEARCH_SOURCES_API_BASE_URL","AGA_RESEARCH_SOURCES_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='marketing_intelligence' AND integration_key='research_sources'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='marketing_intelligence' AND integration_key='crm_feedback'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CLIENT_CRM_API_BASE_URL","AGA_CLIENT_CRM_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_success' AND integration_key='client_crm'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROJECT_STATUS_API_BASE_URL","AGA_PROJECT_STATUS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_success' AND integration_key='project_status'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CLIENT_MESSAGING_API_BASE_URL","AGA_CLIENT_MESSAGING_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_success' AND integration_key='client_messaging'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='operations_service_delivery' AND integration_key='project_store'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='operations_service_delivery' AND integration_key='approval_queue'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CLIENT_SUCCESS_HANDOFF_API_BASE_URL","AGA_CLIENT_SUCCESS_HANDOFF_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='operations_service_delivery' AND integration_key='client_success_handoff'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='https://developers.cloudflare.com/api/',
    credential_refs_json='["CLOUDFLARE_API_TOKEN"]',
    owner_notes='Provider identified: Cloudflare. Use a narrowly scoped API token in Cloudflare Worker Secrets, verify required permissions, then test a real API call. Never paste the token into this panel.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='technology_automation' AND integration_key='cloudflare_workers'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='https://developers.cloudflare.com/d1/',
    credential_refs_json='[]',
    owner_notes='Internal storage foundation: verify the existing shared D1 binding, required schema/migrations, access pattern and read/write smoke test. No external API secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='technology_automation' AND integration_key='d1_storage'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='https://docs.github.com/en/rest',
    credential_refs_json='["GITHUB_TOKEN"]',
    owner_notes='Use a least-privilege GitHub App or fine-grained token restricted to required repositories and permissions. Store the token in the approved secret store, then test repository access.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='technology_automation' AND integration_key='source_control'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_HEALTH_TARGETS_API_BASE_URL","AGA_HEALTH_TARGETS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='qa_reliability' AND integration_key='health_targets'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_TEST_RUNNER_API_BASE_URL","AGA_TEST_RUNNER_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='qa_reliability' AND integration_key='test_runner'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INCIDENT_SINK_API_BASE_URL","AGA_INCIDENT_SINK_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='qa_reliability' AND integration_key='incident_sink'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='https://developers.cloudflare.com/d1/',
    credential_refs_json='[]',
    owner_notes='Internal storage foundation: verify the existing shared D1 binding, required schema/migrations, access pattern and read/write smoke test. No external API secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_integration_intelligence' AND integration_key='core_d1'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SOURCE_CONTRACTS_API_BASE_URL","AGA_SOURCE_CONTRACTS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_integration_intelligence' AND integration_key='source_contracts'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_integration_intelligence' AND integration_key='sync_logs'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_TRANSACTION_SOURCE_API_BASE_URL","AGA_TRANSACTION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='finance_analytics' AND integration_key='transaction_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_EXPENSE_SOURCE_API_BASE_URL","AGA_EXPENSE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='finance_analytics' AND integration_key='expense_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROJECT_FINANCE_API_BASE_URL","AGA_PROJECT_FINANCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='finance_analytics' AND integration_key='project_finance'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='https://developers.cloudflare.com/d1/',
    credential_refs_json='[]',
    owner_notes='Internal storage foundation: verify the existing shared D1 binding, required schema/migrations, access pattern and read/write smoke test. No external API secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='owner_control' AND integration_key='division_registry'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_APPROVALS_AUTH_API_BASE_URL","AGA_APPROVALS_AUTH_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='owner_control' AND integration_key='approvals_auth'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='owner_control' AND integration_key='audit_logs'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MONITOR_TARGETS_API_BASE_URL","AGA_MONITOR_TARGETS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='website_system_monitoring' AND integration_key='monitor_targets'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='https://developers.cloudflare.com/workers/configuration/cron-triggers/',
    credential_refs_json='[]',
    owner_notes='Cloudflare Cron foundation is configured. Confirm the live schedule, invocation logs, last successful check, expected status codes and owner-approved incident notification route.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='website_system_monitoring' AND integration_key='scheduled_monitor'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INCIDENT_NOTIFICATIONS_API_BASE_URL","AGA_INCIDENT_NOTIFICATIONS_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='website_system_monitoring' AND integration_key='incident_notifications'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ICP_OFFER_STRATEGY_SOURCE_API_BASE_URL","AGA_ICP_OFFER_STRATEGY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='icp_offer_strategy' AND integration_key='icp_offer_strategy_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='icp_offer_strategy' AND integration_key='icp_offer_strategy_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ACCOUNT_BASED_PROSPECTING_SOURCE_API_BASE_URL","AGA_ACCOUNT_BASED_PROSPECTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_based_prospecting' AND integration_key='account_based_prospecting_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_based_prospecting' AND integration_key='account_based_prospecting_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LEAD_ENRICHMENT_SOURCE_API_BASE_URL","AGA_LEAD_ENRICHMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_enrichment' AND integration_key='lead_enrichment_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_enrichment' AND integration_key='lead_enrichment_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LEAD_QUALIFICATION_SOURCE_API_BASE_URL","AGA_LEAD_QUALIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_qualification' AND integration_key='lead_qualification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_qualification' AND integration_key='lead_qualification_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_EMAIL_DELIVERABILITY_SOURCE_API_BASE_URL","AGA_EMAIL_DELIVERABILITY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='email_deliverability' AND integration_key='email_deliverability_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='email_deliverability' AND integration_key='email_deliverability_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_OUTREACH_SEQUENCE_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_OUTREACH_SEQUENCE_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='outreach_sequence_intelligence' AND integration_key='outreach_sequence_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='outreach_sequence_intelligence' AND integration_key='outreach_sequence_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_ENABLEMENT_SOURCE_API_BASE_URL","AGA_SALES_ENABLEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_enablement' AND integration_key='sales_enablement_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_enablement' AND integration_key='sales_enablement_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROPOSAL_RFP_OPERATIONS_SOURCE_API_BASE_URL","AGA_PROPOSAL_RFP_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_rfp_operations' AND integration_key='proposal_rfp_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_rfp_operations' AND integration_key='proposal_rfp_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PRICING_PACKAGING_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_PRICING_PACKAGING_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pricing_packaging_intelligence' AND integration_key='pricing_packaging_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pricing_packaging_intelligence' AND integration_key='pricing_packaging_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PARTNERSHIPS_AFFILIATES_SOURCE_API_BASE_URL","AGA_PARTNERSHIPS_AFFILIATES_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='partnerships_affiliates' AND integration_key='partnerships_affiliates_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='partnerships_affiliates' AND integration_key='partnerships_affiliates_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CHANNEL_PARTNERSHIPS_SOURCE_API_BASE_URL","AGA_CHANNEL_PARTNERSHIPS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='channel_partnerships' AND integration_key='channel_partnerships_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='channel_partnerships' AND integration_key='channel_partnerships_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_REVENUE_OPERATIONS_SOURCE_API_BASE_URL","AGA_REVENUE_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='revenue_operations' AND integration_key='revenue_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='revenue_operations' AND integration_key='revenue_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SEO_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SEO_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='seo_intelligence' AND integration_key='seo_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='seo_intelligence' AND integration_key='seo_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SEARCH_INTENT_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SEARCH_INTENT_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='search_intent_intelligence' AND integration_key='search_intent_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='search_intent_intelligence' AND integration_key='search_intent_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_COMPETITOR_PRICING_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_COMPETITOR_PRICING_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='competitor_pricing_intelligence' AND integration_key='competitor_pricing_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='competitor_pricing_intelligence' AND integration_key='competitor_pricing_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MARKET_DEMAND_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_MARKET_DEMAND_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='market_demand_intelligence' AND integration_key='market_demand_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='market_demand_intelligence' AND integration_key='market_demand_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CUSTOMER_VOICE_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_CUSTOMER_VOICE_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_voice_intelligence' AND integration_key='customer_voice_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_voice_intelligence' AND integration_key='customer_voice_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INDUSTRY_TREND_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_INDUSTRY_TREND_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='industry_trend_intelligence' AND integration_key='industry_trend_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='industry_trend_intelligence' AND integration_key='industry_trend_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CAMPAIGN_PERFORMANCE_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_CAMPAIGN_PERFORMANCE_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='campaign_performance_intelligence' AND integration_key='campaign_performance_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='campaign_performance_intelligence' AND integration_key='campaign_performance_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BRAND_REPUTATION_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_BRAND_REPUTATION_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='brand_reputation_intelligence' AND integration_key='brand_reputation_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='brand_reputation_intelligence' AND integration_key='brand_reputation_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CLIENT_ONBOARDING_OPERATIONS_SOURCE_API_BASE_URL","AGA_CLIENT_ONBOARDING_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_onboarding_operations' AND integration_key='client_onboarding_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_onboarding_operations' AND integration_key='client_onboarding_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CUSTOMER_SUPPORT_TRIAGE_SOURCE_API_BASE_URL","AGA_CUSTOMER_SUPPORT_TRIAGE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_support_triage' AND integration_key='customer_support_triage_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_support_triage' AND integration_key='customer_support_triage_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SLA_ESCALATION_MANAGEMENT_SOURCE_API_BASE_URL","AGA_SLA_ESCALATION_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sla_escalation_management' AND integration_key='sla_escalation_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sla_escalation_management' AND integration_key='sla_escalation_management_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RETENTION_CHURN_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_RETENTION_CHURN_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='retention_churn_intelligence' AND integration_key='retention_churn_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='retention_churn_intelligence' AND integration_key='retention_churn_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RENEWALS_EXPANSION_SOURCE_API_BASE_URL","AGA_RENEWALS_EXPANSION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='renewals_expansion' AND integration_key='renewals_expansion_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='renewals_expansion' AND integration_key='renewals_expansion_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ACCOUNT_HEALTH_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_ACCOUNT_HEALTH_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_health_intelligence' AND integration_key='account_health_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_health_intelligence' AND integration_key='account_health_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CLIENT_FEEDBACK_LOOP_SOURCE_API_BASE_URL","AGA_CLIENT_FEEDBACK_LOOP_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_feedback_loop' AND integration_key='client_feedback_loop_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='client_feedback_loop' AND integration_key='client_feedback_loop_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SERVICE_SCOPE_CATALOG_SOURCE_API_BASE_URL","AGA_SERVICE_SCOPE_CATALOG_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='service_scope_catalog' AND integration_key='service_scope_catalog_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='service_scope_catalog' AND integration_key='service_scope_catalog_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_WORKFLOW_ORCHESTRATION_SOURCE_API_BASE_URL","AGA_WORKFLOW_ORCHESTRATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='workflow_orchestration' AND integration_key='workflow_orchestration_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='workflow_orchestration' AND integration_key='workflow_orchestration_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_API_INTEGRATION_ENGINEERING_SOURCE_API_BASE_URL","AGA_API_INTEGRATION_ENGINEERING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='api_integration_engineering' AND integration_key='api_integration_engineering_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='api_integration_engineering' AND integration_key='api_integration_engineering_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_WEBHOOK_EVENT_ROUTING_SOURCE_API_BASE_URL","AGA_WEBHOOK_EVENT_ROUTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='webhook_event_routing' AND integration_key='webhook_event_routing_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='webhook_event_routing' AND integration_key='webhook_event_routing_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SCHEDULER_CRON_OPERATIONS_SOURCE_API_BASE_URL","AGA_SCHEDULER_CRON_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='scheduler_cron_operations' AND integration_key='scheduler_cron_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='scheduler_cron_operations' AND integration_key='scheduler_cron_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SECRETS_ACCESS_MANAGEMENT_SOURCE_API_BASE_URL","AGA_SECRETS_ACCESS_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='secrets_access_management' AND integration_key='secrets_access_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='secrets_access_management' AND integration_key='secrets_access_management_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='https://developers.cloudflare.com/api/',
    credential_refs_json='["CLOUDFLARE_API_TOKEN"]',
    owner_notes='Provider identified: Cloudflare. Use a narrowly scoped API token in Cloudflare Worker Secrets, verify required permissions, then test a real API call. Never paste the token into this panel.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cloudflare_release_engineering' AND integration_key='cloudflare_release_engineering_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cloudflare_release_engineering' AND integration_key='cloudflare_release_engineering_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DATABASE_SCHEMA_MIGRATION_SOURCE_API_BASE_URL","AGA_DATABASE_SCHEMA_MIGRATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='database_schema_migration' AND integration_key='database_schema_migration_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='database_schema_migration' AND integration_key='database_schema_migration_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BACKUP_RECOVERY_OPERATIONS_SOURCE_API_BASE_URL","AGA_BACKUP_RECOVERY_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='backup_recovery_operations' AND integration_key='backup_recovery_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='backup_recovery_operations' AND integration_key='backup_recovery_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AUTOMATION_COST_OPTIMIZATION_SOURCE_API_BASE_URL","AGA_AUTOMATION_COST_OPTIMIZATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='automation_cost_optimization' AND integration_key='automation_cost_optimization_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='automation_cost_optimization' AND integration_key='automation_cost_optimization_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AI_MODEL_ROUTING_SOURCE_API_BASE_URL","AGA_AI_MODEL_ROUTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='ai_model_routing' AND integration_key='ai_model_routing_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='ai_model_routing' AND integration_key='ai_model_routing_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AGENT_PROMPT_EVALUATION_SOURCE_API_BASE_URL","AGA_AGENT_PROMPT_EVALUATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='agent_prompt_evaluation' AND integration_key='agent_prompt_evaluation_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='agent_prompt_evaluation' AND integration_key='agent_prompt_evaluation_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AI_GUARDRAILS_POLICY_SOURCE_API_BASE_URL","AGA_AI_GUARDRAILS_POLICY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='ai_guardrails_policy' AND integration_key='ai_guardrails_policy_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='ai_guardrails_policy' AND integration_key='ai_guardrails_policy_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RUNTIME_PERFORMANCE_ENGINEERING_SOURCE_API_BASE_URL","AGA_RUNTIME_PERFORMANCE_ENGINEERING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='runtime_performance_engineering' AND integration_key='runtime_performance_engineering_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='runtime_performance_engineering' AND integration_key='runtime_performance_engineering_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_REGRESSION_TESTING_SOURCE_API_BASE_URL","AGA_REGRESSION_TESTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='regression_testing' AND integration_key='regression_testing_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='regression_testing' AND integration_key='regression_testing_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_END_TO_END_TESTING_SOURCE_API_BASE_URL","AGA_END_TO_END_TESTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='end_to_end_testing' AND integration_key='end_to_end_testing_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='end_to_end_testing' AND integration_key='end_to_end_testing_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DATA_QUALITY_ASSURANCE_SOURCE_API_BASE_URL","AGA_DATA_QUALITY_ASSURANCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_quality_assurance' AND integration_key='data_quality_assurance_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_quality_assurance' AND integration_key='data_quality_assurance_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INTEGRATION_CONTRACT_TESTING_SOURCE_API_BASE_URL","AGA_INTEGRATION_CONTRACT_TESTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='integration_contract_testing' AND integration_key='integration_contract_testing_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='integration_contract_testing' AND integration_key='integration_contract_testing_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_OBSERVABILITY_LOG_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_OBSERVABILITY_LOG_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='observability_log_intelligence' AND integration_key='observability_log_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='observability_log_intelligence' AND integration_key='observability_log_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INCIDENT_COMMAND_SOURCE_API_BASE_URL","AGA_INCIDENT_COMMAND_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='incident_command' AND integration_key='incident_command_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='incident_command' AND integration_key='incident_command_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SITE_RELIABILITY_ENGINEERING_SOURCE_API_BASE_URL","AGA_SITE_RELIABILITY_ENGINEERING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='site_reliability_engineering' AND integration_key='site_reliability_engineering_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='site_reliability_engineering' AND integration_key='site_reliability_engineering_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SECURITY_POSTURE_MONITORING_SOURCE_API_BASE_URL","AGA_SECURITY_POSTURE_MONITORING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='security_posture_monitoring' AND integration_key='security_posture_monitoring_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='security_posture_monitoring' AND integration_key='security_posture_monitoring_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PRIVACY_CONSENT_OPERATIONS_SOURCE_API_BASE_URL","AGA_PRIVACY_CONSENT_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='privacy_consent_operations' AND integration_key='privacy_consent_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='privacy_consent_operations' AND integration_key='privacy_consent_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ACCESS_AUDIT_IDENTITY_SOURCE_API_BASE_URL","AGA_ACCESS_AUDIT_IDENTITY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='access_audit_identity' AND integration_key='access_audit_identity_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='access_audit_identity' AND integration_key='access_audit_identity_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DATA_GOVERNANCE_LINEAGE_SOURCE_API_BASE_URL","AGA_DATA_GOVERNANCE_LINEAGE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_governance_lineage' AND integration_key='data_governance_lineage_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_governance_lineage' AND integration_key='data_governance_lineage_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DATA_PIPELINE_ENGINEERING_SOURCE_API_BASE_URL","AGA_DATA_PIPELINE_ENGINEERING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_pipeline_engineering' AND integration_key='data_pipeline_engineering_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='data_pipeline_engineering' AND integration_key='data_pipeline_engineering_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BUSINESS_INTELLIGENCE_REPORTING_SOURCE_API_BASE_URL","AGA_BUSINESS_INTELLIGENCE_REPORTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_intelligence_reporting' AND integration_key='business_intelligence_reporting_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_intelligence_reporting' AND integration_key='business_intelligence_reporting_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_EXPERIMENTATION_MEASUREMENT_SOURCE_API_BASE_URL","AGA_EXPERIMENTATION_MEASUREMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='experimentation_measurement' AND integration_key='experimentation_measurement_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='experimentation_measurement' AND integration_key='experimentation_measurement_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BILLING_INVOICING_OPERATIONS_SOURCE_API_BASE_URL","AGA_BILLING_INVOICING_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='billing_invoicing_operations' AND integration_key='billing_invoicing_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='billing_invoicing_operations' AND integration_key='billing_invoicing_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ACCOUNTS_RECEIVABLE_TRACKING_SOURCE_API_BASE_URL","AGA_ACCOUNTS_RECEIVABLE_TRACKING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='accounts_receivable_tracking' AND integration_key='accounts_receivable_tracking_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='accounts_receivable_tracking' AND integration_key='accounts_receivable_tracking_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_EXPENSE_SUBSCRIPTION_TRACKING_SOURCE_API_BASE_URL","AGA_EXPENSE_SUBSCRIPTION_TRACKING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='expense_subscription_tracking' AND integration_key='expense_subscription_tracking_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='expense_subscription_tracking' AND integration_key='expense_subscription_tracking_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BUDGET_GUARD_SPEND_APPROVALS_SOURCE_API_BASE_URL","AGA_BUDGET_GUARD_SPEND_APPROVALS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='budget_guard_spend_approvals' AND integration_key='budget_guard_spend_approvals_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='budget_guard_spend_approvals' AND integration_key='budget_guard_spend_approvals_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROJECT_PROFITABILITY_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_PROJECT_PROFITABILITY_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='project_profitability_intelligence' AND integration_key='project_profitability_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='project_profitability_intelligence' AND integration_key='project_profitability_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CASH_FLOW_FORECASTING_SOURCE_API_BASE_URL","AGA_CASH_FLOW_FORECASTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cash_flow_forecasting' AND integration_key='cash_flow_forecasting_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cash_flow_forecasting' AND integration_key='cash_flow_forecasting_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROCUREMENT_VENDOR_SPEND_SOURCE_API_BASE_URL","AGA_PROCUREMENT_VENDOR_SPEND_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='procurement_vendor_spend' AND integration_key='procurement_vendor_spend_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='procurement_vendor_spend' AND integration_key='procurement_vendor_spend_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CONTRACT_OPERATIONS_SOURCE_API_BASE_URL","AGA_CONTRACT_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='contract_operations' AND integration_key='contract_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='contract_operations' AND integration_key='contract_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BUSINESS_RISK_COMPLIANCE_SOURCE_API_BASE_URL","AGA_BUSINESS_RISK_COMPLIANCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_risk_compliance' AND integration_key='business_risk_compliance_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_risk_compliance' AND integration_key='business_risk_compliance_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_VENDOR_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_VENDOR_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='vendor_intelligence' AND integration_key='vendor_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='vendor_intelligence' AND integration_key='vendor_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PLATFORM_TERMS_COMPLIANCE_SOURCE_API_BASE_URL","AGA_PLATFORM_TERMS_COMPLIANCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='platform_terms_compliance' AND integration_key='platform_terms_compliance_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='platform_terms_compliance' AND integration_key='platform_terms_compliance_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PLATFORM_CONNECTOR_CERTIFICATION_SOURCE_API_BASE_URL","AGA_PLATFORM_CONNECTOR_CERTIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='platform_connector_certification' AND integration_key='platform_connector_certification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='platform_connector_certification' AND integration_key='platform_connector_certification_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_FREELANCE_MARKET_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_FREELANCE_MARKET_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='freelance_market_intelligence' AND integration_key='freelance_market_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='freelance_market_intelligence' AND integration_key='freelance_market_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PARTNER_QUALIFICATION_SOURCE_API_BASE_URL","AGA_PARTNER_QUALIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='partner_qualification' AND integration_key='partner_qualification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='partner_qualification' AND integration_key='partner_qualification_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROPOSAL_RESEARCH_SOURCE_API_BASE_URL","AGA_PROPOSAL_RESEARCH_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_research' AND integration_key='proposal_research_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_research' AND integration_key='proposal_research_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PUBLIC_TENDER_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_PUBLIC_TENDER_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='public_tender_intelligence' AND integration_key='public_tender_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='public_tender_intelligence' AND integration_key='public_tender_intelligence_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SERVICE_OPPORTUNITY_RESEARCH_SOURCE_API_BASE_URL","AGA_SERVICE_OPPORTUNITY_RESEARCH_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='service_opportunity_research' AND integration_key='service_opportunity_research_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='service_opportunity_research' AND integration_key='service_opportunity_research_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_WORKFORCE_ORCHESTRATION_SOURCE_API_BASE_URL","AGA_WORKFORCE_ORCHESTRATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='workforce_orchestration' AND integration_key='workforce_orchestration_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='workforce_orchestration' AND integration_key='workforce_orchestration_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CAPACITY_PLANNING_SOURCE_API_BASE_URL","AGA_CAPACITY_PLANNING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='capacity_planning' AND integration_key='capacity_planning_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='capacity_planning' AND integration_key='capacity_planning_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_TASK_PRIORITIZATION_SOURCE_API_BASE_URL","AGA_TASK_PRIORITIZATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='task_prioritization' AND integration_key='task_prioritization_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='task_prioritization' AND integration_key='task_prioritization_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROCESS_DOCUMENTATION_SOURCE_API_BASE_URL","AGA_PROCESS_DOCUMENTATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='process_documentation' AND integration_key='process_documentation_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='process_documentation' AND integration_key='process_documentation_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_KNOWLEDGE_BASE_OPERATIONS_SOURCE_API_BASE_URL","AGA_KNOWLEDGE_BASE_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='knowledge_base_operations' AND integration_key='knowledge_base_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='knowledge_base_operations' AND integration_key='knowledge_base_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RUNBOOK_SOP_MANAGEMENT_SOURCE_API_BASE_URL","AGA_RUNBOOK_SOP_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='runbook_sop_management' AND integration_key='runbook_sop_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='runbook_sop_management' AND integration_key='runbook_sop_management_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AUTOMATION_INVENTORY_SOURCE_API_BASE_URL","AGA_AUTOMATION_INVENTORY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='automation_inventory' AND integration_key='automation_inventory_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='automation_inventory' AND integration_key='automation_inventory_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INCIDENT_COMMUNICATIONS_SOURCE_API_BASE_URL","AGA_INCIDENT_COMMUNICATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='incident_communications' AND integration_key='incident_communications_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='incident_communications' AND integration_key='incident_communications_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MEETING_DECISION_REGISTRY_SOURCE_API_BASE_URL","AGA_MEETING_DECISION_REGISTRY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='meeting_decision_registry' AND integration_key='meeting_decision_registry_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='meeting_decision_registry' AND integration_key='meeting_decision_registry_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_APPROVAL_WORKFLOW_OPERATIONS_SOURCE_API_BASE_URL","AGA_APPROVAL_WORKFLOW_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='approval_workflow_operations' AND integration_key='approval_workflow_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='approval_workflow_operations' AND integration_key='approval_workflow_operations_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INTERNAL_ADMINISTRATION_SOURCE_API_BASE_URL","AGA_INTERNAL_ADMINISTRATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='internal_administration' AND integration_key='internal_administration_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='internal_administration' AND integration_key='internal_administration_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ASSET_LICENSE_INVENTORY_SOURCE_API_BASE_URL","AGA_ASSET_LICENSE_INVENTORY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='asset_license_inventory' AND integration_key='asset_license_inventory_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='asset_license_inventory' AND integration_key='asset_license_inventory_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_FEEDBACK_LEARNING_LOOP_SOURCE_API_BASE_URL","AGA_FEEDBACK_LEARNING_LOOP_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='feedback_learning_loop' AND integration_key='feedback_learning_loop_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='feedback_learning_loop' AND integration_key='feedback_learning_loop_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CROSS_DIVISION_COORDINATION_SOURCE_API_BASE_URL","AGA_CROSS_DIVISION_COORDINATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cross_division_coordination' AND integration_key='cross_division_coordination_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cross_division_coordination' AND integration_key='cross_division_coordination_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_KPI_EXECUTIVE_REPORTING_SOURCE_API_BASE_URL","AGA_KPI_EXECUTIVE_REPORTING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='kpi_executive_reporting' AND integration_key='kpi_executive_reporting_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='kpi_executive_reporting' AND integration_key='kpi_executive_reporting_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AUDIT_CHANGE_MANAGEMENT_SOURCE_API_BASE_URL","AGA_AUDIT_CHANGE_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='audit_change_management' AND integration_key='audit_change_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='audit_change_management' AND integration_key='audit_change_management_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BUSINESS_CONTINUITY_DISASTER_RECOVERY_SOURCE_API_BASE_URL","AGA_BUSINESS_CONTINUITY_DISASTER_RECOVERY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_continuity_disaster_recovery' AND integration_key='business_continuity_disaster_recovery_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='business_continuity_disaster_recovery' AND integration_key='business_continuity_disaster_recovery_validation'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_OUTBOUND_PROSPECTING_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_OUTBOUND_PROSPECTING_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='outbound_prospecting_intelligence' AND integration_key='outbound_prospecting_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='outbound_prospecting_intelligence' AND integration_key='outbound_prospecting_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_INBOUND_LEAD_CONVERSION_SOURCE_API_BASE_URL","AGA_INBOUND_LEAD_CONVERSION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='inbound_lead_conversion' AND integration_key='inbound_lead_conversion_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='inbound_lead_conversion' AND integration_key='inbound_lead_conversion_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ACCOUNT_BASED_SALES_SOURCE_API_BASE_URL","AGA_ACCOUNT_BASED_SALES_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_based_sales' AND integration_key='account_based_sales_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='account_based_sales' AND integration_key='account_based_sales_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_SIGNAL_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SALES_SIGNAL_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_signal_intelligence' AND integration_key='sales_signal_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_signal_intelligence' AND integration_key='sales_signal_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LEAD_ENRICHMENT_VERIFICATION_SOURCE_API_BASE_URL","AGA_LEAD_ENRICHMENT_VERIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_enrichment_verification' AND integration_key='lead_enrichment_verification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_enrichment_verification' AND integration_key='lead_enrichment_verification_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CONTACT_DISCOVERY_COMPLIANCE_SOURCE_API_BASE_URL","AGA_CONTACT_DISCOVERY_COMPLIANCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='contact_discovery_compliance' AND integration_key='contact_discovery_compliance_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='contact_discovery_compliance' AND integration_key='contact_discovery_compliance_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MULTI_CHANNEL_OUTREACH_ORCHESTRATION_SOURCE_API_BASE_URL","AGA_MULTI_CHANNEL_OUTREACH_ORCHESTRATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='multi_channel_outreach_orchestration' AND integration_key='multi_channel_outreach_orchestration_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='multi_channel_outreach_orchestration' AND integration_key='multi_channel_outreach_orchestration_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_EMAIL_DELIVERABILITY_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_EMAIL_DELIVERABILITY_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='email_deliverability_intelligence' AND integration_key='email_deliverability_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='email_deliverability_intelligence' AND integration_key='email_deliverability_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='https://learn.microsoft.com/en-us/linkedin/',
    credential_refs_json='["LINKEDIN_CLIENT_ID","LINKEDIN_CLIENT_SECRET","LINKEDIN_ACCESS_TOKEN"]',
    owner_notes='LinkedIn API access depends on approved app registration and OAuth scopes. Verify account authorization and permitted endpoints; do not assume messaging or scraping access is granted.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='linkedin_social_selling' AND integration_key='linkedin_social_selling_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='linkedin_social_selling' AND integration_key='linkedin_social_selling_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_BUYER_COMMITTEE_MAPPING_SOURCE_API_BASE_URL","AGA_BUYER_COMMITTEE_MAPPING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='buyer_committee_mapping' AND integration_key='buyer_committee_mapping_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='buyer_committee_mapping' AND integration_key='buyer_committee_mapping_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MEETING_BOOKING_QUALIFICATION_SOURCE_API_BASE_URL","AGA_MEETING_BOOKING_QUALIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='meeting_booking_qualification' AND integration_key='meeting_booking_qualification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='meeting_booking_qualification' AND integration_key='meeting_booking_qualification_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_MEETING_PREPARATION_SOURCE_API_BASE_URL","AGA_SALES_MEETING_PREPARATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_meeting_preparation' AND integration_key='sales_meeting_preparation_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_meeting_preparation' AND integration_key='sales_meeting_preparation_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DISCOVERY_CALL_QUALIFICATION_SOURCE_API_BASE_URL","AGA_DISCOVERY_CALL_QUALIFICATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='discovery_call_qualification' AND integration_key='discovery_call_qualification_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='discovery_call_qualification' AND integration_key='discovery_call_qualification_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_DEMO_OPERATIONS_READINESS_SOURCE_API_BASE_URL","AGA_DEMO_OPERATIONS_READINESS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='demo_operations_readiness' AND integration_key='demo_operations_readiness_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='demo_operations_readiness' AND integration_key='demo_operations_readiness_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_OBJECTION_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_OBJECTION_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='objection_intelligence' AND integration_key='objection_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='objection_intelligence' AND integration_key='objection_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_CONVERSATION_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SALES_CONVERSATION_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_conversation_intelligence' AND integration_key='sales_conversation_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_conversation_intelligence' AND integration_key='sales_conversation_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROPOSAL_STRATEGY_FIT_SOURCE_API_BASE_URL","AGA_PROPOSAL_STRATEGY_FIT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_strategy_fit' AND integration_key='proposal_strategy_fit_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_strategy_fit' AND integration_key='proposal_strategy_fit_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROPOSAL_QUALITY_REVIEW_SOURCE_API_BASE_URL","AGA_PROPOSAL_QUALITY_REVIEW_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_quality_review' AND integration_key='proposal_quality_review_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='proposal_quality_review' AND integration_key='proposal_quality_review_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_PRICING_PACKAGING_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SALES_PRICING_PACKAGING_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_pricing_packaging_intelligence' AND integration_key='sales_pricing_packaging_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_pricing_packaging_intelligence' AND integration_key='sales_pricing_packaging_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_NEGOTIATION_SUPPORT_SOURCE_API_BASE_URL","AGA_NEGOTIATION_SUPPORT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='negotiation_support' AND integration_key='negotiation_support_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='negotiation_support' AND integration_key='negotiation_support_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_ENTERPRISE_ACCOUNT_DEVELOPMENT_SOURCE_API_BASE_URL","AGA_ENTERPRISE_ACCOUNT_DEVELOPMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='enterprise_account_development' AND integration_key='enterprise_account_development_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='enterprise_account_development' AND integration_key='enterprise_account_development_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SMB_MARKET_ACQUISITION_SOURCE_API_BASE_URL","AGA_SMB_MARKET_ACQUISITION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='smb_market_acquisition' AND integration_key='smb_market_acquisition_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='smb_market_acquisition' AND integration_key='smb_market_acquisition_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_VERTICAL_MARKET_SALES_SOURCE_API_BASE_URL","AGA_VERTICAL_MARKET_SALES_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='vertical_market_sales' AND integration_key='vertical_market_sales_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='vertical_market_sales' AND integration_key='vertical_market_sales_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_GEOGRAPHIC_MARKET_EXPANSION_SOURCE_API_BASE_URL","AGA_GEOGRAPHIC_MARKET_EXPANSION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='geographic_market_expansion' AND integration_key='geographic_market_expansion_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='geographic_market_expansion' AND integration_key='geographic_market_expansion_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CHANNEL_PARTNER_ACQUISITION_SOURCE_API_BASE_URL","AGA_CHANNEL_PARTNER_ACQUISITION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='channel_partner_acquisition' AND integration_key='channel_partner_acquisition_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='channel_partner_acquisition' AND integration_key='channel_partner_acquisition_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_STRATEGIC_PARTNERSHIP_DEVELOPMENT_SOURCE_API_BASE_URL","AGA_STRATEGIC_PARTNERSHIP_DEVELOPMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='strategic_partnership_development' AND integration_key='strategic_partnership_development_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='strategic_partnership_development' AND integration_key='strategic_partnership_development_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_REFERRAL_PROGRAM_OPERATIONS_SOURCE_API_BASE_URL","AGA_REFERRAL_PROGRAM_OPERATIONS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='referral_program_operations' AND integration_key='referral_program_operations_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='referral_program_operations' AND integration_key='referral_program_operations_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_AFFILIATE_CHANNEL_MANAGEMENT_SOURCE_API_BASE_URL","AGA_AFFILIATE_CHANNEL_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='affiliate_channel_management' AND integration_key='affiliate_channel_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='affiliate_channel_management' AND integration_key='affiliate_channel_management_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RESELLER_WHITE_LABEL_SALES_SOURCE_API_BASE_URL","AGA_RESELLER_WHITE_LABEL_SALES_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='reseller_white_label_sales' AND integration_key='reseller_white_label_sales_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='reseller_white_label_sales' AND integration_key='reseller_white_label_sales_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_MARKETPLACE_OPPORTUNITY_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_MARKETPLACE_OPPORTUNITY_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='marketplace_opportunity_intelligence' AND integration_key='marketplace_opportunity_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='marketplace_opportunity_intelligence' AND integration_key='marketplace_opportunity_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RFP_TENDER_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_RFP_TENDER_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='rfp_tender_intelligence' AND integration_key='rfp_tender_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='rfp_tender_intelligence' AND integration_key='rfp_tender_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PROCUREMENT_VENDOR_ONBOARDING_SOURCE_API_BASE_URL","AGA_PROCUREMENT_VENDOR_ONBOARDING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='procurement_vendor_onboarding' AND integration_key='procurement_vendor_onboarding_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='procurement_vendor_onboarding' AND integration_key='procurement_vendor_onboarding_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_FREELANCE_PLATFORM_OPPORTUNITY_SCORING_SOURCE_API_BASE_URL","AGA_FREELANCE_PLATFORM_OPPORTUNITY_SCORING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='freelance_platform_opportunity_scoring' AND integration_key='freelance_platform_opportunity_scoring_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='freelance_platform_opportunity_scoring' AND integration_key='freelance_platform_opportunity_scoring_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LOST_DEAL_REACTIVATION_SOURCE_API_BASE_URL","AGA_LOST_DEAL_REACTIVATION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lost_deal_reactivation' AND integration_key='lost_deal_reactivation_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lost_deal_reactivation' AND integration_key='lost_deal_reactivation_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_STALLED_DEAL_RECOVERY_SOURCE_API_BASE_URL","AGA_STALLED_DEAL_RECOVERY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='stalled_deal_recovery' AND integration_key='stalled_deal_recovery_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='stalled_deal_recovery' AND integration_key='stalled_deal_recovery_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_TRIAL_POC_CONVERSION_SOURCE_API_BASE_URL","AGA_TRIAL_POC_CONVERSION_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='trial_poc_conversion' AND integration_key='trial_poc_conversion_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='trial_poc_conversion' AND integration_key='trial_poc_conversion_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_UPSELL_OPPORTUNITY_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_UPSELL_OPPORTUNITY_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='upsell_opportunity_intelligence' AND integration_key='upsell_opportunity_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='upsell_opportunity_intelligence' AND integration_key='upsell_opportunity_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CROSS_SELL_OPPORTUNITY_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_CROSS_SELL_OPPORTUNITY_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cross_sell_opportunity_intelligence' AND integration_key='cross_sell_opportunity_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='cross_sell_opportunity_intelligence' AND integration_key='cross_sell_opportunity_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_RENEWAL_EXPANSION_REVENUE_SOURCE_API_BASE_URL","AGA_RENEWAL_EXPANSION_REVENUE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='renewal_expansion_revenue' AND integration_key='renewal_expansion_revenue_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='renewal_expansion_revenue' AND integration_key='renewal_expansion_revenue_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_CUSTOMER_ADVOCACY_REFERRALS_SOURCE_API_BASE_URL","AGA_CUSTOMER_ADVOCACY_REFERRALS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_advocacy_referrals' AND integration_key='customer_advocacy_referrals_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='customer_advocacy_referrals' AND integration_key='customer_advocacy_referrals_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_FORECASTING_COMMITMENTS_SOURCE_API_BASE_URL","AGA_SALES_FORECASTING_COMMITMENTS_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_forecasting_commitments' AND integration_key='sales_forecasting_commitments_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_forecasting_commitments' AND integration_key='sales_forecasting_commitments_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PIPELINE_HYGIENE_CRM_QUALITY_SOURCE_API_BASE_URL","AGA_PIPELINE_HYGIENE_CRM_QUALITY_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pipeline_hygiene_crm_quality' AND integration_key='pipeline_hygiene_crm_quality_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pipeline_hygiene_crm_quality' AND integration_key='pipeline_hygiene_crm_quality_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_LEAD_ROUTING_SLA_MANAGEMENT_SOURCE_API_BASE_URL","AGA_LEAD_ROUTING_SLA_MANAGEMENT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_routing_sla_management' AND integration_key='lead_routing_sla_management_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='lead_routing_sla_management' AND integration_key='lead_routing_sla_management_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_TERRITORY_CAPACITY_PLANNING_SOURCE_API_BASE_URL","AGA_TERRITORY_CAPACITY_PLANNING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='territory_capacity_planning' AND integration_key='territory_capacity_planning_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='territory_capacity_planning' AND integration_key='territory_capacity_planning_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_PERFORMANCE_COACHING_SOURCE_API_BASE_URL","AGA_SALES_PERFORMANCE_COACHING_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_performance_coaching' AND integration_key='sales_performance_coaching_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_performance_coaching' AND integration_key='sales_performance_coaching_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_REPRESENTATIVE_ASSISTANT_SOURCE_API_BASE_URL","AGA_SALES_REPRESENTATIVE_ASSISTANT_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_representative_assistant' AND integration_key='sales_representative_assistant_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_representative_assistant' AND integration_key='sales_representative_assistant_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_SALES_ENABLEMENT_ASSET_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_SALES_ENABLEMENT_ASSET_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_enablement_asset_intelligence' AND integration_key='sales_enablement_asset_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='sales_enablement_asset_intelligence' AND integration_key='sales_enablement_asset_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_COMPETITOR_DEAL_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_COMPETITOR_DEAL_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='competitor_deal_intelligence' AND integration_key='competitor_deal_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='competitor_deal_intelligence' AND integration_key='competitor_deal_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_PRICING_COMPETITIVENESS_INTELLIGENCE_SOURCE_API_BASE_URL","AGA_PRICING_COMPETITIVENESS_INTELLIGENCE_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pricing_competitiveness_intelligence' AND integration_key='pricing_competitiveness_intelligence_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='pricing_competitiveness_intelligence' AND integration_key='pricing_competitiveness_intelligence_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='awaiting_credentials',
    documentation_url='',
    credential_refs_json='["AGA_REVENUE_ATTRIBUTION_CHANNEL_ROI_SOURCE_API_BASE_URL","AGA_REVENUE_ATTRIBUTION_CHANNEL_ROI_SOURCE_API_KEY"]',
    owner_notes='The catalog does not specify an exact provider for this integration. Choose an approved provider and add its official HTTPS documentation, required scopes and real environment-variable names. Suggested variable names are placeholders only; store actual secrets in Cloudflare Worker Secrets and test an implemented adapter before marking connected.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='revenue_attribution_channel_roi' AND integration_key='revenue_attribution_channel_roi_source'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

UPDATE aga_division_integration_setup
SET setup_stage='in_progress',
    documentation_url='',
    credential_refs_json='[]',
    owner_notes='Internal workflow/registry step rather than a confirmed third-party connector. Define its owner, upstream source, input/output schema, retry/failure behavior and audit trail. No provider secret is assumed.',
    updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
WHERE integration_id=(
  SELECT id FROM aga_division_integrations
  WHERE division_slug='revenue_attribution_channel_roi' AND integration_key='revenue_attribution_channel_roi_workflow'
)
AND setup_stage='not_started' AND documentation_url=''
AND credential_refs_json='[]' AND owner_notes='';

