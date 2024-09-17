const { test, expect } = require('@playwright/test');

test('Проверка отправки и получения данных с REST API', async ({ page }) => {
  // Интерцепция запросов к REST API
  await page.route('**/api/data', async (route) => {
    const response = await route.request();
    const postData = response.postData();

    // Пример проверки тела запроса
    expect(postData).toEqual({
      key1: 'value1',
      key2: 'value2'
    });

    // Пример изменения ответа (mock API response)
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: 'mockedData' })
    });
  });

  // Открытие страницы
  await page.goto('https://example.com');
  
  // Допустим, ваше приложение делает запрос к /api/data
  await page.click('button#fetchData');

  // Ожидание отображения результата запроса на странице
  const result = await page.textContent('#result');
  expect(result).toBe('mockedData');
});
