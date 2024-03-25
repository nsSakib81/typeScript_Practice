import test from "playwright/test";

test("element handler", async ({page}) =>{
    await page.goto("https://www.freelancer.com/login");
    const handle= page.locator("button[data-color='custom']");
    
})