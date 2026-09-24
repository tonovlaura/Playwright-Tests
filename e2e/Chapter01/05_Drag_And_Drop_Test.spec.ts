import { test, expect } from '@playwright/test';

test('Handling Iframes, grag and drop element in PLaywright', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://jqueryui.com/droppable/');

  // Wait for the iframe to load
  //iframe is an are inside a page where some actions happen (like dragging something)
  // inspector -> iframe class= ...
  const iframe = page.frameLocator('[class="demo-frame"]');

  // Perform drag and drop
  const dragElement = iframe.locator('[id="draggable"]');
  const dropElement = iframe.locator('[id="droppable"]');
  
  await dragElement.dragTo(dropElement);

});