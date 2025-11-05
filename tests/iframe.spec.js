const { test, expect } = require('@playwright/test')

test.describe('iframe tests', () => {
    let page;
    test.beforeEach('Launch Url', async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/iframes/')
    });

    test.afterEach('Close Page', async () => {
        await page.close()
    });

    test('Interact with iframe elements', async () => {
        let frameElements = page.frames();
        console.log("Frame count:", frameElements.length);  //Get the count of iframes on the page

        // let frame = page.frame({name:'top-iframe'});  //Switch to iframe using name attribute
        let frame = page.frame({ url: 'https://playwright.dev/' });
        await frame.locator('xpath=//a[text()="Docs"]').click();  //Click on Docs link inside iframe
    });
});