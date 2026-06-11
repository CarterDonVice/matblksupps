/**
 * Image pipeline for icons and the product photo.
 *
 * Usage: node scripts/optimize-images.mjs
 *
 * - Generates src/app/apple-icon.png (180x180) and public/icons/icon-192.png /
 *   icon-512.png from public/images/AbrevLogoMini.png centered on the brand
 *   ink background (#141414).
 * - Recompresses public/images/product_image_1.png in place at 1024x1024,
 *   targeting under 300KB.
 */
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';

const INK = { r: 0x14, g: 0x14, b: 0x14, alpha: 1 };
const LOGO = 'public/images/AbrevLogoMini.png';

async function icon(size, dest, logoRatio = 0.62) {
  const logoSize = Math.round(size * logoRatio);
  const logo = await sharp(LOGO)
    .resize(logoSize, logoSize, { fit: 'contain', background: INK })
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: INK },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(dest);
  console.log(`wrote ${dest} (${size}x${size})`);
}

async function compressProductImage() {
  const src = 'public/images/product_image_1.png';
  const before = (await stat(src)).size;
  const buf = await sharp(src)
    .resize(1024, 1024, { fit: 'inside' })
    .png({ compressionLevel: 9, palette: true, quality: 80, colors: 192 })
    .toBuffer();
  await sharp(buf).toFile(src);
  const after = (await stat(src)).size;
  console.log(
    `compressed ${src}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  );
}

await mkdir('public/icons', { recursive: true });
await icon(180, 'src/app/apple-icon.png');
await icon(192, 'public/icons/icon-192.png');
await icon(512, 'public/icons/icon-512.png');
await compressProductImage();
