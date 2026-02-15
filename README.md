# IRUSOL Landing Page

DUTO 랜딩 페이지를 기반으로 한 Next.js 프로젝트입니다.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5.x
- **Package Manager**: npm
- **Deployment**: Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
irusol-landing/
├── app/
│   ├── layout.tsx          # Root layout with Pretendard font
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles + DUTO theme
├── lib/
│   └── utils.ts            # Utility functions (cn)
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Design System

### DUTO Brand Colors

```css
--duto-primary: #7DE6C3;        /* Mint green */
--duto-primary-dark: #4FD4A8;   /* Dark mint */
--duto-butter: #FFF6BF;         /* Butter yellow */
--duto-pink: #F19ED2;           /* Pink accent */
--duto-bg: #F7F9F2;             /* Background */
--duto-text: #0F172A;           /* Text */
--duto-muted: #64748B;          /* Muted text */
```

### Design Philosophy

**Organic Gamification**:
- Natural growth curves with soft flowing shapes
- Asymmetric offset grid layouts
- Floating cards with depth and shadows
- Wave dividers between sections
- Butter yellow highlights, mint green primary, pink accents

## Deployment

### Vercel (Recommended)

1. Push 코드를 GitHub에 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 Import
3. 자동 배포 완료

### Manual Deployment

```bash
npm run build
# .next 폴더를 호스팅 서비스에 배포
```

## Next Steps

1. ✅ 기본 프로젝트 구조 생성 완료
2. 📝 UI 컴포넌트 마이그레이션 (shadcn/ui)
3. 🎨 Home 페이지 전체 UI 구현
4. 📧 Form 제출 로직 구현 (Server Actions)
5. 🖼️ 이미지 최적화 (next/image)
6. 🚀 Vercel 배포

## License

MIT
