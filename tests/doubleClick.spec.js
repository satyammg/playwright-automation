const {test, expect} = require('@playwright/test');

test.describe('Double Click Actions', () => {
    let page;

    test.beforeEach('Launch Browser',async ({browser}) => {
         page = await browser.newPage();
        await page.goto('https://practice-automation.com/double-click/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Double Click on text', async () => {
        const heading = page.locator('xpath=(//*[@id="mouse_over"])[1]');
       await heading.dblclick();
    }); 

});