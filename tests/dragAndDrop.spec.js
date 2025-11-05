const {test,expect} = require('@playwright/test');
test.describe('Drag and Drop', () => {
    let page;
    test.beforeEach('Launch Browser',async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/gestures/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Drag and Drop - file', async () => {
        let source = page.locator('xpath=//div[@id="div1"]');
        let destination = page.locator('xpath=//div[@id="div2"]');


        // Approach 1
        await source.hover();
        await page.mouse.down();

        await destination.hover();
        await page.mouse.up();

        await page.waitForTimeout(3000);

        //Approach 2
        await source.dragTo(destination);
    });

    test.only('Drag and Drop - item', async () => {
        let source = page.locator('xpath=//div[@id="moveMe"]');
        let destination = page.locator('xpath=//div[@id="moveMe" and @style="top: 151px; left: 556px;"]'); 
        await page.waitForTimeout(3000);
        await source.dragTo(destination);
        await page.waitForTimeout(3000);


    });


});