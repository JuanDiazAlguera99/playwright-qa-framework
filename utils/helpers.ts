import { Page, expect, Locator } from '@playwright/test';

export class Helpers {
  constructor(private page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async refreshPage() {
    await this.page.reload();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async expectPageUrl(expectedUrl: string | RegExp) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
  async expectIsEnabled(locator: Locator) {
    await expect(locator).toBeEnabled();
  }

  async expectText(locator: Locator, expectedText: string) {
    await expect(locator).toHaveText(expectedText);
  }
}
