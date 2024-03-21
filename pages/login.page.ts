import { Page } from "playwright/test";

export default class LoginPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }
    public get eleEmailTextField() {
        return this.page.locator("input[name='email']")

    }
    public get elePassTextField() {
        return this.page.locator("input[name='password']")

    }
    public get eleLoginBtn() {
        return this.page.locator("//button[text()='LOGIN']")

    }
    public async enterUserName(name: string) {
        const ele = this.eleEmailTextField;
        await ele?.fill(name);
    }
    public async enterUserPassword(pass: string) {
        const ele = this.elePassTextField;
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = this.eleLoginBtn;
        await ele?.click();
    }
}