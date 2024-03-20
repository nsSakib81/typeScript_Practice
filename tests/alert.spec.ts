import test, { Browser, BrowserContext, chromium, Page } from "playwright/test"

test.describe("Learn How to handle alert", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/alert")
    })
    test("handle Dialogues", async () => {
        // const element = page.locator('//*[@id="prompt"]');
        await page.locator('//*[@id="prompt"]').click();
        await page.waitForTimeout(2000);
    })
    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
})    