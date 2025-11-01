const { test, expect } = require('@playwright/test')

class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async naviateToURL() {
       await this.page.goto("https://testsigma.com/")
    }

    async clickOnLoginButton(){
        await this.page.locator("//a[text()='Login']").click()
    }




}
module.exports = { LoginPage }