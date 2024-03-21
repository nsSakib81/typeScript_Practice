import test, { Browser, BrowserContext, chromium, Page, expect } from "playwright/test"
import Env from '../../Utilities/environment';
import HeaderPage from '../../pages/Header.page';
import LoginPage from '../../pages/login.page';
import CommonFunctions from '../../pages/common.page';

test.describe("TC001", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;

    test.beforeEach(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(Env.test)
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })

    test("Login testing", async () => {

        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName('sakibpiash5@gmail.com')
        await login.enterUserPassword('12345678');
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster.textContent()).toContain(" Welcome NAZMUS SAKIB ");
        await header.clickSignOutLink();
    })
})    