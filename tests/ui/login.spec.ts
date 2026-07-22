import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { environments } from '../../config/environment';

const orangeHrm = environments.qa;

test.describe('Login Tests', () => {
  test('User should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Given the user is on the login page', async () => {
      await loginPage.goToLoginPage();
    });

    await test.step('When the user enters valid credentials', async () => {
      await loginPage.login(orangeHrm.username, orangeHrm.password);
    });

    await test.step('Then the user should login successfully', async () => {
      await loginPage.expectLoginSuccessful();
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
});
