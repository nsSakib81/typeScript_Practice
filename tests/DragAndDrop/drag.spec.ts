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

    })
    test("darg and drop", async () => {
        await page.goto("https://letcode.in/dropable")
        const src = page.locator("#draggable");
        const dest = page.locator("#droppable");
        if (src && dest) {
            const srcBound = await src.boundingBox();
            const dstBound = await dest.boundingBox();
            if (srcBound && dstBound) {
                await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
                await page.mouse.down();
                await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
                await page.mouse.down();

            }
            else {
                throw new Error("No Element");
            }
        }


    })
    test.afterAll(async () => {

        await page.waitForTimeout(4000);
        await page.close();
        await context.close();
        await browser.close();

    })
})    