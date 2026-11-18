import { cp, mkdir, rm, stat } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "dist");
const sourceFiles = ["index.html", "styles.css", "refinements.css", "app.js", "favicon.svg"];

if (relative(root, output) !== "dist") throw new Error("Unsafe output directory");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of sourceFiles) {
  await cp(join(root, file), join(output, file));
}

try {
  if ((await stat(join(root, "public"))).isDirectory()) {
    await cp(join(root, "public"), output, { recursive: true });
  }
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

console.log(`Built ${sourceFiles.length} source files into ${output}`);
