import { defineConfig, devices } from '@playwright/test';
import { environments  } from './config/environment';

const config = environments.qa;

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'allure/reports/allure-results',
    }],
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: config.orangeHrmUrl,
      },
    },
  ],

  globalSetup: undefined,
});