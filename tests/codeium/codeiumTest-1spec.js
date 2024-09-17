import { test, expect } from '@playwright/test';

test('clicking on a button', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');

  // Find the button and click on it
  const button = await page.getByRole('button', { name: 'Click me' });
  await button.click();

  // Assert that the button was clicked successfully
  await expect(page).toHaveTitle('Success');
});