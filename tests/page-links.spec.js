// @ts-check
const { test, expect } = require('@playwright/test');

test('page-navigations', async ({ page }) => {
	// walking through pages and taking screenshots
	await page.waitForTimeout(1000);
  await page.goto('http://vuetex.ba-va.eu/#/');

	await page.waitForTimeout(3000);
	await page.screenshot({ path: 'screens/example1.png' });

	await page.goto('http://vuetex.ba-va.eu/#/articles');
	await page.waitForTimeout(3000);
	await page.screenshot({ path: 'screens/example2.png' });

	await page.goto('http://vuetex.ba-va.eu/#/tasks');
	await page.waitForTimeout(3000);
	await page.screenshot({ path: 'screens/example3.png' });

	await page.goto('http://vuetex.ba-va.eu/#/about');
	await page.waitForTimeout(3000);
	await page.screenshot({ path: 'screens/example4.png' });

	await page.goto('http://vuetex.ba-va.eu/#/contacts');
	await page.waitForTimeout(3000);
	await page.screenshot({ path: 'screens/example5.png' });

});