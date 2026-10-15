import { test, expect } from '@playwright/test';
import { pages } from '../pages';

for (const { path } of pages) {
  test(`TC_PORT_020 ${path} has a title, description, canonical link and share image`, async ({ page, request }) => {
    await page.goto(path);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description?.length ?? 0, 'description is too short').toBeGreaterThan(50);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\//);

    // The share image must actually exist, or link previews show a blank box
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    const imagePath = new URL(ogImage!).pathname;
    const res = await request.get(imagePath);
    expect(res.status(), `share image ${imagePath}`).toBe(200);
  });
}

test('TC_PORT_021 homepage describes Ahrif as a Person for search engines', async ({ page }) => {
  await page.goto('/');
  const json = await page.locator('script[type="application/ld+json"]').first().textContent();
  const data = JSON.parse(json!);
  expect(data['@type']).toBe('Person');
  expect(data.name).toBe('Ahrif Hajjie Cruz');
  expect(data.jobTitle).toBeTruthy();
});