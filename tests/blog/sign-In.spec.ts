const { test, expect } = require('@playwright/test');
import { Page } from '@playwright/test';

test('blog auth sign in', async ({ page }: { page: Page }) => {
  // your code here
  await page.waitForTimeout(1000);
  await page.goto('http://blog.ba-va.eu/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByPlaceholder('email').click();
  await page.getByPlaceholder('email').fill('test@test.com');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('123456');
  await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(5000);
  await page.locator('svg').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Log out' }).click();
  await page.waitForTimeout(3000);

});

// test@test.com
// 123456