/**
 * 图片规范化与压缩
 * - 重命名：chocolate-hills-N.jpg -> chocolate-hills-carmen-bohol-N.jpg（小写短横线 + 序号）
 * - 压缩：等比缩放至最大宽 1600px，mozjpeg quality 76、渐进式、去除元数据
 * 用法：node scripts/optimize-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const galleryDir = path.join(root, 'public', 'gallery');
const SLUG = 'chocolate-hills-carmen-bohol';
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1200;
const QUALITY = 76;
const SKIP_BELOW_BYTES = 420 * 1024;

const files = fs
  .readdirSync(galleryDir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => {
    const na = Number((a.match(/(\d+)\.jpe?g$/i) || [0, 0])[1]);
    const nb = Number((b.match(/(\d+)\.jpe?g$/i) || [0, 0])[1]);
    return na - nb;
  });

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const num = (file.match(/(\d+)\.jpe?g$/i) || [0, '0'])[1];
  const target = `${SLUG}-${num}.jpg`;
  const src = path.join(galleryDir, file);
  const out = path.join(galleryDir, target);
  const before = fs.statSync(src).size;
  totalBefore += before;

  if (file === target && before < SKIP_BELOW_BYTES) {
    totalAfter += before;
    console.log(`skip  ${file} (${(before / 1024).toFixed(0)} KB, already optimized)`);
    continue;
  }

  // 先读入内存再交给 sharp，避免 sharp 仍持有源文件句柄导致回写冲突
  const input = await fs.promises.readFile(src);
  const buf = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, height: MAX_HEIGHT, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toBuffer({ resolveWithObject: true });

  fs.writeFileSync(out, buf.data);
  if (file !== target) fs.rmSync(src, { force: true });

  const after = fs.statSync(out).size;
  totalAfter += after;
  console.log(
    `${file} -> ${target}  ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB  (${buf.info.width}x${buf.info.height})`
  );
}

console.log(
  `\ntotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB`
);
