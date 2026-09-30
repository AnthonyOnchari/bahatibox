import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = ["index.html", "raffles.html", "raffle.html", "checkout.html", "sign-in.html", "seller.html", "dashboard.html", "draw.html", "admin.html", "terms.html", "privacy.html", "responsible-play.html", "styles.css", "app.js"];
const existing = new Set(await readdir(root));
const missing = expected.filter((file) => !existing.has(file));
if (missing.length) {
  console.error(`Missing static site files: ${missing.join(", ")}`);
  process.exitCode = 1;
} else {
  for (const file of expected.filter((name) => name.endsWith(".html"))) {
    const html = await readFile(path.join(root, file), "utf8");
    if (!html.includes('src="app.js"') || !html.includes('href="styles.css"')) throw new Error(`${file} must load the shared CSS and JavaScript.`);
  }
  await access(path.join(root, "styles", "base.css"));
  console.log(`Static site check passed: ${expected.length - 2} HTML pages and shared assets are present.`);
}
