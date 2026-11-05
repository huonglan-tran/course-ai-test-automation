# Environment & credentials

- Biến môi trường nằm ở `.env` (gitignored); mẫu ở `.env.example`.
- Biến: `BASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
- Đọc qua `src/config/env.ts` (export object `env`: `baseUrl`, `adminEmail`, `adminPassword`).
- Tài khoản admin demo do người dùng cung cấp: email `admin@example.com` (mật khẩu: xem `.env`, không ghi ở đây).
- Khi thêm biến mới: cập nhật cả `.env.example` và `src/config/env.ts`.
