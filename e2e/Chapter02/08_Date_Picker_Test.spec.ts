import { test, expect } from '@playwright/test';

test('Date picker in Playwright', async ({ page }) => {
  // go to URL
  await page.goto('https://jqueryui.com/datepicker/');

  //cIdentifyinf iframe
  const iframe = page.frameLocator('[class="demo-frame"]');

  //Hardcoded date value
  // not a good example, because the date is not actually picked, we just fill the input field with a wanted value. 
  // await iframe.locator('[id="datepicker"]').fill('06/15/2023');

    //PAST DATE SOFTCODED TEST, physically searching for the proper fate and clicking it
      // click on the date input field to open the date picker
    const dateInput = iframe.locator('#datepicker');
    await dateInput.click();
      // clicking on < arrow until we reach year 2023 and month June
    for (let attempt = 0; attempt < 100; attempt++) {
      const monthTitle = await iframe.locator('.ui-datepicker-title').innerText();
      if (monthTitle.includes('June') && monthTitle.includes('2023')) {
        break;
      }

      await iframe.getByTitle('Prev').click();
    }
    // then click on day 15
    await iframe
      .locator('td:not(.ui-datepicker-other-month)')
      .getByRole('link', { name: '15', exact: true })
      .click();

    // validation if the selected date is correct.
    await expect(dateInput).toHaveValue('06/15/2023');

    // with this test, we physically click < button and select wanted date

    // FUTURE DATE SOFTCODED TEST
    await dateInput.click();

    for (let attempt = 0; attempt < 100; attempt++) {
      const monthTitle = await iframe.locator('.ui-datepicker-title').innerText();
      if (monthTitle.includes('January') && monthTitle.includes('2027')) {
        break;
      }

      await iframe.getByTitle('Next').click();
    }
    // then click on day 20
    await iframe.locator('td:not(.ui-datepicker-other-month)').getByRole('link', { name: '20', exact: true }).click();

    // validation if the selected date is correct.
    await expect(dateInput).toHaveValue('01/20/2027');
});
