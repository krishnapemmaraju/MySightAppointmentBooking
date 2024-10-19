import {Page} from "@playwright/test"
import reportGeneration from "../../helper/utils/ReportUtils"
import { IWorld } from "@cucumber/cucumber";

let reportGen: reportGeneration;
export default class ReArrangeAppt {

    constructor(private page:Page){
        reportGen = new reportGeneration();
    }

    async loginIntoOnlineAccount(emailAddr:string,pwd:string,world:IWorld){
        await this.page.getByRole('button',{name:'Log in'}).click();
        await this.page.getByPlaceholder('Email').fill(emailAddr);
        await this.page.getByPlaceholder('Password').fill(pwd);
        await this.page.getByRole('button',{name:'Log in'}).click();
        await reportGen.getScreenshotData(this.page,"afterLogin","After login with email "+emailAddr,world);
    }

    async clickOnAppointmentsInSubMenu(){
       await this.page.getByRole('link',{name:'Appointments'}).click();
    }

    async clickOnDetailUnderBookedAppts(world:IWorld){
        reportGen.getScreenshotData(this.page,"AppointmentSubMenu","After Click on Appointments in Submenu btn",world);
        await this.page.getByRole('button',{name:'Details'}).click();
    }

    async clickOnReArrangeBtn(world:IWorld){
        reportGen.getScreenshotData(this.page,"DetailsBtn","After Click on Details Button",world);
        await this.page.getByRole('button',{name:'Rearrange'}).click();
    }

    async clickOnBookNowForReArrange(world:IWorld){
        await this.page.getByRole('button', { name: 'Book now' }).click();
        await this.page.getByRole('heading',{name:'Your appointment has been rearranged'}).waitFor({state:'visible'});

    }

    async validateRearrangeConfirmationMessage(world:IWorld){
        return await this.page.getByRole('heading',{name:'Your appointment has been rearranged'}).textContent();
    }

    async getRearrangeTimingConfirmation(world:IWorld){
        return await this.page.locator("p[data-test-id='booking_confirmation_date_time_text']").textContent();
    }
}