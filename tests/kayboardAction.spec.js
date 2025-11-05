 const {test, expect} = require('@playwright/test');
 
test.describe('Keyboard Actions', () => {
    test('Copy and Paste using Keyboard keys', async ({ page }) => {
        await page.goto('https://practice-automation.com/keyboard/');

        const inputField1 = page.locator('#keyboard-input-field');
        const inputField2 = page.locator('#keyboard-input-field-2');


        await inputField1.fill('Hello, Playwright!');
        await page.keyboard.press('Meta+A');
        await page.keyboard.press('Meta+C');

        await inputField2.click();
        await page.keyboard.press('Meta+V');
        await expect(inputField2).toHaveValue('Hello, Playwright!');
    });
});
