const {test,expect}=require("@playwright/test");
const {LoginPage}=require('../Pages/LoginPage');
const {validUser}=require('../utils/testData');

test("Valid Login Test", async({page}) => {

    const loginPage=new LoginPage(page)

    await loginPage.navigate();

    await loginPage.login(validUser.uname,validUser.pword);
    await expect(page).toHaveURL(/inventory\.html/);

})