const { test, expect } = require('@playwright/test');

test('articles', async ({ page }) => {
  await page.goto('http://vuetex.ba-va.eu/#/articles');

	// Getting all articles elements
	const articles = await page.$$('.articles-blocks .q-expansion-item');

  console.log(`Total number of tasks: ${articles.length}`);

  // We use the $$eval method to execute JavaScript on the page and receive data
  const itemLabels = await page.$$eval('.q-item__label', labels => labels.map(label => label.textContent.trim()));

  console.log('List of element names:');
  console.log(itemLabels);
	
});