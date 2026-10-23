import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) throw new Error("Usage: node scripts/resolve-d1-id.mjs <wrangler-d1-list.json>");
const raw = JSON.parse(readFileSync(file, "utf8"));
const databases = Array.isArray(raw) ? raw : (raw.result || raw.databases || raw.items || []);
const db = databases.find((item) => String(item.name || item.database_name || item.databaseName || "").toLowerCase() === "aigrowth-core-db");
const id = db && (db.uuid || db.database_id || db.databaseId || db.id);
if (!id || !/^[0-9a-f-]{20,}$/i.test(String(id))) {
  console.error("Available D1 databases:", databases.map((item) => ({name:item.name||item.database_name||item.databaseName,id:item.uuid||item.database_id||item.id})));
  throw new Error("Could not safely resolve D1 database named aigrowth-core-db. No resources were changed.");
}
console.log(String(id));
