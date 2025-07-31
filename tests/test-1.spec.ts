import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://undefeated.com/collections/mens-footwear/products/nike-zoom-vomero-5-summitwhite-metallicsilver?variant=39749314019589');
  await page.getByRole('button', { name: '9.5' }).click();
  await page.getByRole('button', { name: 'add item to cart' }).click();
  await page.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
  await page.getByRole('button', { name: 'continue to checkout' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('armg296@gmail.com');
  
});