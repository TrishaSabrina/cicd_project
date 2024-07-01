import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class AfterLoginPage extends BasePage{
    constructor(){
        super(new Label('//*[text()=" Secure Area"]'), 'Home Page');
        this.clickLogOut = new Button('//*[text()=" Logout"]', 'Logout Button');
    }




async clickLogoutButton(){
    await this.clickLogOut.click();
}

}

export default new AfterLoginPage();