import { Dropdown, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class DropDownPage extends BasePage{
    constructor(){
        super(new Label('//h3[text()="Dropdown List"]'),'Dropdown Page');
        this.selectOption = new Dropdown('//*[@id="dropdown"]', 'Select Dropdown');
    }

    async selectDropdownOption(text){
        await this.selectOption.selectOptionByText(text)
    }
}

export default new DropDownPage();