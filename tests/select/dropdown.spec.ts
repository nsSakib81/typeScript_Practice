import test, { Browser, BrowserContext, chromium, Page, expect } from "playwright/test"

test.describe("Learn How to handle alert", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeEach(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/dropdowns")
    })
    test("Select an dropdown based on value", async () => {
        // const fruits = await page.locator('//*[@id="fruits"]').click();
        await page.selectOption('//*[@id="fruits"]', { label: 'Mango' });
        const msg = await page.locator("//div[@class='notification is-success']//p[1]").textContent();
        console.log(msg);
        if (msg) {
            expect(msg).toContain("Mango");
        }

    });
    /*test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
    */
});   