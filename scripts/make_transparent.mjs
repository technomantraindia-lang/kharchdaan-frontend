import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'c:/Users/LENOVO/Downloads/kharchdaan.com/frontend/public/images/kharchdaan-logo.png';
const buffer = fs.readFileSync(inputPath);
const srcPng = PNG.sync.read(buffer);

const { width, height, data } = srcPng;

// First pass: find background mask and bounding box of foreground
let minX = width, minY = height, maxX = 0, maxY = 0;

const isWhiteBg = (r, g, b) => {
  const minVal = Math.min(r, g, b);
  const maxVal = Math.max(r, g, b);
  const diff = maxVal - minVal;
  // White or near-white background
  return minVal >= 235 && diff <= 18;
};

// Create a copy with transparency
const outPng = new PNG({ width, height });

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (width * y + x) << 2;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];

    if (isWhiteBg(r, g, b)) {
      outPng.data[idx] = 0;
      outPng.data[idx + 1] = 0;
      outPng.data[idx + 2] = 0;
      outPng.data[idx + 3] = 0;
    } else {
      // Check if it's an edge antialiased pixel
      const minVal = Math.min(r, g, b);
      const maxVal = Math.max(r, g, b);
      const diff = maxVal - minVal;

      if (minVal >= 200 && diff < 25) {
        // Soft edge antialiasing for text / shapes against white
        const alphaFraction = Math.max(0, Math.min(1, 1 - (minVal - 190) / 45));
        const newA = Math.round(alphaFraction * 255);
        if (newA === 0) {
          outPng.data[idx] = 0;
          outPng.data[idx + 1] = 0;
          outPng.data[idx + 2] = 0;
          outPng.data[idx + 3] = 0;
        } else {
          // De-matting: recover foreground color without white haze
          const alphaNorm = newA / 255;
          const nr = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - alphaNorm)) / alphaNorm)));
          const ng = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - alphaNorm)) / alphaNorm)));
          const nb = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - alphaNorm)) / alphaNorm)));

          outPng.data[idx] = nr;
          outPng.data[idx + 1] = ng;
          outPng.data[idx + 2] = nb;
          outPng.data[idx + 3] = newA;

          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      } else {
        outPng.data[idx] = r;
        outPng.data[idx + 1] = g;
        outPng.data[idx + 2] = b;
        outPng.data[idx + 3] = 255;

        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
}

console.log(`Foreground bounding box: [${minX}, ${minY}] to [${maxX}, ${maxY}]`);
console.log(`Content dimensions: ${maxX - minX + 1}x${maxY - minY + 1}`);

// Now create a tightly trimmed transparent version with a slight padding (e.g. 10px)
const padding = 12;
const cropX = Math.max(0, minX - padding);
const cropY = Math.max(0, minY - padding);
const cropW = Math.min(width - cropX, (maxX - minX + 1) + padding * 2);
const cropH = Math.min(height - cropY, (maxY - minY + 1) + padding * 2);

const croppedPng = new PNG({ width: cropW, height: cropH });

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = (width * (cropY + y) + (cropX + x)) << 2;
    const dstIdx = (cropW * y + x) << 2;

    croppedPng.data[dstIdx] = outPng.data[srcIdx];
    croppedPng.data[dstIdx + 1] = outPng.data[srcIdx + 1];
    croppedPng.data[dstIdx + 2] = outPng.data[srcIdx + 2];
    croppedPng.data[dstIdx + 3] = outPng.data[srcIdx + 3];
  }
}

// Write the transparent trimmed PNG back to public/images/kharchdaan-logo.png
const outBuffer = PNG.sync.write(croppedPng);
fs.writeFileSync(inputPath, outBuffer);
console.log(`Successfully written transparent cropped logo to ${inputPath} (${cropW}x${cropH}, ${outBuffer.length} bytes)`);
