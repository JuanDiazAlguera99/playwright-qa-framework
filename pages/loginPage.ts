import { expect, Locator, Page } from '@playwright/test';
import { Helpers } from '../utils/helpers';
import { testData } from '../utils/testData';

export class LoginPage {
  readonly page: Page;
  readonly helpers: Helpers;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly userDropdownName: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpers = new Helpers(page);

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.userDropdownName = page.locator('.oxd-userdropdown-name');
    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
  }

  async goToLoginPage() {
    await this.page.goto('/web/index.php/auth/login');
    await this.helpers.waitForPageLoad();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.helpers.expectIsEnabled(this.loginButton);
    await this.loginButton.click();
  }

  async expectLoginError() {
    await expect(this.errorMessage).toBeVisible();
    await this.helpers.expectText(
      this.errorMessage,
      testData.errorMessages.invalidLogin,
    );
  }
  async logout() {
    await this.userDropdownName.click();
    await this.logoutButton.click();
  }
}
