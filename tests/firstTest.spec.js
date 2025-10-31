const { test, expect } = require('@playwright/test');
const {FirstTest} = require('../pages/firstTest')

test.describe('Test Module', () => {
  test.beforeEach(async ({ page }) => {
    const firstTestPage = new FirstTest(page);
    await firstTestPage.login();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
  });

  test('First Test @smoke', async ({ page }) => {
    const loginText = page.locator('.post-title');
    await expect(loginText).toBeVisible();
    await expect(page).toHaveScreenshot();
  });

  test('Second Test', async ({ page }) => {
    const logoutButton = page.locator('xpath=//a[text()="Log out"]', { timeout: 10000 });
    await expect(logoutButton).toBeVisible();
    await logoutButton.click();
    await expect(page).toHaveScreenshot();
  });
});
