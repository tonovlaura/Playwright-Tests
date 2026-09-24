import { test, expect } from '@playwright/test';

test('Capture screenshots in Playwright', async ({ page }) => {

  //going to correct link
  await page.goto('https://www.youtube.com/@testerstalk');

  // Reject all cookies in page Before you continue to YouTube
  await page.getByRole('button', { name: 'Reject all' }).click();
  
  // Element screenshot
  await page.locator('#page-header-container').screenshot({ path: './Screenshots/element_screenshot.png' });

  // Page screenshot
  await page.screenshot({ path: './Screenshots/page_screenshot.png' });
 
  // Full page screenshot
  await page.screenshot({ path: './Screenshots/full_page_screenshot.png', fullPage: true });

});