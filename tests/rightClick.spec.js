const {test, expect} = require('@playwright/test');

test.describe('Right Click Actions', () => {
    let page;
    test.beforeEach('Launch Browser',async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/click/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Right Click on option', async () => {
        const option = page.locator('xpath=(//*[@id="right_click"])[1]');
       await option.click({ button: 'right' });
    }); 

});