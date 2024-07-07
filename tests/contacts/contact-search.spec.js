const { test, expect } = require('@playwright/test');

test('search contacts and count', async ({ page }) => {
  await page.goto('http://vuetex.ba-va.eu/#/contacts');

  // Waiting for the contact search input field to load
  await page.waitForSelector('.contacts-input input');

  // Entering the text "He" in the search field
  await page.type('.contacts-input input', 'He');

  // Wait 2 seconds for search to complete
  await page.waitForTimeout(2000);

  // Counting contacts found
  const contacts = await page.$$eval('.q-scrollarea__content .item', items => items.length);

  // Displaying the number of contacts found
  console.log(`Number of contacts found: ${contacts}`);
});
