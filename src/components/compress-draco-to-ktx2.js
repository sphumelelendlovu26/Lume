// compress-draco-to-ktx2.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

const folders = await fs.promises.readdir(publicDir);

for (const folder of folders) {
  const modelDir = path.join(publicDir, folder);
  const inputPath = path.join(modelDir, "scene-draco.glb");
  const outputPath = path.join(modelDir, "scene-ktx2.glb");

  console.log(`🔍 Checking for: ${inputPath}`);

  try {
    await fs.promises.access(inputPath);
    console.log(`🔄 Compressing textures in ${folder}...`);

    await new Promise((resolve, reject) => {
      const fullCommand = `npx gltf-transform etc1s "${inputPath}" "${outputPath}"`;
      const command = spawn(fullCommand, { shell: true });

      command.stdout.on("data", (data) => {
        console.log(`✅ ${folder}: ${data.toString().trim()}`);
      });

      command.stderr.on("data", (data) => {
        console.error(
          `❌ Error compressing ${folder}: ${data.toString().trim()}`
        );
      });

      command.on("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Exited with code ${code}`));
        }
      });

      command.on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    console.warn(`⚠️ Skipped ${folder}: ${err.message}`);
  }
}
