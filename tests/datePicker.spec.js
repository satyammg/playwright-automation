const {test,expect} = require('@playwright/test');

test.describe('Table Tests', () => {
    let page;

    test.beforeEach('Launch Browser',async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/calendars/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Work with date picker', async () => {
        await page.locator('#g1065-1-selectorenteradate').fill('2025-11-02');
        await page.locator('xpath=(//button[@class="pushbutton-wide"])[1]').click();
        await page.waitForTimeout(3000);
       await expect(page.locator('xpath=(//h4[text()="Your message has been sent"])[1]')).toBeVisible();
    }); 

});