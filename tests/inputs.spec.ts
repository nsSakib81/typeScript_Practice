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
        await page.goto("https://letcode.in/edit")
    })

    test("Enter your full Name", async () => {
        const name = await page.locator("#fullName");
        await name?.type("Nazmus Sakib");

    })
    test("Append a text and press keyboard tab", async () => {
        const join = await page.locator("#join")
        await join?.focus();
        await page.keyboard.press("End");
        await join?.type("Human");
    })
    test("What is inside the text box", async () => {
        const text = await page.getAttribute("id=getMe", "value");
        console.log(text);
    })
    test("Clear the text", async () => {
        await page.fill('//*[@id="clearMe"]', "");
    })

    test.afterAll(async () => {
        await page.waitForTimeout(10000);
        await page.close();
        await context.close();
        await browser.close();
    })
})