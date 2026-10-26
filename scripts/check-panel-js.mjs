import { DIVISIONS_PANEL_JS } from "../src/divisions-panel.js";
new Function(DIVISIONS_PANEL_JS);
if (!DIVISIONS_PANEL_JS.includes("AIGROWTH")) throw new Error("Sidebar script missing");
if (!DIVISIONS_PANEL_JS.includes("Integration Center")) throw new Error("Integration workspace missing");
if (!DIVISIONS_PANEL_JS.includes("Research & Evidence")) throw new Error("Research workspace missing");
console.log("Division sidebar/workspace script parses.");
