import { test, expect } from '@playwright/test';

test('Assertions in Playwright', async ({ page }) => {

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

  // Verify URL, title, text, count
  await expect(page).toHaveURL('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');
  await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  
  const description = page.locator('span[role="text"]:visible').filter({hasText: 'Playwright by Testers Talk Playwright tutorial playwright automation',}).first();
  await expect(description).toHaveText(/Playwright by Testers Talk Playwright tutorial playwright automation/);

});
