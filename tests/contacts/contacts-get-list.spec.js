const { test, expect } = require('@playwright/test');

test('contacts-get-list', async ({ page }) => {
  await page.goto('http://vuetex.ba-va.eu/#/contacts');

  // Waiting for contacts to load
  await page.waitForSelector('.q-scrollarea__content .item');

  // Retrieving all contacts
  const contacts = await page.$$('.q-scrollarea__content .item');

  // Displaying a list of contacts and their number
  console.log(`Total number of contacts: ${contacts.length}`);

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const name = await contact.$eval('.item-names_name', el => el.textContent.trim());
    console.log(`Contact ${i + 1}: ${name}`);
  }
});
