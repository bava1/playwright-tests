const { test, expect, request } = require('@playwright/test');
// mock api jsonplaceholder
test('Get data from jsonplaceholder REST API', async ({ request }) => {
  // Making a GET request to the REST API
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/3');

  // Checking the response status
  expect(response.status()).toBe(200);

  // Getting the response body
  const responseData = await response.json();
  console.log('Response data count:', responseData);
  //const responseRes = responseData[1];
  // Checking data in response
  //expect(responseRes).toHaveProperty('userId', 1);

});
