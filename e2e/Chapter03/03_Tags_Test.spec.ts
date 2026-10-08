import { test, expect } from '@playwright/test';

// for testing you can use 
// npx playwright test --grep '@SmokeTesting' 
// npx playwright test --grep '@RegressionTesting'

test('Tags test 1', {tag : ['@SmokeTesting']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

test('Tags test 2', {tag : ['@SmokeTesting', '@RegressionTesting']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

test('Tags test 3', {tag : ['@RegressionTesting']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

