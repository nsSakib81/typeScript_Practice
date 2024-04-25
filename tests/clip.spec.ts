import test from "playwright/test";

const clipboard = require("clipboardy");

test("Access clipboard", async ({ page }) => {
    await test.step("Goto the https://clipboardjs.com/", async () => {
        await page.goto("https://clipboardjs.com/");
    });
    await test.step("click to copy", async () => {
        await page.click("button[data-clipboard-action='copy']", { force: true });
    });
    await test.step("access the clipboard", async () => {
        let text = await clipboard.read();
        console.log('form clipboard: ' + text);
    });
})