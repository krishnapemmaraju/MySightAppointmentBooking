import {When,Then, setDefaultTimeout} from '@cucumber/cucumber';
import UpdateCustAccountData from '../../../pages/MySight/UpdateAccountDetailsPage';
import { pageFixture } from '../../../hooks/pageFixture';
import { expect } from '@playwright/test';

setDefaultTimeout(60 * 1000 * 2);
let updatCustDetails:UpdateCustAccountData;
When('User click on Edit icon to update Account details', async function () {
        updatCustDetails = new UpdateCustAccountData(pageFixture.page);
        await updatCustDetails.clickOnEditBtn(this);
  });


  When('User updates firstName,LastName and Mobile Number and address as {string}', async function (updateAddress) {
       await updatCustDetails.updateAccountDetails(updateAddress,this);
  });


  Then('User should see updated values', async function () {
      expect(await updatCustDetails.getUpdatedDetails()).toBeTruthy();
  });
