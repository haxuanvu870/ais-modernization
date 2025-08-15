# Vercel Deployment Guide

## 🚀 Deploy lên Vercel

### 1. **Push code lên GitHub**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. **Kết nối với Vercel**
1. Truy cập [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import repository từ GitHub
4. Chọn `ais-modernization`

### 3. **Cấu hình Environment Variables**
Trong Vercel dashboard, vào **Settings > Environment Variables**:

#### **Development & Production:**
```
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here
GOOGLE_APPLICATION_CREDENTIALS=your-service-account-json-content
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
```

#### **Lưu ý quan trọng:**
- **GOOGLE_APPLICATION_CREDENTIALS**: Copy toàn bộ nội dung file JSON (không phải đường dẫn)
- **NEXTAUTH_URL**: Thay `your-domain` bằng domain thực của bạn

### 4. **Deploy**
Click "Deploy" và chờ quá trình hoàn tất.

## 🔧 **Vấn đề thường gặp trên Vercel:**

### **Google Sheets API không hoạt động:**
- **Nguyên nhân**: Service account key file không tương thích với serverless
- **Giải pháp**: Copy nội dung JSON trực tiếp vào environment variable

### **Environment Variables không load:**
- **Nguyên nhân**: Variables chưa được set đúng
- **Giải pháp**: Kiểm tra lại trong Vercel dashboard

### **Build Error:**
- **Nguyên nhân**: Dependencies thiếu
- **Giải pháp**: Kiểm tra `package.json` và `next.config.ts`

## 📝 **Cách lấy Google Sheets JSON content:**

1. Mở file `service-account-key.json`
2. Copy toàn bộ nội dung (từ `{` đến `}`)
3. Paste vào Vercel environment variable `GOOGLE_APPLICATION_CREDENTIALS`

## 🎯 **Test sau khi deploy:**

1. Mở website đã deploy
2. Điền form contact
3. Submit và kiểm tra:
   - Form có submit thành công không?
   - Có thông báo lỗi gì không?
   - Console có log gì không?

## 🆘 **Nếu vẫn không hoạt động:**

### **Tạm thời bỏ Google Sheets:**
1. Comment out Google Sheets code trong `googleSheets.ts`
2. Chỉ log dữ liệu ra console
3. Deploy lại

### **Sử dụng alternative:**
- **Airtable API**
- **Supabase**
- **MongoDB Atlas**

## 📞 **Support:**
Nếu gặp vấn đề, hãy kiểm tra:
1. Vercel build logs
2. Browser console
3. Network tab trong DevTools
