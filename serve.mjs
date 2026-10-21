// Zero-dependency static server for local preview of The First Issue.
// Usage: node serve.mjs   (serves the project root on PORT, default 5616)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5617;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    // prevent path traversal
    const filePath = normalize(join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }

    let target = filePath;
    try {
      const s = await stat(target);
      if (s.isDirectory()) target = join(target, 'index.html');
    } catch { /* fall through to read attempt */ }

    const data = await readFile(target);
    const type = MIME[extname(target).toLowerCase()] || 'application/octet-stream';

    // HTTP Range support — Android Chrome's media stack requires 206 Partial
    // Content for <video> and stalls on a plain 200 (desktop tolerates it).
    // Without this, every site video froze on its first frame on a real phone.
    const range = req.headers.range;
    if (range) {
      const m = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (m && (m[1] !== '' || m[2] !== '')) {
        const total = data.length;
        let start = m[1] === '' ? total - Number(m[2]) : Number(m[1]);
        let end = (m[1] !== '' && m[2] !== '') ? Number(m[2]) : total - 1;
        if (start < 0) start = 0;
        if (end > total - 1) end = total - 1;
        if (start > end || start >= total) {
          res.writeHead(416, { 'Content-Range': `bytes */${total}` }).end();
          return;
        }
        res.writeHead(206, {
          'Content-Type': type,
          'Content-Range': `bytes ${start}-${end}/${total}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': end - start + 1,
        });
        res.end(data.subarray(start, end + 1));
        return;
      }
    }
    res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Length': data.length });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><title>404</title><h1>404 — not found</h1>');
  }
}).listen(PORT, () => console.log(`The First Issue → http://localhost:${PORT}`));
