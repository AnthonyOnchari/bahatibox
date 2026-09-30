import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 3000);
let activePort = port;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon" };

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const target = path.resolve(root, relative);
    if (!target.startsWith(root + path.sep) && target !== path.join(root, "index.html")) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const info = await stat(target);
    const file = info.isDirectory() ? path.join(target, "index.html") : target;
    const body = await readFile(file);
    response.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && !process.env.PORT) {
    activePort += 1;
    server.listen(activePort, () => console.log(`Port ${port} is busy; BahatiBox static site: http://localhost:${activePort}`));
    return;
  }
  throw error;
});
server.listen(port, () => console.log(`BahatiBox static site: http://localhost:${port}`));
