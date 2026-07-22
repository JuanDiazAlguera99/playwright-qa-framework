# Playwright Automation Project

Automated end-to-end tests using Playwright and TypeScript.

## 📋 Overview

This project contains automated UI tests for the OrangeHRM application using:

* Playwright
* TypeScript
* Page Object Model (POM)
* Allure Reports
* Prettier
* GitHub Actions

## 🛠️ Prerequisites

Before running the project, make sure you have installed:

* Node.js
* npm
* Java 17 or higher (required for Allure Commandline)

## 📦 Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ⚙️ Environment Configuration

Test environment configuration is located in:

```text
config/environment.ts
```

Example:

```ts
export const environments = {
  qa: {
    orangeHrmUrl: 'https://your-environment-url.com',
    username: 'your-username',
    password: 'your-password',
  },
};
```

> Do not commit sensitive credentials to the repository. Use environment variables or GitHub Secrets for sensitive information.

## 🧪 Running Tests

Run all tests:

```bash
npm test
```

Run UI tests:

```bash
npm run test:ui
```

Run API tests:

```bash
npm run test:api
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## 🧹 Code Formatting

Format the code automatically:

```bash
npm run format
```

Check code formatting without modifying files:

```bash
npm run format:check
```

## 📊 Allure Reports

Run tests and generate the Allure report:

```bash
npm run test:report
```

Generate the report manually:

```bash
npm run allure:generate
```

Open the Allure report:

```bash
npm run allure:open
```

The report is generated in:

```text
allure/reports/allure-report/
```

The raw Allure test results are stored in:

```text
allure/reports/allure-results/
```

## 🧱 Project Structure

```text
.
├── .github/
│   └── workflows/
│       ├── playwright.yml
│       └── prettier.yml
│
├── config/
│   └── environment.ts
│
├── pages/
│   └── loginPage.ts
│
├── tests/
│   ├── ui/
│   │   └── login.spec.ts
│   └── api/
│
├── allure/
│   └── reports/
│       ├── allure-results/
│       └── allure-report/
│
├── playwright.config.ts
├── package.json
└── README.md
```

## 🧪 Test Structure

Tests follow the Page Object Model pattern and use the Given / When / Then structure.

Example:

```ts
test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('Given the user is on the login page', async () => {
    await loginPage.goToLoginPage();
  });

  await test.step('When the user enters valid credentials', async () => {
    await loginPage.login(username, password);
  });

  await test.step('Then the user should login successfully', async () => {
    await loginPage.expectLoginSuccessful();
  });
});
```

## 🚀 Continuous Integration

GitHub Actions automatically runs the automated tests when:

* A Pull Request is created or updated
* Code is pushed to the `main` or `master` branch

The CI pipeline:

1. Installs Node.js
2. Installs project dependencies
3. Installs Playwright browsers
4. Runs the automated tests
5. Uploads the Playwright report as an artifact

A Pull Request should only be merged when all required checks pass successfully.

## 🔄 Pull Request Workflow

Create a new branch:

```bash
git checkout -b feature/my-new-test
```

Make your changes and run the tests:

```bash
npm test
```

Check formatting:

```bash
npm run format:check
```

Commit your changes:

```bash
git add .
git commit -m "add new login test"
```

Push your branch:

```bash
git push origin feature/my-new-test
```

Create a Pull Request and wait for the GitHub Actions checks to complete.

## ✅ Quality Checks

Before merging code, the following checks should pass:

```text
✅ Prettier formatting
✅ Playwright tests
✅ GitHub Actions CI pipeline
```

If any required check fails, the Pull Request should not be merged until the issue is fixed.
