import { test, expect } from "playwright/test";

test("visual comparisom", async ({ page }) => {
    await page.goto("https://letcode.in/");

    expect(await page.screenshot({
        fullPage: true

    })).toMatchSnapshot("letcode.png")
})