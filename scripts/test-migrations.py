#!/usr/bin/env python3
"""Validate all repository SQL migrations with SQLite, mirroring D1's SQLite dialect."""
from pathlib import Path
import json
import sqlite3

root = Path(__file__).resolve().parent.parent
migration_files = sorted((root / "migrations").glob("*.sql"))
if not migration_files:
    raise SystemExit("No migrations found")

connection = sqlite3.connect(":memory:")
connection.execute("PRAGMA foreign_keys = ON")
for migration in migration_files:
    sql = migration.read_text(encoding="utf-8")
    try:
        connection.executescript(sql)
    except sqlite3.DatabaseError as error:
        raise SystemExit(f"Migration failed: {migration.name}: {error}") from error

def scalar(query: str) -> int:
    row = connection.execute(query).fetchone()
    return int(row[0]) if row else 0

divisions = scalar("SELECT COUNT(*) FROM aga_division_registry")
integrations = scalar("SELECT COUNT(*) FROM aga_division_integrations")
if divisions != 150:
    raise SystemExit(f"Expected 150 divisions, found {divisions}")
if integrations != 310:
    raise SystemExit(f"Expected 310 integration definitions, found {integrations}")
for table in ("website_analytics_events", "aga_division_registry", "aga_division_integrations", "aga_division_tasks"):
    exists = scalar("SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name=" + repr(table))
    if exists != 1:
        raise SystemExit(f"Expected table is missing: {table}")

catalog_source = (root / "src" / "divisions.js").read_text(encoding="utf-8")
catalog = json.loads(catalog_source.split("=", 1)[1].strip().removesuffix(";"))
catalog_slugs = {item["slug"] for item in catalog}
database_slugs = {row[0] for row in connection.execute("SELECT slug FROM aga_division_registry")}
if catalog_slugs != database_slugs:
    raise SystemExit(
        "Expected catalog and D1 division slugs to match; "
        f"missing in D1={sorted(catalog_slugs - database_slugs)[:10]}, "
        f"unexpected in D1={sorted(database_slugs - catalog_slugs)[:10]}"
    )

catalog_integrations = {
    (division["slug"], integration["key"])
    for division in catalog
    for integration in division["integrations"]
}
database_integrations = {
    (row[0], row[1])
    for row in connection.execute("SELECT division_slug, integration_key FROM aga_division_integrations")
}
if catalog_integrations != database_integrations:
    raise SystemExit(
        "Expected catalog and D1 integration keys to match; "
        f"missing={sorted(catalog_integrations - database_integrations)[:10]}, "
        f"unexpected={sorted(database_integrations - catalog_integrations)[:10]}"
    )

foreign_key_errors = connection.execute("PRAGMA foreign_key_check").fetchall()
if foreign_key_errors:
    raise SystemExit(f"Foreign-key validation failed: {foreign_key_errors}")

print(f"Validated {len(migration_files)} migrations; {divisions} divisions; {integrations} integration records; task and analytics schemas present.")
