import test from "playwright/test";

test("wait for alert", async ({ page }) => {
    await test.step("goto the page", async () => {
        await page.goto("https://letcode.in/waits")
    })
    await test.step("accept the alert", async () => {
        page.on("dialog", async (alert) => {
            console.log('Alert message: ' + alert.message());
            await alert.accept();
        });
        await page.click("#accept");
        await page.waitForEvent("dialog");
    })
})