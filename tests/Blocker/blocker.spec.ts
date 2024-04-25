import test, { request } from "playwright/test";

test("block images network intercept", async ({ page }) => {


    await page.route("**/*", request => {
        return request.request().resourceType() === "image"
            ? request.abort() :
            request.continue();
    })

    await page.goto("https://unsplash.com/t/people")
    await page.waitForTimeout(2000);
})