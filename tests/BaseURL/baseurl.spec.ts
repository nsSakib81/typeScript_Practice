import test, { expect } from "playwright/test";

test.use({
    baseURL: "https://letcode.in/" //local configuration...
})
test("testing signup page", async ({ page }) => {
    await page.goto("/edit");
    expect(page.url()).toBe("https://letcode.in/edit");


})