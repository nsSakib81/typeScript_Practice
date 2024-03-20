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
        await page.goto("https://letcode.in/elements")
    })
    test("Enter Git UserName", async () => {
        const element = page.locator("input[name='username']");
        await element?.fill("nsSakib81");
        await element?.press("Enter");
        await page.locator("app-gitrepos ol li").last().waitFor({ state: "visible"});
        const repos = await page.locator("app-gitrepos ol li").count();
        console.log(repos);

    })
    test.afterAll(async () => {

        await page.waitForTimeout(2000);
        await page.close();
        await context.close();
        await browser.close();

    })
})    