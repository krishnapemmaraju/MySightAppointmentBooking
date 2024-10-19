import {Page} from '@playwright/test'
import reportGeneration from '../../helper/utils/ReportUtils'
import { IWorld } from '@cucumber/cucumber';
import DateUtils from '../../helper/utils/DateUtils';


let reportGen: reportGeneration;
let dateUtils:DateUtils;
export default class ChooseAStore {

    constructor(private page:Page){
       reportGen = new reportGeneration();
       dateUtils = new DateUtils();
    }

    async isChooseAStorePageLaunched(world:IWorld){
        await this.page.getByRole('heading',{name:'Choose a store',exact:true}).waitFor({state:'visible'});
        await this.page.getByRole('button').filter({hasText:'Accept cookies'}).click();
        await reportGen.getScreenshotData(this.page,"IsChooseAStorePage","Is Choose a Store Page Launched",world);
        return await this.page.getByRole('heading',{name:'Choose a store',exact:true}).isVisible();
    }

    async searchStoreAndSelect(storeID:string,world:IWorld){
        await this.page.getByPlaceholder("e.g. 'Leeds' or 'Factory Lane'").fill(storeID);
        await this.page.getByRole('listbox').locator("div:text-is('Hull, UK')").click();
    }


    async getChosenStoreAddressDetails(storeID:string,world:IWorld){
        await this.page.getByText(storeID,{exact:true}).click();
        await reportGen.getScreenshotData(this.page,"select Store","Select Store as "+storeID,world);
        return await this.page.locator('p',{hasText:storeID}).textContent();
    }

    async getChosenStoreOpeningTimings(storeID:string,dayChosen:string,world:IWorld){
        let getDay = await dateUtils.getCurrentDay();
        await this.page.getByText(getDay.trim(),{exact:true}).first().click();
        await reportGen.getScreenshotData(this.page,"storeOpening","After click on Day Opening Hours Dropdown",world);
        return await this.page.locator("p:text-is('"+dayChosen+"') + p").first().textContent();
    }

    
    async clickOnBookAppointments(world:IWorld){
        await this.page.getByRole('button',{name:'Book Online'}).click();
        await this.page.getByRole('heading').filter({hasText:'Your appointment type'}).waitFor({state:'visible'});
        await reportGen.getScreenshotData(this.page,"BookAppointment","After Clicking on Book Appointment",world);
    }

    
    async isSelectDateAndTimesDisabled(){
        return await this.page.getByRole('button').filter({hasText:'Next: dates and times'}).isDisabled();
   }

}