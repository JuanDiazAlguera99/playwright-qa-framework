import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { environments } from '../../config/environment';
import { Helpers } from '../../utils/helpers';
import { ROUTES } from '../../utils/constants';

const orangeHrm = environments.qa;

test.describe('Login Tests', () => {
  test('User should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const helpers = new Helpers(page);

    await test.step('Given the user is on the login page', async () => {
      await loginPage.goToLoginPage();
    });

    await test.step('When the user enters valid credentials', async () => {
      await loginPage.login(orangeHrm.username, orangeHrm.password);
    });

    await test.step('Then the user should login successfully', async () => {
      await helpers.expectPageUrl(ROUTES.DASHBOARD);
    });
  });

  test('User should not login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Given the user is on the login page', async () => {
      await loginPage.goToLoginPage();
    });

    await test.step('When the user enters invalid credentials', async () => {
      await loginPage.login('InvalidUser', 'InvalidPassword');
    });

    await test.step('Then an error message should be displayed', async () => {
      await loginPage.expectLoginError();
    });
  });

  test('User should be able to logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const helpers = new Helpers(page);

    await test.step('Given the user is logged in', async () => {
      await loginPage.goToLoginPage();
      await loginPage.login(orangeHrm.username, orangeHrm.password);
    });

    await test.step('When the user logs out', async () => {
      await loginPage.logout();
    });

    await test.step('Then the login page should be displayed', async () => {
      await helpers.expectPageUrl(ROUTES.LOGIN);
    });
  });
});
