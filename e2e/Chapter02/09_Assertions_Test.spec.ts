import { test, expect } from '@playwright/test';

test('Assertions in Playwright', async ({ page }) => {

  //going to correct link
  await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: /Reject all|Keeldu kõigist/i }).click();
  
  // Assertions: visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();

  // Verify URL, title, text, count
  await expect(page).toHaveURL('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');
  await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  // await expect(page.getByText('Playwright by Testers Talk', { exact: false }).first()).toContainText('Playwright by Testers Talk');
  //await expect(page.locator('span[id="title"]').first()).toHaveText('Latests posts from Testers Talk');
  //await expect(page.locator('span[id="title"]')).toHaveCount(1);

});
