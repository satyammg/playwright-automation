const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')

test('Login Test', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.naviateToURL()
    await loginPage.clickOnLoginButton()
})