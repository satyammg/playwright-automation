const { test, expect } = require('@playwright/test');

test.describe('Table Tests', () => {
    let page;
    test.beforeEach('Launch Browser', async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/tables/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Get number of rows data with using array', async () => {
        const rows = await page.$$('//tbody[@class="row-striping row-hover"]/tr/td[2]')//company
        const columns = await page.$$('.data-dt-column')
        console.log("Number of rows: ", rows.length);
        console.log("Number of columns: ", columns.length);

        for (let country of rows) {
            let countryValue = (await country.textContent()).trim()
            if (countryValue === 'United States') {
                console.log("Found country: ", countryValue);
                const value = await country.$(`xpath=following-sibling::td`);
                const text = await value.textContent();
                console.log("Corresponding value in next column: ", text);
            }
        }
    });

    test('Get specific cell data using filter method', async () => {
        const rows = await page.locator('//tbody[@class="row-striping row-hover"]/tr')//company
        const columns = await page.$$('.data-dt-column')
        console.log("Number of rows: ", rows.length);
        console.log("Number of columns: ", columns.length);

        const value = rows.filter({
            has: page.locator('td'),
            hasText: 'United States'
        })

        let ele = await value.locator('.column-3.dt-type-numeric').textContent();
        console.log("Corresponding value in next column: ", ele);
    });
});