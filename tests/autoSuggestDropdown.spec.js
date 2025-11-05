const { test, expect } = require('@playwright/test');
let page;
test.describe('Auto Suggest Dropdown Tests', () => {

    test.beforeEach('Launch Browser', async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://www.ixigo.com/');
    });

    // test.afterEach('Close Browser', async ({page}) => {
    //     await page.close();
    // });

    test('Handle Auto Suggest Dropdown', async () => {

        await page.getByLabel('From').click();
        await ppage.locator("(//input[contains(@class,'outline-none')])[1]").fill('Varanasi');

        await page.waitForSelector('.body-sm.text-secondary.group-data-[disabled=true]:text-disabled')
        let ele = await page.$$('.body-sm.text-secondary.group-data-[disabled=true]:text-disabledef');
        for (let element of ele) {
            let text = await element.textContent();
            console.log(text);
            if (text.includes('motorola g85 5g')) {
                await element.click();
            }
            else {
                console.log("Not displayed");

            }
        }
        await page.waitForTimeout(5000);

    });
});