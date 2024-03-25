import test from "playwright/test";

test("api response", async ({ page }) => {
    await page.goto("https://letcode.in/elements");


    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200 &&
            res.url() == "https://api.github.com/users/nsSakib81"
        ),
        page.fill("input[name='username']", "nsSakib81"),
        page.click("button[type='submit']")
    ]);
    console.log(await response.json());
})