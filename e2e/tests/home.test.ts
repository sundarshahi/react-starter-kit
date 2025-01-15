import { test } from '@playwright/test';

import { homePageActions } from '../actions/homePage';

test.describe('Home Page', () => {
  test('should navigate to the home page', async ({ page }) => {
    await homePageActions.openHomePage(page);
  });

});
