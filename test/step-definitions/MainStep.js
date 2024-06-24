import { Then,When } from "@wdio/cucumber-framework";
import MainPage from "../page-objects/MainPage.js";
import { assert } from "chai";

Then(/^I should see the main page is opened$/,async()=>{
    assert.isTrue(await MainPage.isPageOpened());
});

When(/^I click dropdown link from the main page$/, async()=>{
    await MainPage.clickOnTheDropDownLink();
});