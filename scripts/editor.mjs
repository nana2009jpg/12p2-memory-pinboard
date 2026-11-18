import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { randomBytes } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const runFile = promisify(execFile);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const editorRoot = join(root, "editor");
const publicRoot = join(root, "public");
const configPath = join(root, "site-config.js");
const host = "127.0.0.1";
const port = Number(process.env.EDITOR_PORT || 4190);
const token = randomBytes(24).toString("hex");
const maxImageBytes = 12 * 1024 * 1024;
const maxMusicBytes = 60 * 1024 * 1024;

const members = [
  "Nguyễn Minh An", "Đỗ Đức Anh", "Nguyễn Minh Đức", "Phạm Minh Đức", "Nguyễn Hoàng Bắc Hải",
  "Bùi Trung Hưng", "Đồng Xuân Khoa", "Nguyễn Trung Kiên", "Nguyễn Tuấn Kiệt", "Nguyễn Bình Minh",
  "Nguyễn Đức Minh", "Phạm Đức Minh", "Nguyễn Hoàng Minh", "Trần Phú Minh", "Đỗ Quang Minh",
  "Lê Quang Minh", "Nguyễn Tiến Minh (A)", "Nguyễn Tiến Minh (B)", "Ngô Quốc Phong", "Nguyễn Vinh Phúc",
  "Nguyễn Minh Quang", "Phạm Minh Quân", "Ngô Hoàng Thái", "Nguyễn Thế Trung", "Phạm Minh Tuấn"
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".mp3": "audio/mpeg", ".wav": "audio/wav",
  ".m4a": "audio/mp4", ".ogg": "audio/ogg", ".aac": "audio/aac"
};
const imageExtensions = new Map([["image/jpeg", ".jpg"], ["image/png", ".png"], ["image/webp", ".webp"], ["image/gif", ".gif"]]);
const audioExtensions = new Map([["audio/mpeg", ".mp3"], ["audio/wav", ".wav"], ["audio/x-wav", ".wav"], ["audio/mp4", ".m4a"], ["audio/ogg", ".ogg"], ["audio/aac", ".aac"]]);

function send(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, { "Content-Type": contentType, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  response.end(body);
}

function sendJson(response, statusCode, value) {
  send(response, statusCode, JSON.stringify(value), "application/json; charset=utf-8");
}

function isInside(base, target) {
  const result = relative(base, target);
  return result === "" || (!result.startsWith("..") && !result.includes(":"));
}

async function readConfig() {
  try {
    const source = await readFile(configPath, "utf8");
    const json = source.replace(/^\s*window\.SITE_CONFIG\s*=\s*/, "").replace(/;\s*$/, "");
    const parsed = JSON.parse(json);
    return { memberPhotos: parsed.memberPhotos || {}, music: parsed.music || "" };
  } catch {
    return { memberPhotos: {}, music: "" };
  }
}

async function writeConfig(config) {
  await writeFile(configPath, `window.SITE_CONFIG = ${JSON.stringify(config, null, 2)};\n`, "utf8");
}

async function readBody(request, limit) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > limit) throw new Error(`File vượt giới hạn ${Math.round(limit / 1024 / 1024)} MB`);
    chunks.push(chunk);
  }
  if (!size) throw new Error("Chưa chọn file");
  return Buffer.concat(chunks);
}

function authorized(request) {
  return request.headers["x-editor-token"] === token;
}

async function git(args, allowFailure = false) {
  try {
    return await runFile("git", ["-c", `safe.directory=${root.replaceAll("\\", "/")}`, ...args], { cwd: root, windowsHide: true, maxBuffer: 2_000_000 });
  } catch (error) {
    if (allowFailure) return { stdout: error.stdout || "", stderr: error.stderr || "", code: error.code };
    throw error;
  }
}

