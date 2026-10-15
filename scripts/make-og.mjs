// Opens the /og page in Playwright's browser and saves it as the share image.
// Run with the dev server running: npm run og
import { chromium } from '@playwright/test';

const url = process.env.OG_URL ?? 'http://localhost:4321/og';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });

await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready); // wait for the real fonts
await page.screenshot({ path: 'public/og/default.png' });

await browser.close();
console.log('Saved public/og/default.png');