
import path = require("path");
import test, { chromium } from "playwright/test";

test.describe('upload files', () => {
    const filePath0 = 'Videos/a.txt';
    const filePath1 = '../Videos/b.txt';
    test("upload files using set input files", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://commitquality.com/practice-file-upload');
        // await page.setInputFiles('//*[@id="files"]/input', [filePath0, filePath1]);
        //await page.locator('/html/body/div[1]/header/div/div/div[3]/button').click()
        await page.locator('//*[@id="file-input"]').setInputFiles(path.join(__dirname, filePath0));
        // Start waiting for file chooser before clicking. Note no await.
        await page.click('//*[@id="root"]/div/div/div/div/form/button');

        await page.waitForTimeout(20000);
    });
})