import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Before all tests');
});

test.afterAll(async () => {
  console.log('After all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('Before each test');
  // writing repeated code into beforeEach hook to make code simpler and cleaner
  await page.goto('https://github.com/');
});

test.afterEach(async () => {
  console.log('After each test');
});

test('Test 1', async ({ page }) => {
  console.log('Executing Test 1');

  await test.step('Navigating to URL', async()=>{
    //await page.goto('https://github.com/');
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


test('Test 2', async ({ page }) => {
  console.log('Executing Test 2');

  await test.step('Navigating to URL', async()=>{
    // await page.goto('https://github.com/');
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

  // 
});