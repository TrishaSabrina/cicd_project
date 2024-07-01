import BasePage from '../../framework/page/BasePage.js';
import {Button, Input, Label} from '../../framework/elements/index.js';


class LoginMainPage extends BasePage{
 
    constructor(){
        super(new Label('//*[text()="Login Page"]'), 'Login Page');
        this.inputField = new Input('//*[@id="username"]', 'Input Field');
        this.passField = new Input('//*[@id="password"]', 'Password Field');
        this.clickLogin = new Button('//*[@class="radius"]', 'Click Login Button');
    }

    async inputTextIntoTextArea(text){
        await this.inputField.typeText(text);
    }

    async inputPasswordField(text){
        await this.passField.typeText(text);
    }

    


    async clickLoginButton(){
        await this.clickLogin.click();
    }
}

export default new LoginMainPage();