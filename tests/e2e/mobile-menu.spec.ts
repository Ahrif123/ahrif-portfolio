import { test, expect } from '@playwright/test';

test('TC_PORT_003 mobile menu opens, closes, and closes on Escape', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The menu button only exists on phones.');
  await page.goto('/');

  const nav = page.getByRole('navigation', { name: 'Main' });
  await expect(nav).toBeHidden();

  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(nav).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  // Focus returns to the button so keyboard users don't get lost
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
});