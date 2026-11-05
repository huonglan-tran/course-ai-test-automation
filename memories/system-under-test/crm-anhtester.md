# Hệ thống: CRM AnhTester

- URL: https://crm.anhtester.com (site demo Perfex CRM dùng cho khóa học).
- Trang login: `/admin/authentication`.
- Sau login thành công vào khu vực `/admin` (dashboard), có sidebar `#side-menu`.
- Form dùng CSRF token (`csrf_token_name`) — Playwright gửi form qua UI nên không cần xử lý riêng.
- Là site public dùng chung => dữ liệu có thể bị người khác thay đổi; tránh phụ thuộc dữ liệu cụ thể.
- Thời gian phản hồi khoảng 8s/test (server chậm) — cân nhắc timeout nếu flaky.
