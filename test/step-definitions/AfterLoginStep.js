import { Then, When } from "@wdio/cucumber-framework";
import AfterLoginPage from "../page-objects/AfterLoginPage.js";
import { assert } from "chai";

Then(/^I should see the home page after login$/,async()=>{
    assert.isTrue(await AfterLoginPage.isPageOpened());
});


When(/^I click logout button$/,async()=>{
    await AfterLoginPage.clickLogoutButton();
});

