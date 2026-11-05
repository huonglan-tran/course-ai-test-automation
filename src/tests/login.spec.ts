import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { env } from '../config/env';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('login thành công với tài khoản admin hợp lệ', async ({ page }) => {
    await loginPage.login(env.adminEmail, env.adminPassword);
    await new DashboardPage(page).expectLoaded();
  });

  test('login thất bại với mật khẩu sai', async ({ page }) => {
    await loginPage.login(env.adminEmail, 'wrong-password');
    await expect(page).toHaveURL(/\/admin\/authentication/);
    await expect(loginPage.alertMessage).toBeVisible();
  });
});
