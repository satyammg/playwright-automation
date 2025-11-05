const {test,expect} = require('@playwright/test');

test.describe('CheckBox and Dropdown Tests', () => {
    let page;

    test.beforeEach('Launch Browser',async ({browser}) => {
         page = await browser.newPage();
        await page.goto('https://practicetestautomation.com/practice-test-table/');
    });

    test.afterEach('Close Browser', async () => {
        await page.close();
    });

    test('Work with radio buttons', async () => {
        await expect(page.locator('//input[@value="Any"]')).toBeChecked(); //radio button is selected by default
        await expect(page.locator('//input[@value="Java"]')).not.toBeChecked();
    });

    test('Work with checkboxes', async () => {
        let checkbox = page.locator('//input[@value="Beginner"]');
        await expect(checkbox).toBeChecked(); //checkbox is selected by default
        await checkbox.click();
        await expect(checkbox).not.toBeChecked();
    });

    test('Work with dropdowns - Select Tag', async () => {
        await page.locator('#sortBy').selectOption({label: 'Course Name'});
        expect(page.locator('xpath=//td[text()="Advanced Selenium"]')).toBeVisible();

        await page.locator('#sortBy').selectOption({label: 'Language'});
        expect(page.locator('xpath =//tr//td[text()="XPath Locators"]')).toBeVisible();
        
    });

    test('Work with dropdowns with div tag', async () => {
       const dropdown =  page.locator("xpath=//div[@id='enrollDropdown']")
       await expect(dropdown).toBeVisible();
       await dropdown.click();
       const option =  page.locator("xpath=//li[@data-value='5000']");
       await expect(option).toBeVisible();
       await option.click();
    });

});