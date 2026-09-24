import { test, expect } from '@playwright/test';

test('Keyboard actions in Playwright', async ({ page }) => {
  // go to URL
  await page.goto('https://www.facebook.com/reg/?entry_point=login');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: 'Decline optional cookies' }).click();

  // Write first name
  await page.getByRole('textbox', { name: 'First name' }).fill('Laura');

  // Press enter key (can not be performed in this scenario since pressing enter will not move to next field)
  // await page.getByRole('textbox', { name: 'First name' }).press('Enter');

  // Press tab key to move to next field
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  
  // Write last name, then select and delete it
 await page.getByRole('textbox', { name: 'Last name', exact: true  }).fill('Test');
 await page.keyboard.press('Meta+A'); //Meta for Mac, control for Windows
 await page.keyboard.press('Delete');

});
