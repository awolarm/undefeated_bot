import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://undefeated.com/collections/mens-footwear/products/nike-zoom-vomero-5-summitwhite-metallicsilver?variant=39749314019589');
  await page.getByRole('button', { name: '9.5' }).click();
  await page.getByRole('button', { name: 'add item to cart' }).click();
  await page.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
  await page.getByRole('button', { name: 'continue to checkout' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('armg296@gmail.com');
  // await page.locator('[data-testid="authorize-iframe"]').contentFrame().getByRole('textbox', { name: 'Verification code' }).click();
  // await page.locator('[data-testid="authorize-iframe"]').contentFrame().getByRole('textbox', { name: 'Verification code' }).fill('646928');
  // await page.goto('https://shop.app/checkout/2825850/cn/hWN1GizsPFrrgss0ldvoShzm/shoppay?_cs=3.ampS&checkout_queue_token=Ax9PSadv1ylHoornt-QNTZHuMI8-7LZ6t16MGpj1N1QvDasToMPMce-0pcTH7M88KuxVu-2zzVZs4woR-epcmK7HPPBEyOY9TBFncTcAoyMAN52u&tracking_unique=00000000-0000-0000-5000-000000000000&tracking_visit=00000000-0000-0000-5000-000000000000');
});