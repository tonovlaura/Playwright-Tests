import { test, expect } from '@playwright/test';

test.describe('SmokeTesting', () => {
  test('Grouping test 1', async ({ page }) => {

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
  
});



test.describe('RegressionTesting', () => {
  test('Grouping test 2', async ({ page }) => {

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

  // Only run method
  test('Grouping test 3', async ({ page }) => {

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
  
});

