import { test, expect } from '@playwright/test';

// for testing you can use 
// npx playwright test --grep '@SmokeTesting' 
// npx playwright test --grep '@RegressionTesting'

test('Retry test', {tag : ['@SmokeTesting']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  // this next line in the test is supposed to fail, 
  //npx playwright test e2e/Chapter03/04_Retry_Test.spec.ts \ --project=chromium \ --retries=2 \ --reporter=html
  //await expect(page.getByRole('link', { name: 'Playwright JavaScript TypeScript by Testers Talk ✅' })).toBeVisible();
});

