import { test, expect } from '@playwright/test';

test('Mouse action tests in Playwright', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://github.com/tonovlaura');

  // Left-click on the 'Repositories' link
  await page.getByRole('link', { name: 'Repositories' }).click({button: 'left' });

  // Command-click on the 'Projects' link -> should open in new tab
    const [newTab] = await Promise.all([
      page.context().waitForEvent('page'),
      page.getByRole('link', { name: 'Projects' }).click({ modifiers: ['Meta'] }),
    ]);
    // Wait for the new tab to load
    // checks if the new tab is opened
    await newTab.waitForLoadState();

  // Right-click on the 'Projects' link and open in new window
    // waiting for new page to open, in PW there is no difference in new tab or page
    const newWindowPromise = page.context().waitForEvent('page');
    //Right click, but with command key (Meta) and Shift key to open in new window
    await page.getByRole('link', { name: 'Projects' }).click({ modifiers: ['Meta', 'Shift'], });
    // Wait for the new window to load
    const newWindow = await newWindowPromise;
    await newWindow.waitForLoadState();

    await expect(newWindow).toHaveURL(/projects/);

  // Hover over the 'Stars' link
  await page.getByRole('link', { name: 'Stars' }).hover();


});

// Most of the code in this test was created by me with the help of Copilot, since the tutorial didn't cover mouse actions.