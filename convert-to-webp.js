//converts images to webp
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Emulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root directory to scan
const publicDir = path.join(__dirname, "public");

// Supported extensions
const supportedExtensions = [".png"];

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
  } catch (err) {
    console.error(`❌ Error converting ${inputPath}:`, err);
  }
}

function convertDirectPngs(folderPath) {
  fs.readdirSync(folderPath, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(folderPath, entry.name);

    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!supportedExtensions.includes(ext)) return;

      const outputPath = path.join(
        folderPath,
        `${path.basename(entry.name, ext)}.webp`
      );
      convertImage(fullPath, outputPath);
    }
  });
}

// Scan only top-level folders inside /public
fs.readdirSync(publicDir, { withFileTypes: true }).forEach((entry) => {
  if (entry.isDirectory()) {
    const folderPath = path.join(publicDir, entry.name);
    convertDirectPngs(folderPath);
  }
});
