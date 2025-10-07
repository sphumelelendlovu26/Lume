import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "public");

const folders = await fs.promises.readdir(publicDir);

for (const folder of folders) {
  const modelDir = path.join(publicDir, folder);
  const inputPath = path.join(modelDir, "scene.gltf");
  const outputPath = path.join(modelDir, "scene-draco.glb");

  try {
    const stat = await fs.promises.stat(inputPath);
    if (!stat.isFile()) {
      console.warn(`⚠️ No scene.gltf found in ${folder}`);
      continue;
    }

    const command = `gltf-transform draco "${inputPath}" "${outputPath}"`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`❌ Error compressing ${folder}:`, stderr);
      } else {
        console.log(`✅ Compressed ${folder} → scene-draco.glb`);
      }
    });
  } catch (err) {
    console.warn(`⚠️ Skipped ${folder}:`, err.message);
  }
}
