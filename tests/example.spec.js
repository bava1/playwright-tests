// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://vuetex.ba-va.eu/#/');
  await expect(page).toHaveTitle('vuetex');

});
