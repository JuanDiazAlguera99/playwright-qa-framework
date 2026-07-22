import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { environments } from './../../config/environment';

const orangeHrm = environments.qa;

test.describe('Login Tests', () => {
  test('User should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();

    await loginPage.login(orangeHrm.username, orangeHrm.password);

    await loginPage.expectLoginSuccessful();
  });

  test('User should not login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();

    await loginPage.login('InvalidUser', 'InvalidPassword');

    await loginPage.expectLoginError();
  });
});
