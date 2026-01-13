// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium', 
      use: { 
              ...devices['Desktop Chrome'],
      launchOptions: {
      headless:false,
      args: [
            '--disable-features=PasswordLeakDetection',
            '--disable-save-password-bubble',
          ],
        },
      } 
    },
    
    //{ name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
});
