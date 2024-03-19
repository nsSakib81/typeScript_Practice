import { test } from "playwright/test";


// test.describe('Launch Browser', ( ) => {
test('Open W3schools', async ({ page }) => {



    await test.step("Go to the homepage", async () => {
        await page.goto('https://www.w3schools.com/');
        await page.click("text=Log in");
        await page.fill('//*[@id="modalusername"]', 'sakibpiash5@gmail.com');
        await page.fill('//*[@id="current-password"]', 'Sakib81@aiub');
        await page.click('//*[@id="root"]/div/div/div[4]/div[1]/div/div[4]/div[1]/button');
        await page.click('//*[@id="pagetop"]/div[3]/a[3]');
        // await page.waitForTimeout(5000);
        // await page.click('//a[@id="logout-link"]');
        //await page.locator('//a[@id="logout-link"]').waitFor({ state: "visible" })
        //await page.locator('//a[@id="logout-link"]').click()


    });
    await page.close();
});
