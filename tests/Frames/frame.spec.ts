import test, { Browser, BrowserContext, chromium, Page } from "playwright/test"

test.describe("Frames Leading Concept", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/frame")
    })
    test("Internet with frames", async () => {
        const frame = page.frame({ name: "firstFr" });// implement x-path
        if (frame != null) {
            await frame.fill("input[name='fname']", "Nazmus Sakib");
            await frame.fill("input[name='lname']", "Piash");
        }
        else throw new Error("No such frame")

    })
    test.afterAll(async () => {

        await page.waitForTimeout(2000);
        await page.close();
        await context.close();
        await browser.close();

    })
})    