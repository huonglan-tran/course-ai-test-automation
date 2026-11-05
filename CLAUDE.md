# CLAUDE.md

Playwright + TypeScript automation framework cho CRM https://crm.anhtester.com (Perfex CRM).

## Quy trình bắt buộc khi nhận yêu cầu làm chức năng nào đó

1. Đọc file này (CLAUDE.md).
2. Đọc `memories/MEMORIES.md` — đây là **file map** chỉ đường tới các bộ nhớ chi tiết.
3. Từ map, chỉ đọc các file bộ nhớ liên quan tới chức năng/module đang làm (tránh đọc thừa gây nhiễu), nhưng phải đọc đủ phần liên quan.
4. Làm việc xong, **cập nhật bộ nhớ** trong `memories/` (xem quy tắc dưới).

## Quy tắc bộ nhớ (memories/)

- Lưu ngay trong repo, thư mục `memories/`. `memories/MEMORIES.md` là file map duy nhất, mỗi dòng trỏ tới một file bộ nhớ + mô tả ngắn.
- Chia nhỏ theo module/phần: `memories/framework/`, `memories/system-under-test/`, `memories/modules/<tên-module>/`.
- Mỗi file chỉ một chủ đề, ngắn gọn; file nào phình to thì tách nhỏ và cập nhật map.
- Đặt tên file/folder rõ nghĩa (vd: `locators.md`, `test-cases.md`, `known-issues.md`).
- Thêm module mới => tạo folder `memories/modules/<module>/` và thêm dòng vào MEMORIES.md.
- Không lưu mật khẩu thật/bí mật vào memories; chỉ ghi tên biến trong `.env`.

## Cấu trúc dự án

- `src/pages/` — Page Object Model (mỗi trang một class)
- `src/tests/` — spec files (`*.spec.ts`)
- `src/config/env.ts` — đọc biến môi trường từ `.env`
- `playwright.config.ts` — cấu hình Playwright
- `.claude/settings.json` — cấu hình Claude Code cho dự án (quyền chạy lệnh test/typecheck)
- `README.md` — hướng dẫn cài đặt và chạy cho người dùng
- `.env` (gitignored) / `.env.example` — BASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD

## Lệnh thường dùng

```bash
npm test              # chạy toàn bộ test (headless)
npm run test:headed   # chạy có hiển thị trình duyệt
npm run test:ui       # Playwright UI mode
npm run report        # mở HTML report
npm run typecheck     # kiểm tra TypeScript
```

## Quy ước code

- Dùng Page Object Model; locator khai báo là `readonly` trong constructor.
- Ưu tiên locator ổn định (id, role) hơn CSS/XPath dài.
- Không hard-code URL/tài khoản trong test; dùng `baseURL` và `src/config/env.ts`.
- Dùng web-first assertions (`await expect(...)`), không dùng `waitForTimeout`.
