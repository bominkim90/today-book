# Today Book - 통합 프로젝트

## 1. 프로젝트 소개

**서비스 이름:** Today Book  
**한 줄 설명:** 오늘의 책을 추천해주는 도서 큐레이션/검색 웹 서비스

**어떤 문제를 해결하는 서비스인지:**  
사용자에게 매일 새로운 책을 추천하고, 다양한 카테고리별 도서 검색·리뷰·찜(즐겨찾기) 등 독서 경험을 풍부하게 만들어줍니다.

---

## 2. 기능 요약

- 오늘의 추천 도서, 신간, 베스트셀러 제공
- 도서 검색(키워드, 카테고리)
- 도서 상세 정보 및 리뷰 확인
- 도서 찜(즐겨찾기) 기능
- 최근 검색 기록
- 마이페이지(내 정보, 내 찜 목록)
- 반응형 모바일 UI

**대표 화면 예시:**

- 홈, 검색, 상세, 찜, 마이페이지 등  
  (예시 이미지: `/frontend/public/imgs/book-cover.png`, `/frontend/public/icons/nav/home/on.svg` 등 활용 가능)

---

## 3. 프로젝트 구조

```
today-book-fork/
  ├── backend/   # NestJS 기반 API 서버
  └── frontend/  # React + Vite 기반 웹 프론트엔드
      ├── public/      # 정적 파일(아이콘, 이미지)
      ├── src/
      │   ├── api/         # API 함수
      │   ├── components/  # 공통 컴포넌트
      │   ├── hooks/       # 커스텀 훅
      │   ├── layout/      # 레이아웃
      │   ├── lib/         # 유틸리티(axios 등)
      │   ├── models/      # 타입/모델
      │   ├── pages/       # 주요 페이지
      │   ├── router/      # 라우터
      │   ├── store/       # 상태 관리
      │   └── App.tsx, main.tsx
      ├── package.json
      └── ...
```

---

## 4. 기술 스택

**백엔드**

- 언어: TypeScript (Node.js)
- 프레임워크: NestJS
- DB: MySQL, PostgreSQL (TypeORM)
- 기타: Axios, Passport, class-validator

**프론트엔드**

- 언어: TypeScript
- 라이브러리: React, Zustand, TanStack React Query, Swiper
- 스타일: Tailwind CSS
- 빌드: Vite
- HTTP: Axios
- 기타: ESLint, Prettier

---

## 5. 설치 및 실행 방법

### 전체 실행 방법

1. 백엔드와 프론트엔드 각각 설치 및 실행
2. 환경 변수 설정 필요

### 프론트엔드

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

- 환경 변수: `.env` 파일에 `VITE_API_URL=http://localhost:3000` 등 설정

### 백엔드

```bash
cd backend
npm install
npm run start:dev   # http://localhost:3000
```

- 환경 변수: `.env` 파일에 DB, Kakao API 등 설정 필요  
  (예: `KAKAO_ID`, `KAKAO_SECRET`, `KAKAO_REDIRECT_URI`, `API_TTB_KEY` 등)

---

## 6. API 문서

### 주요 엔드포인트

- **도서**

  - `GET /api/books/search` : 도서 검색 (쿼리 파라미터)
  - `GET /api/books` : 도서 목록(오늘/신간/베스트)
  - `GET /api/books/:isbn` : 도서 상세

- **유저**

  - `POST /api/users` : 회원 생성
  - `GET /api/users` : 전체 유저 조회
  - `GET /api/users/:id` : 유저 상세
  - `PATCH /api/users/:id` : 유저 정보 수정
  - `DELETE /api/users/:id` : 유저 삭제

- **인증**
  - `GET /api/auth/kakao` : 카카오 로그인 리다이렉트
  - `GET /api/auth/kakao/callback` : 카카오 로그인 콜백

### 인증 방법

- 카카오 OAuth2 인증(프론트에서 `/api/auth/kakao`로 이동 → 카카오 인증 → 콜백에서 토큰 발급)
- 인증 후 토큰(예: JWT 등) 활용, 상세 구현은 백엔드 코드 참고

### 요청/응답 예시

- 도서 검색:  
  `GET /api/books/search?keyword=React&page=1&limit=10`

- 도서 상세:  
  `GET /api/books/9781234567890`

---

## 7. 주요 폴더/파일 설명

- `frontend/src/api/`: 백엔드 API와 통신하는 함수
- `frontend/src/components/`: 버튼, 모달 등 공통 UI 컴포넌트
- `frontend/src/hooks/`: React Query 기반 데이터 훅
- `frontend/src/layout/`: Header, BottomNav 등 레이아웃
- `frontend/src/pages/`: 각 라우트별 페이지(홈, 상세, 검색, 찜, 마이)
- `frontend/src/store/`: Zustand 기반 전역 상태 관리
- `frontend/src/lib/axios.ts`: Axios 인스턴스 및 인터셉터 설정
- `backend/src/`: NestJS 기반 API 서버 코드

---

## 8. 배포/운영 정보

- **서비스 URL:** (예: https://todaybook.example.com)
- **데모 계정:** (테스트용 계정 정보, 필요시)
- **배포 방법:**
  - 프론트: Vercel, Netlify 등 정적 호스팅
  - 백엔드: AWS, Render, Heroku 등
  - 환경 변수 및 빌드 방법은 각 서비스 문서 참고

---

## 9. 문제 해결/트러블슈팅

- 카카오 로그인 리다이렉트/콜백 환경 변수 누락 시 인증 실패 → `.env` 재확인
- CORS 오류 발생 시 백엔드 `main.ts`의 CORS 설정 확인
- 도서 API(알라딘) 키 누락 시 데이터 조회 불가 → `API_TTB_KEY` 환경 변수 필요

---

## 10. 기여/라이선스

- **기여 방법:**
  1. 이슈 등록 → 브랜치 생성 → PR 요청
  2. 코드 컨벤션: Prettier, ESLint 적용
- **라이선스:**
  - MIT (또는 프로젝트 정책에 따라 변경)
