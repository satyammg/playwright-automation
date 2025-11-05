const{test,expect}=require('@playwright/test');

test.describe('File Upload Actions',()=>{
    let page;
    test.beforeEach('Launch Browser',async({browser})=>{
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/file-upload/');
    });

    test.afterEach('Close Browser',async()=>{
        await page.close();
    });

    test('File Upload - single file',async()=>{
        const filePath=`tests/firstTest.spec.js-snapshots/First-Test-1-chromium-darwin.png`;
        await page.locator('#file-upload-button').setInputFiles(filePath);
        // await page.locator('#file-upload-button').setInputFiles([filePath1, filePath2]);
    });

});