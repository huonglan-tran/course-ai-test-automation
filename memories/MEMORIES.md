# MEMORIES.md — Bản đồ bộ nhớ của repo

Đọc theo thứ tự: `CLAUDE.md` → file này → chỉ các file liên quan tới việc đang làm.
Khi học được điều mới: ghi vào đúng file (hoặc tạo file mới) rồi thêm/sửa dòng tương ứng ở map này.

## Khi nào đọc gì

| Yêu cầu của bạn liên quan tới... | Đọc file |
|---|---|
| Cấu trúc framework, config, lệnh chạy, quy ước | [framework/overview.md](framework/overview.md) |
| Môi trường, biến .env, tài khoản test | [framework/environment.md](framework/environment.md) |
| Thông tin hệ thống CRM (URL, công nghệ, đặc điểm) | [system-under-test/crm-anhtester.md](system-under-test/crm-anhtester.md) |
| Chức năng Login — locator, hành vi | [modules/login/locators-and-behavior.md](modules/login/locators-and-behavior.md) |
| Chức năng Login — test case đã có / cần thêm | [modules/login/test-cases.md](modules/login/test-cases.md) |

## Danh sách module

| Module | Thư mục | Trạng thái |
|---|---|---|
| Login | `modules/login/` | Đã làm (2 test pass) |

## Quy tắc thêm bộ nhớ

- `framework/` — kiến thức chung của framework (cấu hình, quy ước, môi trường).
- `system-under-test/` — kiến thức về hệ thống đang test.
- `modules/<module>/` — mỗi chức năng một thư mục: `locators-and-behavior.md`, `test-cases.md`, `known-issues.md` (nếu có).
