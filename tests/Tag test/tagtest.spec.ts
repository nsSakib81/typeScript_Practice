import test from "playwright/test";

test('test login page', { tag: '@fast' }, async ({ page }) => {
    await page.goto("https://letcode.in/signin");
    await page.fill("input[name='email']", "sakibpiash5@gmail.com");
    await page.fill("input[name='password']", "Sakib81@aiub");
    await page.click("//button[text()='LOGIN']");
    await page.close();

})
