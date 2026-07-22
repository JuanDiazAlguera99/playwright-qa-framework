# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Tests >> User should login successfully
- Location: tests\ui\login.spec.ts:5:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly errorMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 | 
  13 |     this.usernameInput = page.getByPlaceholder('Username');
  14 |     this.passwordInput = page.getByPlaceholder('Password');
  15 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  16 |     this.errorMessage = page.locator('.oxd-alert-content-text');
  17 |   }
  18 | 
  19 |   async navigate(): Promise<void> {
  20 |     await this.page.goto('/auth/login');
  21 |   }
  22 | 
  23 |   async login(username: string, password: string): Promise<void> {
> 24 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Target page, context or browser has been closed
  25 |     await this.passwordInput.fill(password);
  26 |     await this.loginButton.click();
  27 |   }
  28 | 
  29 |   async expectLoginSuccessful(): Promise<void> {
  30 |     await expect(this.page).toHaveURL(/dashboard/);
  31 |   }
  32 | 
  33 |   async expectLoginError(): Promise<void> {
  34 |     await expect(this.errorMessage).toBeVisible();
  35 |   }
  36 | }
```