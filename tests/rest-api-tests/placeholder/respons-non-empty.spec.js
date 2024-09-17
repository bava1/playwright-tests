const { expect } = require('@playwright/test');
const { test } = require('@playwright/test');

test('API returns non-empty JSON', async ({ page }) => {
  // Sending a request to the API
  const response = await page.request.get('https://jsonplaceholder.typicode.com/posts');
  
  // We check that the response status is 200 (successful)
  expect(response.status()).toBe(200);
  
  // Check that Content-Type is JSON
  const contentType = response.headers()['content-type'];
  expect(contentType).toContain('application/json');
  
  // Get response body
  const responseBody = await response.json();
  
  // Check that the response body is not empty
  expect(Object.keys(responseBody).length).toBeGreaterThan(0);
});