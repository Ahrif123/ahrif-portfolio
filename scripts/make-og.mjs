// Saves the /og page as the share image (public/og/default.png).
// Uses your dev server if it's running; otherwise starts one just for this.
import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';

const url = process.env.OG_URL ?? 'http://localhost:4321/og';

async function isUp() {
  try { return (await fetch(url)).ok; } catch { return false; }
}

let server;
if (!(await isUp())) {
  console.log('No dev server found, starting one…');
  server = spawn('npx', ['astro', 'dev', '--port', '4321'], { shell: true, stdio: 'ignore' });
  for (let i = 0; i < 60 && !(await isUp()); i++) await new Promise((r) => setTimeout(r, 500));
  if (!(await isUp())) {
    server.kill();
    throw new Error('Could not start the dev server. Run "npm run dev" in another terminal, then try again.');
  }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready); // wait for the real fonts
await page.screenshot({ path: 'public/og/default.png' });
await browser.close();

if (server) {
  // On Windows the server runs in a child shell, so stop the whole process tree
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { shell: true });
  else server.kill();
}
console.log('Saved public/og/default.png');