// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,

   

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium', 
      use: { ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--disable-features=PasswordLeakDetection',
            '--disable-save-password-bubble',
          ],
        },
      } 
    },
    
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
});
