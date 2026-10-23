#!/usr/bin/env python3
"""Validate all repository SQL migrations with SQLite, mirroring D1's SQLite dialect."""
from pathlib import Path
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
if divisions != 11:
    raise SystemExit(f"Expected 11 divisions, found {divisions}")
if integrations != 32:
    raise SystemExit(f"Expected 32 integration definitions, found {integrations}")
for table in ("website_analytics_events", "aga_division_registry", "aga_division_integrations", "aga_division_tasks"):
    exists = scalar("SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name=" + repr(table))
    if exists != 1:
        raise SystemExit(f"Expected table is missing: {table}")

foreign_key_errors = connection.execute("PRAGMA foreign_key_check").fetchall()
if foreign_key_errors:
    raise SystemExit(f"Foreign-key validation failed: {foreign_key_errors}")

print(f"Validated {len(migration_files)} migrations; {divisions} divisions; {integrations} integration records; task and analytics schemas present.")
