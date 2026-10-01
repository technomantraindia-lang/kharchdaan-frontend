import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'c:/Users/LENOVO/Downloads/kharchdaan.com/frontend/public/images/kharchdaan-logo.png';
const buffer = fs.readFileSync(inputPath);
const png = PNG.sync.read(buffer);

console.log(`Image size: ${png.width}x${png.height}`);

// Sample corner pixels
for (let y = 0; y < 5; y++) {
  for (let x = 0; x < 5; x++) {
    const idx = (png.width * y + x) << 2;
    console.log(`Corner [${x},${y}]: R=${png.data[idx]}, G=${png.data[idx+1]}, B=${png.data[idx+2]}, A=${png.data[idx+3]}`);
  }
}
