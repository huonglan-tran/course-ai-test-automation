# Login — locators & hành vi

URL: `/admin/authentication`

| Phần tử | Locator | Ghi chú |
|---|---|---|
| Email | `#email` | input type=email, autofocus |
| Password | `#password` | input type=password |
| Remember me | `#remember` | checkbox |
| Nút Login | `getByRole('button', { name: 'Login' })` | submit |
| Thông báo lỗi | `.alert` | hiện khi sai thông tin, vẫn ở trang authentication |

Hành vi:
- Thành công: chuyển tới `/admin`, thấy `#side-menu`.
- Sai mật khẩu: ở lại `/admin/authentication` và hiện `.alert`.

Code: `src/pages/LoginPage.ts`, `src/pages/DashboardPage.ts`.
