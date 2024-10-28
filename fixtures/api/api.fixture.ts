import { test as base, expect, APIResponse } from '@playwright/test';

type APIFixtures = {
    getAPIResponse: (endpoint: string) => Promise<APIResponse>;
};

const test = base.extend<APIFixtures>({
    getAPIResponse: async ({ request }, use) => {
        const getAPIResponse = async (endpoint: string): Promise<APIResponse> => {
            return await request.get(endpoint);
        };
        await use(getAPIResponse);
    },
});

export { test, expect };
