// @ts-check
const { test, expect } = require('@playwright/test');

test('page-navigations', async ({ page }) => {
	// walking through pages and taking screenshots
	await page.waitForTimeout(1000);
  await page.goto('http://vuetex.ba-va.eu/#/tasks');

	await page.waitForTimeout(1000);
	await page.screenshot({ path: 'screens/example11.png' });
/*
	await page.waitForTimeout(1000);
	await page.click('a[href="#/about"] > button');

	await page.waitForTimeout(1000);
	await page.screenshot({ path: 'screens/example7.png' });
*/

});