async function deploy() {
  await runFile(process.execPath, [join(root, "scripts", "build.mjs")], { cwd: root, windowsHide: true });
  await git(["add", "site-config.js"]);
  try {
    if ((await stat(join(publicRoot, "assets"))).isDirectory()) await git(["add", "public/assets"]);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  const staged = await git(["diff", "--cached", "--quiet"], true);
  if (staged.code === 1) await git(["commit", "-m", "Update class photos and music"]);
  else if (staged.code && staged.code !== 0) throw new Error(staged.stderr || "Không kiểm tra được thay đổi Git");
  await git(["fetch", "origin", "main"]);
  await git(["rebase", "origin/main"]);
  const pushed = await git(["push", "origin", "main"]);
  const latest = await git(["log", "-1", "--pretty=%h"]);
  return { commit: latest.stdout.trim(), output: (pushed.stderr || pushed.stdout || "Đã push").trim() };
}

async function serveFile(response, filePath, transform) {
  if (!isInside(root, filePath)) return send(response, 403, "Forbidden");
  try {
    if (!(await stat(filePath)).isFile()) throw new Error("Not a file");
    let content = await readFile(filePath);
    if (transform) content = Buffer.from(transform(content.toString("utf8")));
    send(response, 200, content, mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream");
  } catch {
    send(response, 404, "Not found");
  }
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${host}:${port}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      if (!authorized(request)) return sendJson(response, 403, { error: "Phiên editor không hợp lệ" });

      if (request.method === "GET" && url.pathname === "/api/state") {
        return sendJson(response, 200, { members, config: await readConfig() });
      }

      if (request.method === "POST" && url.pathname === "/api/upload/photo") {
        const member = Number(url.searchParams.get("member"));
        const extension = imageExtensions.get(String(request.headers["content-type"] || "").split(";")[0]);
        if (!Number.isInteger(member) || member < 0 || member >= members.length) throw new Error("Hồ sơ không hợp lệ");
        if (!extension) throw new Error("Chỉ nhận JPG, PNG, WEBP hoặc GIF");
        const body = await readBody(request, maxImageBytes);
        const directory = join(publicRoot, "assets", "photos");
        const filename = `member-${String(member + 1).padStart(2, "0")}${extension}`;
        await mkdir(directory, { recursive: true });
        await writeFile(join(directory, filename), body);
        const config = await readConfig();
        config.memberPhotos[member] = `./assets/photos/${filename}`;
        await writeConfig(config);
        return sendJson(response, 200, { path: config.memberPhotos[member], name: members[member] });
      }

      if (request.method === "POST" && url.pathname === "/api/upload/music") {
        const extension = audioExtensions.get(String(request.headers["content-type"] || "").split(";")[0]);
        if (!extension) throw new Error("Chỉ nhận MP3, WAV, M4A, OGG hoặc AAC");
        const body = await readBody(request, maxMusicBytes);
        const directory = join(publicRoot, "assets", "music");
        const filename = `background${extension}`;
        await mkdir(directory, { recursive: true });
        await writeFile(join(directory, filename), body);
        const config = await readConfig();
        config.music = `./assets/music/${filename}`;
        await writeConfig(config);
        return sendJson(response, 200, { path: config.music });
      }

      if (request.method === "POST" && url.pathname === "/api/deploy") {
        return sendJson(response, 200, await deploy());
      }
      return sendJson(response, 404, { error: "API không tồn tại" });
    }

    if (url.pathname === "/" || url.pathname === "/editor") {
      return serveFile(response, join(editorRoot, "index.html"), source => source.replace("__EDITOR_TOKEN__", token));
    }
    if (url.pathname.startsWith("/editor/")) {
      return serveFile(response, normalize(join(editorRoot, url.pathname.slice("/editor/".length))));
    }
    if (url.pathname.startsWith("/preview/")) {
      const requested = url.pathname.slice("/preview/".length) || "index.html";
      const filePath = requested.startsWith("assets/") ? join(publicRoot, requested) : join(root, requested);
      return serveFile(response, normalize(filePath));
    }
    send(response, 404, "Not found");
  } catch (error) {
    sendJson(response, 400, { error: error.message || "Thao tác thất bại" });
  }
});

server.listen(port, host, () => {
  console.log(`Class Memory Editor: http://${host}:${port}/`);
  console.log("Giữ cửa sổ này mở trong lúc chỉnh sửa hoặc deploy.");
});
