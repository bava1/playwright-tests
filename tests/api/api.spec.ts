import { test, expect } from '../../fixtures/api/api.fixture';

test.describe('API GET Request Tests', () => {
    const endpoint = '/api/data'; // Укажите нужный эндпоинт

    test('should respond with status 200', async ({ getAPIResponse }) => {
        const response = await getAPIResponse(endpoint);
        expect(response.status()).toBe(200);
    });

    test('should respond with JSON content', async ({ getAPIResponse }) => {
        const response = await getAPIResponse(endpoint);
        const contentType = response.headers()['content-type'];
        expect(contentType).toContain('application/json');
    });

    test('should have the correct data structure', async ({ getAPIResponse }) => {
        const response = await getAPIResponse(endpoint);
        const data = await response.json();

        // Проверка структуры данных
        expect(data).toHaveProperty('id'); // например, если ожидается поле "id"
        expect(data).toHaveProperty('name'); // проверяем, что поле "name" существует
        expect(typeof data.id).toBe('number'); // проверка типа поля "id"
        expect(typeof data.name).toBe('string'); // проверка типа поля "name"
    });

    test('should return non-empty data', async ({ getAPIResponse }) => {
        const response = await getAPIResponse(endpoint);
        const data = await response.json();
        
        // Проверка, что данные не пустые
        expect(data).not.toBeNull();
        expect(Object.keys(data).length).toBeGreaterThan(0);
    });
});
