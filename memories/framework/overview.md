# Framework overview

- Stack: Playwright Test + TypeScript (CommonJS), Node 24, dotenv.
- Pattern: Page Object Model.
  - `src/pages/LoginPage.ts` — `goto()`, `login(email, password)`
  - `src/pages/DashboardPage.ts` — `expectLoaded()` (URL `/admin` + sidebar `#side-menu` visible)
- Tests: `src/tests/login.spec.ts`.
- Config: `playwright.config.ts` — chỉ project `chromium`, `baseURL` từ `src/config/env.ts`, reporter html + list, trace on-first-retry, screenshot/video khi fail.
- Scripts: `npm test`, `test:headed`, `test:ui`, `report`, `typecheck`.
- tsconfig: không dùng `baseUrl`/`moduleResolution` (TypeScript bản mới đã bỏ -> lỗi TS5108/TS5102).
- `.claude/settings.json` cho phép sẵn các lệnh npm test/typecheck/playwright; `settings.local.json` bị gitignore.
- `README.md` ở gốc repo: hướng dẫn cài đặt/chạy; cập nhật khi đổi lệnh hoặc cấu trúc.
- Playwright browsers: đã cài chromium bằng `npx playwright install chromium`.
- Test ngôn ngữ mô tả: tiếng Việt trong tên test.
