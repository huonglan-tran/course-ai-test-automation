import { Locator, Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly sidebar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = page.locator('#side-menu');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/admin(\/)?$/);
    await expect(this.sidebar).toBeVisible();
  }
}
