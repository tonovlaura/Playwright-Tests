import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bing.com/?toWww=1&redig=0DCFF07F18B44F53A30164966D900824');
  const searchBox = page.getByRole('combobox', { name: 'Enter your search here -' });

  await searchBox.fill('playwright testers talk');
  await Promise.all([
    page.waitForURL(/bing\.com\/search\?/i),
    searchBox.press('Enter'),
  ]);

  await expect(searchBox).toHaveValue(/playwright testers talk/i);

  const playlistLink = page.locator('a[href*="youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM"]').first();
  await expect(playlistLink).toBeVisible();
  await playlistLink.click();

  if (page.url().includes('consent.youtube.com')) {
    await Promise.all([
      page.waitForURL(/youtube\.com\/playlist\?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM/i),
      page.getByRole('button', { name: /Reject all|Accept all|Keeldu kõigist|Nõustu kõigiga/i }).click(),
    ]);
  }

  await expect(page).toHaveURL(/youtube\.com\/playlist\?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM/i);
  await expect(page.locator('yt-page-header-view-model')).toContainText(/Play all|Playwright by Testers Talk/i);

});