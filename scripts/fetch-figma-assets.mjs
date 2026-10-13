
import { mkdir, writeFile } from 'node:fs/promises';

const FILE_KEY = 'kSwkbgQUGZ0Ktl2ng0J6MB';
const TOKEN = process.env.FIGMA_TOKEN;
if (!TOKEN) { console.error('Defina FIGMA_TOKEN antes de rodar.'); process.exit(1); }

const ASSETS = {
  'hero-bg.png': ['1:135', 'png', 2],
  'banner.png': ['1:285', 'png', 2],
  'category-tecnologia.png': ['1:146', 'png', 2],
  'category-supermercado.png': ['1:151', 'png', 2],
  'category-bebidas.png': ['1:156', 'png', 2],
  'category-ferramentas.png': ['1:161', 'png', 2],
  'category-saude.png': ['1:166', 'png', 2],
  'category-esportes.png': ['1:171', 'png', 2],
  'category-moda.png': ['1:176', 'png', 2],
  'orders.svg': ['1:26', 'svg', 1],
  'heart.svg': ['1:28', 'svg', 1],
  'user.svg': ['1:32', 'svg', 1],
  'cart.svg': ['1:38', 'svg', 1],
  'crown.svg': ['1:53', 'svg', 1],
  'search.svg': ['1:87', 'svg', 1],
  'arrow-left.svg': ['1:277', 'svg', 1],
  'arrow-right.svg': ['1:280', 'svg', 1],
  'plus.svg': ['1:1471', 'svg', 1],
  'minus.svg': ['1:1474', 'svg', 1],
};

const headers = { 'X-Figma-Token': TOKEN };
await mkdir('public/figma', { recursive: true });

for (const [name, [id, format, scale]] of Object.entries(ASSETS)) {
  const api = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(id)}&format=${format}&scale=${scale}`;
  const res = await fetch(api, { headers });
  const json = await res.json();
  const url = json.images?.[id];
  if (!url) { console.error(`✗ ${name}: ${json.err ?? 'sem URL (nó ' + id + ')'}`); continue; }
  const file = await fetch(url);
  await writeFile(`public/figma/${name}`, Buffer.from(await file.arrayBuffer()));
  console.log(`✓ ${name}`);
}
