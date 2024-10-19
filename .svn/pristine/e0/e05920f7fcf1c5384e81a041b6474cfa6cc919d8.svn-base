import { IWorld } from "@cucumber/cucumber";
import reportGeneration from "../../helper/utils/ReportUtils";
import { Page } from '@playwright/test';
import DateUtils from "../../helper/utils/DateUtils";
import * as fs from 'fs';
import RandomNumberGen from "../../helper/utils/RandomUtils";

let reportGen: reportGeneration;
let dateUtils: DateUtils;
let randomNumGen:RandomNumberGen;
let getapptSummary;
let getApptTimes;
export default class BookAppointment {

    constructor(private page: Page) {
        reportGen = new reportGeneration();
        dateUtils = new DateUtils();
        randomNumGen = new RandomNumberGen();
    }

    async bookAppointment(opticianStore: string, world: IWorld) {
        await this.page.getByText(opticianStore, { exact: true }).click();
        await this.page.getByRole('button', { name: 'Book Online', exact: true }).click();
        await this.page.getByRole('heading', { name: 'Your appointment type' }).waitFor({ state: 'visible' });
        await reportGen.getScreenshotData(this.page, "BookAppt" + opticianStore, "After Clicking on Book Online for" + opticianStore, world);
    }

    async selectAppointment(apptType: string, world: IWorld) {
        await this.page.getByRole('button', { name: 'Contact Lens Fit' }).click();
        await reportGen.getScreenshotData(this.page, "apptType", "After Selecting Appt Type" + apptType, world);
        await this.page.getByRole('button', { name: 'Next: dates and times' }).click();

    }
    
    async selectDateAndTimesForAppt(world:IWorld) {
        await this.page.getByRole('heading', { name: 'Do you have a preferred member of staff?', exact: true }).waitFor({ state: 'visible',timeout:60000 });
        let getDayBtnCnt = await this.page.locator('div.Grid-sc-1yurdnx button').count();
        let getCurrentDate = await dateUtils.getDate();

        for (let i = 1; i <= getDayBtnCnt; i++) {
            await this.page.getByRole('button', { name: getCurrentDate.toString() }).click();
            if (await this.page.locator("p[data-test-id='choose_time_date_no_appointments_left_on_chosen_day_text']").isVisible()) {
                getCurrentDate = getCurrentDate + 1;
                if (i == 31) {
                    i = 1;
                    await this.page.locator('button.calendar_header_forward_butto').click();
                }
            } else {
                break;
            }


        }


        //select the timings here 
        let getApptTimingsCount = await this.page.locator("div.ApptTimeGrid-sc-8b6pey p").count();
        for (let i = 0; i < getApptTimingsCount; i++) {
            getApptTimes = await this.page.locator("div.ApptTimeGrid-sc-8b6pey p").nth(i).textContent();
            if (await this.page.getByRole('button', { name: getApptTimes }).isEnabled()) {
                await this.page.getByRole('button', { name: getApptTimes }).click();
                getapptSummary = await this.page.locator("p[data-test-id='appointment_summary_date_time_text']").textContent();
                const bookedTime = {
                    apptBookedTime: getApptTimes,
                    apptBookedDate:getCurrentDate,
                    apptSummary:getapptSummary

                }
                let appBookedFile = JSON.stringify(bookedTime,null,2);
                fs.writeFile('../MySight/src/helper/env/apptDetails.json', appBookedFile, (err) => {
                    if (err) { console.log("not success", err) } else { console.log("success") }
                })
                break;
            }
        }
        await reportGen.getScreenshotData(this.page,"BookApptDateTime","After selecting Appt Date and time",world);
    }

    async clickOnBookNow(world:IWorld){
        await this.page.getByRole('button', { name: 'Book now' }).click();
        await this.page.getByRole('heading', { name: 'Your details', exact: true }).waitFor({ state: 'visible' });
        await reportGen.getScreenshotData(this.page,"BookNowDetails","After Clicking on Book Now Button",world);
    }

    async fillValidDetailsForAppointment(emailAddr:string,title:string,firstName:string,lastName:string,dob:string,postcode:string,phoneNumber:string){
        let emailAddress = emailAddr+(await randomNumGen.generateString(1)).trim()+(await randomNumGen.generateNumber(2)).trim()+"@gmail.com";
        await this.page.locator('#webUser').fill(emailAddress);
        await this.page.locator('#title').selectOption(title);
        await this.page.locator('#firstName').fill(firstName+(await randomNumGen.generateString(2)).trim());
        await this.page.locator('#lastName').fill(lastName+(await randomNumGen.generateString(2)).trim());
        await this.page.locator('#dateOfBirth').fill(dob);
        await this.page.locator('#addressSearch').fill(postcode);
        await this.page.getByRole('listbox').click();
        await this.page.locator('#phoneNumber').fill(phoneNumber);
        let setPwd = "Welcome"+dateUtils.getSystemDateFormat("HHMM")+"$";
        const updateCustPwd = {
               emailID:emailAddress,
               custPwd:setPwd
        }
        let appCustData = JSON.stringify(updateCustPwd,null,2);
                fs.writeFile('../MySight/src/helper/env/apptDetailsCustPwd.json', appCustData, (err) => {
                    if (err) { console.log("not success", err) } else { console.log("success") }
                });
        await this.page.locator('#newUserPassword').fill("Welcome"+dateUtils.getSystemDateFormat("HHMM")+"$");
        await this.page.getByRole('button',{name:'Finish'}).click();

    }


    async validateAppointmentConfirmationMessage(world:IWorld){
          return await this.page.getByRole('heading',{name:'Your appointment has been booked'}).textContent();
    }

    async validateAppointmentTimingMessage(world:IWorld){
       let getAppTimeMsg = await this.page.locator("p[data-test-id='booking_confirmation_date_time_text']").textContent();
       if(getAppTimeMsg.includes(getApptTimes)){return true;}
       else{return false;}
    }

}