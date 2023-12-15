import{test,expect} from "@playwright/test";
import LoginPage from "../PageObjects/login-page";
import data from "../TestData/login.json";

test("login to application",async({page})=>{
  const  loginPage= new LoginPage(page);
  await loginPage.gotoLoginPage(data.url);
  await loginPage.loginToApp(data.superUser,data.companyCode,data.password);
  await loginPage.clickOnAllowCookies();


})