import { When } from "@wdio/cucumber-framework";
import LoginMainPage from "../page-objects/LoginMainPage.js";

When(/^I enter (.*) to the input field$/,async(username)=>{
    await LoginMainPage.inputTextIntoTextArea(username);
});

When(/^I type (.*) to the password field$/,async(password)=>{
await LoginMainPage.inputPasswordField(password);
});

When(/^I click login button$/,async()=>{
    await LoginMainPage.clickLoginButton();
});