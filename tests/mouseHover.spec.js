const {test, expect} = require('@playwright/test');

test.describe('Mouse Hover Actions', () => {
    let page;
    test.beforeEach('Launch Browser',async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/hover/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Hover on text', async () => {
        const heading = page.locator('xpath=(//*[@id="mouse_over"])[1]');
       await heading.hover();
       await expect(page.locator('xpath=//*[text()="You did it!"]')).toBeVisible();
       await page.waitForTimeout(3000);

    }); 
});