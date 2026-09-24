import { test, expect } from '@playwright/test';

test('FB signup page test in Playwright', async ({ page }) => {
  // go to URL
  await page.goto('https://www.facebook.com/reg/?entry_point=login');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: 'Decline optional cookies' }).click();

  // Write first name
  await page.getByRole('textbox', { name: 'First name' }).fill('Laura');

  // Write last name
  // needs exact: true because there are two textboxes with the same name 
  await page.getByRole('textbox', { name: 'Last name', exact: true  }).fill('Test');

  // Open the day dropdown and select 20
  // combobox -> is the element you click to OPEN the dropdown list
  await page.getByRole('combobox', { name: 'Day' }).click();
  await page.getByRole('option', { name: '20' }).click();

  // Open the month dropdown and select January
  await page.getByRole('combobox', { name: 'Month' }).click();
  await page.getByRole('option', { name: 'January' }).click();

  // Open the year dropdown and select 1992
  await page.getByRole('combobox', { name: 'Year' }).click();
  await page.getByRole('option', { name: '1992' }).click();

  // Select a gender option from the open listbox
  // Bad code, role options are not nested inside role=combobox -> Gender, so we need to use a locator to find the correct dropdown list
  const genderDropdown = page.locator('[aria-haspopup="listbox"]').filter({ hasText: 'Select your gender' });
  await genderDropdown.click();
  await page.getByRole('option', { name: 'Female' }).click();

  // Write email in mobile or email address field
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('test@example.com');

  // Write password
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234');

});

// test ends after writing password, since pressing the "Sign Up" button would require a real email address and phone number, which we don't have for this test.

// this test was mostly created by me with the help of Copilot since Facebook's page had changed since the tutorial.