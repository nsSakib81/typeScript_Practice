import { Page } from 'playwright/test';
export default class HeaderPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public get eleLoginBtn() {
        const loginBtn = this.page.locator("text=Log in");
        if (loginBtn != null) {
            return loginBtn;
        }
        else throw new Error("no element");
    }

    public get eleSignOutBtn() {
        const signoutEle = this.page.locator("text=Sign out");
        if (signoutEle != null) {
            return signoutEle;
        }
        else throw new Error("no element");
    }
    public async clickLoginLink() {
        const ele = this.eleLoginBtn;
        await ele?.click();
    }
    public async clickSignOutLink() {
        const ele = this.eleSignOutBtn;
        await ele?.click();
    }
}