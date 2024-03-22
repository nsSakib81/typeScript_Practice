import test from "playwright/test";

test("github skip login", async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("https://github.com/login");
    await page.waitForTimeout(5000);
})