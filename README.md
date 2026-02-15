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

### Vercel 배포 가이드 (Recommended)

#### 방법 1: GitHub 연동 (자동 배포)

**1단계: GitHub에 코드 푸시**
```bash
git add .
git commit -m "Initial commit"
git push -u origin master
```

**2단계: Vercel에서 프로젝트 Import**
1. [Vercel](https://vercel.com) 로그인 (GitHub 계정 연동)
2. "Add New Project" 클릭
3. GitHub 저장소 `bigone-k/irusol-landing` 선택
4. 프로젝트 설정 확인:
   - **Framework Preset**: Next.js (자동 감지됨)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: `.next` (기본값)
5. "Deploy" 클릭

**3단계: 환경 변수 설정 (선택사항)**
- Vercel 대시보드 → Settings → Environment Variables
- `.env.local.example` 파일 참고하여 필요한 환경 변수 추가

**4단계: 자동 배포 확인**
- `master` 브랜치에 푸시하면 자동으로 프로덕션 배포
- Pull Request 생성 시 자동으로 Preview 배포 생성

---

#### 방법 2: Vercel CLI 사용

**1단계: Vercel CLI 설치**
```bash
npm i -g vercel
```

**2단계: 로그인**
```bash
vercel login
```

**3단계: 프로젝트 배포**
```bash
# 첫 배포 (프로젝트 설정)
vercel

# 프로덕션 배포
vercel --prod
```

---

### 커스텀 도메인 설정

1. Vercel 대시보드 → Settings → Domains
2. 원하는 도메인 입력 (예: `irusol.com`)
3. DNS 레코드 추가:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

### 배포 후 확인사항

- ✅ 메인 페이지 로딩 확인
- ✅ 폰트 로딩 확인 (Pretendard)
- ✅ 이미지 최적화 적용 확인
- ✅ 모바일 반응형 확인
- ✅ Form 제출 동작 확인

---

### Troubleshooting

**빌드 실패 시:**
```bash
# 로컬에서 빌드 테스트
npm run build

# 캐시 삭제 후 재시도
rm -rf .next node_modules
npm install
npm run build
```

**환경 변수 문제:**
- Vercel 대시보드에서 Environment Variables 확인
- Redeploy 필요 (환경 변수 변경 시)

## Next Steps

1. ✅ 기본 프로젝트 구조 생성 완료
2. 📝 UI 컴포넌트 마이그레이션 (shadcn/ui)
3. 🎨 Home 페이지 전체 UI 구현
4. 📧 Form 제출 로직 구현 (Server Actions)
5. 🖼️ 이미지 최적화 (next/image)
6. 🚀 Vercel 배포

## License

MIT
