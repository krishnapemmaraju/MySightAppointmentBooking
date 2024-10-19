import { ITestCaseHookParameter, IWorld } from "@cucumber/cucumber";
import { Page } from "@playwright/test";


export default class reportGeneration {

   async getScreenshot(page: Page,world:IWorld,scenario:ITestCaseHookParameter){
       console.log(scenario.pickle.name);
       const screenshotPath: string = './test-result/screenshots/';
       const screensshotExtn: string = '.png';
       const img = await page.screenshot({
         path: screenshotPath + scenario.pickle.name + screensshotExtn,
         fullPage: true,});
         world.attach(img, 'image/png');
       }


   async getScreenshotData(page:Page,message:string,messageToAttach:string,world:IWorld)     {
      const screensshotExtn: string = '.png';
      const screenshot = await page.screenshot({path:`./test-result/screenshots/${message}${screensshotExtn}`,fullPage:true});
      world.attach(messageToAttach);
      world.attach(screenshot,'image/png');
   }

   async getReportForAPI(message:string,world:IWorld)     {
      world.attach(message);
   }

}