import { test, expect } from '@playwright/test';

// PS THIS TEST WILL FAIL (since this is an example of a soft assertion)
test('Soft assertions in Playwright (test will fail)', async ({ page }) => {

  //going to correct link
  await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: /Reject all|Keeldu kõigist/i }).click();
  
  // Assertions: visible, editable, enabled, empty
  const searchInput = page.getByPlaceholder('Search', { exact: true }).first();
  await expect(searchInput).toBeVisible({ timeout: 15000 });
  await expect(searchInput).toBeEditable();
  await expect(searchInput).toBeEnabled();
  await expect(searchInput).toBeEmpty();

  // Soft assertion testing, resulting in test failure, but continuing to run the rest of the test. The test will fail at the end, but all assertions will be checked.
  await expect(page).toHaveURL('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');
  await expect.soft(page).toHaveTitle('TypeScript by Testers Talk ✅ - YouTube');
  
  const description = page.locator('span[role="text"]:visible').filter({hasText: 'Playwright by Testers Talk Playwright tutorial playwright automation',}).first();
  await expect(description).toHaveText(/Playwright by Testers Talk Playwright tutorial playwright automation/);

});
