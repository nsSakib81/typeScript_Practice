import test from "playwright/test";

test("test with shadow", async ({ page }) => {
    await page.goto("https://letcode.in/shadow");
    await page.fill("#fname", "Nazmus");
    await page.waitForTimeout(30000);
})