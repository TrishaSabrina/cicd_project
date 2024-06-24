
import { After, AfterStep, Before } from "@wdio/cucumber-framework";
import fs from 'fs-extra';
import { downloadDir } from "../../../framework/configs/main.wdio.conf.js";
import Browser from "../../../framework/browser/Browser.js";
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";

Before(async() =>{
 fs.ensureDir(downloadDir);
 await Browser.openUrl(mainConfig.baseUrl);  
});

After(()=>{
    fs.emptyDir(downloadDir); 
});

AfterStep(async(step)=>{
    if (step.result.status === 'failed') {
        const screenshot = await browser.takeScreenshot();
        const screenshotPath = path.join(downloadDir, `ERROR_${step.pickle.name}.png`);
        await fs.writeFile(screenshotPath, screenshot, 'base64');
    }
});

