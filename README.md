# Course AI Test Automation

Automation framework dùng **Playwright + TypeScript** để kiểm thử CRM https://crm.anhtester.com (Perfex CRM).

## Yêu cầu

- Node.js >= 18
- npm

## Cài đặt

```bash
npm install
npx playwright install chromium
```

Tạo file `.env` từ file mẫu rồi điền thông tin:

```bash
cp .env.example .env
```

| Biến | Ý nghĩa |
|---|---|
| `BASE_URL` | URL hệ thống (mặc định `https://crm.anhtester.com`) |
| `ADMIN_EMAIL` | Email tài khoản admin |
| `ADMIN_PASSWORD` | Mật khẩu tài khoản admin |

## Chạy test

```bash
npm test              # chạy headless
npm run test:headed   # hiển thị trình duyệt
npm run test:ui       # Playwright UI mode
npm run report        # mở HTML report
npm run typecheck     # kiểm tra TypeScript
```

> Trên Windows PowerShell nếu gặp lỗi "running scripts is disabled", dùng `npm.cmd test` hoặc chạy
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

## Cấu trúc

```
├── src/
│   ├── pages/        # Page Object Model
│   ├── tests/        # Spec files (*.spec.ts)
│   └── config/       # Đọc biến môi trường
├── memories/         # Bộ nhớ dự án (bắt đầu từ MEMORIES.md)
├── .claude/          # Cấu hình Claude Code cho dự án
├── CLAUDE.md         # Hướng dẫn cho Claude
├── playwright.config.ts
└── .env.example
```

## Chức năng đã có

- Login: đăng nhập thành công, đăng nhập sai mật khẩu.
