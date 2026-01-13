const {test}=require('@playwright/test');
const {LoginPage}=require('../pages/LoginPage');
const {ProductPage}=require('../pages/ProductPage');
const testData=require('../utils/testData');

test('List down the products from the page',async({page})=>{
    //step1: Login
    const loginPage=new LoginPage(page);
    const productPage=new ProductPage(page);
    await loginPage.navigate();
    await loginPage.login(
        testData.users.validUser.uname,
        testData.users.validUser.pword
    );

    await productPage.listDownProducts();



})


