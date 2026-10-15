import { test, expect } from '@playwright/test';
import { pages } from '../pages';

for (const { path, heading } of pages) {
  test(`TC_PORT_001 ${path} loads with the right title and heading`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Ahrif/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
  });

  test(`TC_PORT_004 ${path} has no sideways scrolling`, async ({ page }) => {
    await page.goto(path);
    const overflows = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflows, 'page is wider than the screen').toBe(false);
  });
}

test('TC_PORT_002 menu links land on their sections below the sticky header', async ({ page, isMobile }) => {
  test.skip(isMobile, 'The desktop menu is hidden on phones; TC_PORT_003 covers mobile.');
  await page.goto('/');
  const header = page.locator('.site-header');

  for (const [label, headingId] of [['Work', 'work-title'], ['Experience', 'experience-title']]) {
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: label }).click();
    const target = page.locator(`#${headingId}`);
    await expect(target).toBeInViewport();

    const headerBox = await header.boundingBox();
    const targetBox = await target.boundingBox();
    expect(targetBox!.y, `${label} heading is hidden under the header`).toBeGreaterThanOrEqual(headerBox!.height - 1);
  }
});

test('TC_PORT_005 every internal link and download on each page works', async ({ page, request }) => {
  const checked = new Set<string>();

  for (const { path } of pages) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href^="/"]', (links) =>
      links.map((a) => a.getAttribute('href')!.split('#')[0] || '/'),
    );

    for (const href of hrefs) {
      if (checked.has(href)) continue;
      checked.add(href);
      const res = await request.get(href);
      expect.soft(res.status(), `${href} (linked from ${path})`).toBe(200);
    }
  }
});