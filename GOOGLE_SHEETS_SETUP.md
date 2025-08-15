# Google Sheets Setup Guide

## Bước 1: Tạo Google Cloud Project

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo project mới hoặc chọn project hiện có
3. Bật Google Sheets API:
   - Vào "APIs & Services" > "Library"
   - Tìm "Google Sheets API" và bật

## Bước 2: Tạo Service Account

1. Vào "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Điền thông tin:
   - Name: `ais-modernization-sheets`
   - Description: `Service account for AIS Modernization contact form`
4. Click "Create and Continue"
5. Bỏ qua các bước còn lại và click "Done"

## Bước 3: Tạo và tải Key

1. Click vào service account vừa tạo
2. Vào tab "Keys"
3. Click "Add Key" > "Create new key"
4. Chọn "JSON" và click "Create"
5. File JSON sẽ được tải về, đặt vào thư mục `src/config/` với tên `service-account-key.json`

## Bước 4: Tạo Google Sheet

1. Tạo Google Sheet mới
2. Tạo sheet đầu tiên với tên "Contacts"
3. Thêm headers vào row đầu tiên:
   - A1: Name
   - B1: Email
   - C1: Phone
   - D1: Company
   - E1: Message
   - F1: Timestamp
4. Copy Spreadsheet ID từ URL (phần giữa /d/ và /edit)

## Bước 5: Chia sẻ Sheet

1. Click "Share" button
2. Thêm email của service account (có trong file JSON)
3. Cấp quyền "Editor"

## Bước 6: Cấu hình Environment Variables

Tạo file `.env.local` trong thư mục gốc:

```env
GOOGLE_SPREADSHEET_ID="your-spreadsheet-id-here"
GOOGLE_APPLICATION_CREDENTIALS="src/config/service-account-key.json"
```

## Bước 7: Cài đặt Dependencies

```bash
npm install googleapis
```

## Bước 8: Test

1. Chạy development server: `npm run dev`
2. Điền form contact
3. Kiểm tra Google Sheet xem có dữ liệu mới không

## Lưu ý bảo mật

- KHÔNG commit file `service-account-key.json` vào git
- Thêm `*.json` vào `.gitignore` nếu cần
- Sử dụng environment variables cho production
