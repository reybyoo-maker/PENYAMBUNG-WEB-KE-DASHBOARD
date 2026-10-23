import { readFileSync, writeFileSync } from "node:fs";

const id = String(process.env.D1_DATABASE_ID || "").trim();
if (!/^[0-9a-f-]{20,}$/i.test(id)) {
  throw new Error("D1_DATABASE_ID is missing or does not look like a Cloudflare D1 UUID.");
}
const source = readFileSync("wrangler.toml", "utf8");
if (/\[\[d1_databases\]\]/.test(source)) {
  throw new Error("wrangler.toml already declares D1. Review the binding before generating a deploy config.");
}
const generated = source.trimEnd() +
  "\n\n[[d1_databases]]\nbinding = \"DB\"\ndatabase_name = \"aigrowth-core-db\"\ndatabase_id = \"" + id + "\"\n";
writeFileSync("wrangler.deploy.toml", generated, "utf8");
console.log("Generated wrangler.deploy.toml with DB -> aigrowth-core-db.");
