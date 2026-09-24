import { test, expect } from '@playwright/test';

test('Locators in Playwright', async ({ page }) => {

  //going to correct link
  //await page.goto('https://github.com/tonovlaura/');

  //GetByRole
  //await page.getByRole('link', { name: 'Sign in' }).click();

  //GetByLabel
  //await page.getByLabel('Homepage', { exact: true }).click();
  
  //GetByAltText - used for images
  // await page.getByAltText("View tonovlaura's full-sized avatar").click();

  //GetByTestId added use testIdAttribute: 'data-tab-item', to playwright.config.ts
  //await page.getByTestId("repositories").first().click();
  //await page.getByTestId("projects").first().click();

  // GetByText
  //await page.getByText('Sign up').click();

  // GetByPlaceholder, XPath, CSS Selector
  //await page.goto('https://www.youtube.com/@testerstalk');

  //await page.getByRole('button', { name: 'Reject all' }).click();
  
  // await page.getByPlaceholder('Search').fill('Playwright');

  // await page.locator('//input[@name="search_query"]').fill('Playwright');

  //await page.locator('input[name="search_query"]').first().fill('Playwright');
  
  //getByTitle, in Github, there are 2 elements with title "GitHub" but they are not visible so it is impossible to click on them, but we can check if they are present in the page
  await page.goto('https://github.com/tonovlaura/');
  await expect(page.getByTitle('GitHub')).toHaveCount(2);
});