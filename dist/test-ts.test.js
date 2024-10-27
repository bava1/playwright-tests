"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('example test', async ({ page }) => {
    await page.goto('https://bavastudio.eu/#/');
    await page.waitForTimeout(5000);
    const title = await page.title();
    (0, test_1.expect)(title).toBe('bavastudio design art 3D paint');
});
