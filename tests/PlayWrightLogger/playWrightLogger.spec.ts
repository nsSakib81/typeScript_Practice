import test, { chromium } from "playwright/test";

test("Logger test", async ({ page }) => {

    //const browser = await chromium.launch({
    //    logger: {
    //        isEnabled: (name, severity) => name === 'browser',
    //        log: (name, severity, message, args) => console.log(`name= ${name} \n msg= ${message}`)
    //    }
    //});
    //const context = await browser.newContext();
    //const page = await context.newPage();
    page.on("console", msg => {
        if (msg.type() == "error") {
            console.log(msg.text());
        }
    })

    await page.goto("https://letcode.in/elements");
    const btn = page.locator("#search");
    await btn.click();
})