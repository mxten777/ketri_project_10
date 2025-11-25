# 한국환경안전연구소 (KETRI) 공식 웹사이트

2025년 글로벌 Top-tier 연구기관 수준의 프리미엄 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v3.4+ + Headless UI
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage, Hosting, Functions)
- **Deployment**: Vercel

## ✨ 주요 기능

- **다크모드 기본** + 라이트모드 토글 (부드러운 전환)
- **모바일 퍼스트** 완벽 반응형 디자인
- **Framer Motion** 고급 스크롤·파럭스·마이크로 인터랙션
- **WCAG 2.1 AA** 웹 접근성 준수
- **Firebase Auth** 성적서 조회 등 제한적 사용
- **Firestore** 공지사항 동적 관리
- **견적 요청 폼** → Firebase Functions + 이메일 발송
- **전체 통합 검색** 기능

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Footer.tsx      # 푸터
│   └── Layout.tsx      # 레이아웃 래퍼
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈페이지
│   ├── intro/          # 연구소 소개
│   ├── consulting/     # 산업보건컨설팅
│   ├── water/          # 먹는물 검사
│   ├── dialysis/       # 혈액투석용수
│   ├── indoor/         # 실내공기질측정
│   ├── asbestos/       # 석면조사분석
│   ├── Notices.tsx     # 공지사항
│   └── footer/         # 푸터 페이지들
├── routes/             # 라우팅 설정
├── lib/                # 유틸리티 함수
├── firebase/           # Firebase 설정
└── assets/             # 정적 파일
```

## 🛠️ 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 미리보기
npm run preview
```

## 🎨 디자인 특징

- **미니멀·프리미엄·첨단·신뢰감 극대화**
- **공지사항 메뉴**: 강렬한 빨간 배경(#dc2626) + 흰 글씨 + 호버 애니메이션
- **고급 더미 콘텐츠**: 각 서비스별 전문적인 설명
- **Lighthouse 98+** 목표 성능 최적화

## 🚀 배포

Vercel을 통한 자동 배포 지원:

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 📞 연락처

- **주소**: 서울특별시 강남구 테헤란로 123
- **전화**: 02-123-4567
- **이메일**: info@ketri.co.kr

---

© 2025 한국환경안전연구소. All rights reserved.
