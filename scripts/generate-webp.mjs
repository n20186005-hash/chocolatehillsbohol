/**
 * 生成 WebP 版本（两套尺寸，用于 <picture>/srcset 响应式加载）
 * - {slug}-480.webp ：画廊缩略图（网格中约 1/3 屏宽）
 * - {slug}-1600.webp：Hero / About / 灯箱大图
 * 背景：GSC 行動裝置曝光占 57%，原 JPG 合计 3.17MB，图片体积是移动端 CWV 的主要瓶颈。
 * 用法：node scripts/generate-webp.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const galleryDir = path.join(root, 'public', 'gallery');

const VARIANTS = [
  { suffix: '-480', width: 480, height: 360, quality: 72 },
  { suffix: '-1400', width: 1400, height: 1050, quality: 62 },
];

// 清理旧的单尺寸产物
for (const stale of fs.readdirSync(galleryDir)) {
  if (/^chocolate-hills-carmen-bohol-\d+\.webp$/.test(stale)) {
    fs.rmSync(path.join(galleryDir, stale));
    console.log(`removed stale ${stale}`);
  }
}

const files = fs.readdirSync(galleryDir).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = path.join(galleryDir, file);
  const base = file.replace(/\.jpe?g$/i, '');
  const srcSize = fs.statSync(src).size;
  before += srcSize;

  for (const v of VARIANTS) {
    const out = path.join(galleryDir, `${base}${v.suffix}.webp`);
    const info = await sharp(src)
      .resize({ width: v.width, height: v.height, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 5 })
      .toFile(out);
    after += info.size;
    console.log(`${file} -> ${base}${v.suffix}.webp  ${(info.size / 1024).toFixed(0)}KB`);
  }
}

console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(2)}MB (jpg) + ${(after / 1024 / 1024).toFixed(2)}MB (webp variants)`
);
