import { test, expect } from '@playwright/test';

test('Validate YouTube Playlist', async ({ page }) => {

  //going to correct link
  await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: 'Reject all' }).click();

  // validating the title of the page
  await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');


  // checking if links are visible - w/ assert visibility
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();

  // checkinf if links have correct text - w/ assert text
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
});