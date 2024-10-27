import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://bavastudio.eu/#/');
  await page.waitForTimeout(5000);
  const title = await page.title();
  expect(title).toBe('bavastudio design art 3D paint');
});