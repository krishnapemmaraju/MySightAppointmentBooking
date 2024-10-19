import {Page} from '@playwright/test'
import reportGeneration from '../../helper/utils/ReportUtils'
import { IWorld } from '@cucumber/cucumber';
import RandomNumberGen from '../../helper/utils/RandomUtils';
let appCustDetailsEmail =  require("../../helper/env/apptDetailsCustPwd.json");

let reportGen: reportGeneration;
let randomGen: RandomNumberGen;
let getUpdatedAddress:string;
let firstName:string,lastName:string,mobileNum:string
export default class UpdateCustAccountData {
   
    constructor(private page: Page){
       reportGen = new reportGeneration();
       randomGen = new RandomNumberGen();
    }

    async clickOnEditBtn(world:IWorld){
        await this.page.locator("button[aria-label='Edit Account Details']").click();
        await this.page.getByRole('heading',{name:'Details'}).waitFor({state:'visible'});
        await reportGen.getScreenshotData(this.page,"EditDetails","After Clicking on Edit Button",world);
    }

    async updateAccountDetails(addrUpdate:string,world:IWorld){
        firstName = "TestFirstName"+(await randomGen.generateString(2)).trim();
        lastName = "TestLastName"+(await randomGen.generateString(2)).trim();
        mobileNum = "0"+(await randomGen.generateNumber(9)).trim();
        await this.page.locator('#firstName').fill(firstName.trim());
        await this.page.locator('#lastName').fill(lastName.trim());
        await this.page.locator("button[aria-label='edit address']").click();
        await this.page.locator('#address').fill(addrUpdate);
        await this.page.getByRole('listbox').first().click();
        getUpdatedAddress = await this.page.locator('#address').getAttribute('value');
        await this.page.locator('#phoneMobile').fill(mobileNum);
        await this.page.getByRole('button',{name:'Update'}).click();
        delete require.cache[require.resolve('../../helper/env/apptDetailsCustPwd.json')];
        appCustDetailsEmail = require("../../helper/env/apptDetailsCustPwd.json");
        await this.page.locator("input[type='password']").fill(`${appCustDetailsEmail.custPwd}`);
        await this.page.getByRole('button',{name:'Save Changes'}).click();
        await reportGen.getScreenshotData(this.page,"UpdatesSaved","After saving details",world)
        return await this.page.innerText('p');
    }

    async getUpdatedDetails(){
        await this.page.getByText('Dashboard').click();
        await this.page.getByText('Reminders').waitFor({state:'visible'});
        let getFirstLastNames = await this.page.locator("h4[data-test-id='your_account_patient_full_name_text']").textContent();
        if(getFirstLastNames == (firstName + " "+lastName)){ return true;}else{return false;}
    }
}