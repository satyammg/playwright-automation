const { expect, test } = require('@playwright/test');
const { request } = require('http');

test.describe('Screenshot Tests', () => {

    test('Tabe Screenshot', async ({ page }) => {
        await page.goto('https://practice-automation.com/');
        await page.screenshot({ path: 'tests/firstTest.spec.js-snapshots/'+Date.now()+'-homepage.png'});
    }); 

    test('Full page Screenshot', async ({ page }) => {
        await page.goto('https://practice-automation.com/');
        await page.screenshot({ path: 'tests/firstTest.spec.js-snapshots/'+Date.now()+'-homepage-full.png', fullPage: true });
    });

});