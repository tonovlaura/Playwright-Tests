import { test, expect } from '@playwright/test';

test('Login incorrect user or password', async ({ page }) => {

  await test.step('Navigating to URL', async()=>{
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });
   await test.step('Enter username and password', async()=>{
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testin123443');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test');
  });

   await test.step('Click enter', async()=>{
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  });

   await test.step('Validate error message', async()=>{
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });

});