const {test,expect}=require("@playwright/test");
const {LoginPage}=require('../pages/LoginPage');
const testData=require('../utils/testData');

test("Valid Login Test", async({page}) => {

    const loginPage=new LoginPage(page)

    await loginPage.navigate();

    await loginPage.login(
        testData.users.validUser.uname,
        testData.users.validUser.pword
    );

    await expect(page).toHaveURL(/inventory\.html/);

})