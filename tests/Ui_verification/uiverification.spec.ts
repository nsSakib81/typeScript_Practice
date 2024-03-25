import test, { expect } from "playwright/test";

test("basic ui test", async ({ page }) => {
    await page.goto("https://letcode.in/edit");
    //expect( await page.isDisabled("#noEdit")).toBe(true);
    const edit = await page.isEditable("#dontwrite");
    console.log("is edit?" + edit);
    expect(edit).not.toBe(true);

    await page.goto("https://letcode.in/buttons");
    const working = page.locator("//button[@class='button is-info']");
    console.log(await working?.isEnabled());
    //await page.waitForTimeout(3000);
})