import { test } from "playwright/test";

// test.describe('Launch Browser', ( ) => {
test('Open Letcode', async ({ page }) => {

    await test.step("Go to the homepage", async () => {
        await page.goto('https://www.w3schools.com/');

    })

})
