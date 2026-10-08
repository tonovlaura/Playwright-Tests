import { test, expect } from '@playwright/test';

// adding 3 parameters for search keywords, so the same test will be run 3 times with different search keywords
const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'Playwright API Testing by'];

for (const searchKeyword of searchKeywords) {
  
  test(`Paramerize Test in Playwright ${searchKeyword}`, async ({ page }) => {
  
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: searchKeyword }).click();
    await expect(page.getByRole('link', { name: searchKeyword })).toBeVisible();
  });

};
