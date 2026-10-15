import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { pages } from '../pages';

for (const { path } of pages) {
  test(`TC_PORT_010 ${path} has no WCAG A/AA accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    // Readable summary if anything fails: rule, what it means, and how many elements
    const summary = results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length} element(s))`);
    expect(summary).toEqual([]);
  });
}