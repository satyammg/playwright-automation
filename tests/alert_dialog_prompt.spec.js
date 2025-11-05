const{test,expect}=require('@playwright/test');
let page;
test.describe('Alert Dialog Prompt Tests', () => {
    test.beforeEach('Launch Browser',async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://practice-automation.com/popups/');
    });

    test.afterAll('Close Browser', async () => {
        await page.close();
    });

    test('Handle Alert Dialog', async () => {
        page.on('dialog', async (dialog) => {
            console.log('ALERT TYPE:',dialog.type());
            console.log('ALERT MESSAGE:',dialog.message());
            expect(dialog.message()).toBe('Hi there, pal!');
            expect(dialog.type()).toBe('alert');
            await dialog.accept();
        });

        await page.locator('#alert').click();
    });

    test('Handle Confirm Alert Dialog', async () => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('OK or Cancel, which will it be?');
            expect(dialog.type()).toBe('confirm');
            // await dialog.accept();
            await dialog.dismiss();
        });

        await page.locator('#confirm').click();
    });

    test('Handle Prompt Alert Dialog', async () => {
        page.on('dialog', async(dialog)=>{
            console.log("Dialog type : ", dialog.type());
            console.log("dialog default message: ", dialog.defaultValue());
            expect(dialog.type()).toBe('prompt');
            dialog.accept('Playwright Test');
        })

        await page.locator('#prompt').click();
    });

});