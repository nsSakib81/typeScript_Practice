import test from "playwright/test";

test("Signin to github", async ({ page }) => {
    await page.goto("https://github.com/login");
    await page.fill("input:below(:text('Username or email address'))", "nsSakib81");


    await page.waitForTimeout(5000);

})