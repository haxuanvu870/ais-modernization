# AIS Modernization - Next.js Website

Website hiện đại cho công ty AIS chuyên về hiện đại hóa hệ thống Visual FoxPro và các chương trình dựa trên X.

## 🚀 Tính năng

- **Giao diện hiện đại**: Thiết kế responsive với Tailwind CSS và Framer Motion
- **Form liên hệ**: Lưu dữ liệu vào Google Sheets
- **Animation mượt mà**: Sử dụng Framer Motion cho trải nghiệm người dùng tốt hơn
- **SEO tối ưu**: Sử dụng Next.js App Router
- **TypeScript**: Code type-safe và dễ bảo trì

## 🛠️ Công nghệ sử dụng

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Database**: Google Sheets API
- **Deployment**: Vercel (recommended)

## 📁 Cấu trúc project

```
ais-modernization/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   └── page.tsx        # Trang chính
│   ├── components/         # React components
│   │   ├── Header.tsx      # Header với hero section
│   │   ├── ClientLogos.tsx # Logo khách hàng
│   │   ├── Testimonial.tsx # Testimonial
│   │   ├── ContactForm.tsx # Form liên hệ
│   │   ├── VideoAbout.tsx  # Video và thông tin công ty
│   │   ├── Statistics.tsx  # Thống kê
│   │   ├── FAQ.tsx         # Câu hỏi thường gặp
│   │   ├── ProcessSteps.tsx # 5 bước quy trình
│   │   └── Footer.tsx      # Footer
│   └── config/             # Cấu hình
│       ├── googleSheets.ts # Google Sheets API
│       └── env.ts          # Environment variables
├── public/                 # Static files
├── package.json
└── README.md
```

## 🚀 Cài đặt

### 1. Clone project

```bash
git clone <repository-url>
cd ais-modernization
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình Google Sheets

Làm theo hướng dẫn trong file [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

### 4. Tạo file environment

Tạo file `.env.local`:

```env
GOOGLE_SPREADSHEET_ID="your-spreadsheet-id-here"
GOOGLE_APPLICATION_CREDENTIALS="src/config/service-account-key.json"
```

### 5. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📝 Cấu hình Google Sheets

Project sử dụng Google Sheets làm database thay vì MySQL. Dữ liệu từ form liên hệ sẽ được lưu vào Google Sheet với cấu trúc:

| Name | Email | Phone | Company | Message | Timestamp |
|------|-------|-------|---------|---------|-----------|
| John Doe | john@example.com | +1234567890 | ABC Corp | Hello | 2024-01-01T00:00:00.000Z |

## 🎨 Customization

### Thay đổi màu sắc

Các màu chính được định nghĩa trong Tailwind config:
- **Primary**: Blue (blue-600, blue-700, blue-800)
- **Accent**: Green (green-400)
- **Background**: Gray tones

### Thay đổi nội dung

Chỉnh sửa nội dung trong các component tương ứng:
- `Header.tsx`: Hero section và navigation
- `Testimonial.tsx`: Quote và thông tin khách hàng
- `FAQ.tsx`: Câu hỏi và câu trả lời
- `ProcessSteps.tsx`: Quy trình 5 bước

## 📱 Responsive Design

Website được thiết kế responsive cho tất cả các thiết bị:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Kết nối với Vercel
3. Cấu hình environment variables
4. Deploy tự động

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Development

### Scripts có sẵn

```bash
npm run dev          # Development server
npm run build        # Build production
npm run start        # Start production server
npm run lint         # ESLint check
```

### Code Style

- Sử dụng TypeScript strict mode
- ESLint với Next.js config
- Prettier cho code formatting
- Component-based architecture

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Project này được phát hành dưới MIT License.

## 📞 Support

Nếu có vấn đề gì, vui lòng tạo issue hoặc liên hệ trực tiếp.

---

**AIS Modernization** - Hiện đại hóa hệ thống của bạn với đội ngũ đáng tin cậy!
