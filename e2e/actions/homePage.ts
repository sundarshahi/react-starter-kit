import { Page, expect } from '@playwright/test';

const openHomePage = async (page: Page) => {
  await page.goto('/');

  await expect(page).toHaveTitle("Vite + React + TS");
  await expect(page.locator('label')).toContainText('Hey');
};

export const homePageActions = {
  openHomePage,
};
