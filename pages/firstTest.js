class FirstTest{
    constructor(page){
        this.page = page;
        this.user_name_field = page.locator('#username');
        this.password_field = page.locator('#password');
        this.submit_button = page.locator('#submit');
    }

    async goToLoginPage(){
       await this.page.goto('https://practicetestautomation.com/practice-test-login/')
    }
   async enterUserName(){
        await this.user_name_field.fill('student')
    }

    async enterPassword(){
        await this.password_field.fill('Password123')
    }

    async clickOnSubmitButton(){
        await this.submit_button.click()
    }


    async login(){
        this.goToLoginPage()
        this.enterUserName()
        this.enterPassword()
        this.clickOnSubmitButton()
    }
}
module.exports ={FirstTest}