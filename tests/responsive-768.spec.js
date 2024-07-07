const { test, expect } = require('@playwright/test');

test('change viewport size to 768px', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 800 }); // Setting the screen size

  await page.goto('http://vuetex.ba-va.eu/#/');

	//checking the side menu is working
	await page.click('.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-green-12.q-btn--actionable.q-focusable.q-hoverable.header-btn');
	await page.waitForTimeout(1000);
	await page.screenshot({ path: 'screens/example11.png' });


  // Finding a link using the href attribute
  const link = await page.$('a[href="#/about"]');

  // Checking that the link has been found
  if (link) {
    await link.click();
    console.log('Clicked on the About link');
  } else {
    console.error('About link not found');
  }

	await page.waitForTimeout(1000);
	await page.screenshot({ path: 'screens/example12.png' });
  
});
