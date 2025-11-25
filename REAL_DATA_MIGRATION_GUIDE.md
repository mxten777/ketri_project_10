# KETRI 웹사이트 리뉴얼 프로젝트 - 실데이터 대체 가이드

## 📋 개요

본 문서는 KETRI 웹사이트 리뉴얼 프로젝트에서 더미 데이터로 구현된 부분들을 실데이터로 대체하는 방법을 안내합니다.

## 🔍 실데이터 대체 대상 페이지

### 1. 공지사항 페이지 (`src/pages/Notices.tsx`)

**현재 상태:** 하드코딩된 더미 공지사항 데이터
```typescript
const notices: Notice[] = [
  {
    id: '1',
    title: '2025년 신년 인사',
    content: '한국환경안전연구소의 새로운 한 해를 맞이하여...',
    date: '2025-01-01',
    important: true,
  },
  // ...
];
```

**대체 방법:**
```typescript
// Firebase Firestore 연동
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Notice[];
        setNotices(noticesData);
      } catch (error) {
        console.error('공지사항 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);
  // ...
};
```

**필요한 Firestore 컬렉션 구조:**
```
notices/
  ├── {noticeId}/
  │   ├── title: string
  │   ├── content: string
  │   ├── date: timestamp
  │   ├── important: boolean
  │   └── author: string
```

### 2. 실내공기질 성적서 조회 (`src/pages/indoor/IndoorAirResults.tsx`)

**현재 상태:** 하드코딩된 샘플 성적서 데이터
```typescript
const sampleResults = [
  {
    id: 'IAQ-2024-00123',
    customer: '서울시청',
    facility: '본관 1층 사무실',
    date: '2024-11-20',
    status: 'completed',
    items: ['PM-10', 'CO₂', 'HCHO', 'TVOC'],
    result: '합격',
    downloadUrl: '#',
  },
  // ...
];
```

**대체 방법:**
```typescript
// Firebase Firestore + Storage 연동
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const IndoorAirResults = () => {
  const handleSearch = async () => {
    try {
      let q;
      if (searchType === 'certificate') {
        q = query(collection(db, 'certificates'), where('id', '==', searchTerm));
      } else {
        q = query(collection(db, 'certificates'), where('customer', '==', searchTerm));
      }

      const querySnapshot = await getDocs(q);
      const results = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let downloadUrl = null;

          if (data.pdfPath) {
            const storage = getStorage();
            const pdfRef = ref(storage, data.pdfPath);
            downloadUrl = await getDownloadURL(pdfRef);
          }

          return {
            id: doc.id,
            ...data,
            downloadUrl
          };
        })
      );

      setResults(results);
    } catch (error) {
      console.error('성적서 검색 실패:', error);
    }
  };
};
```

**필요한 Firestore 컬렉션 구조:**
```
certificates/
  ├── {certificateId}/
  │   ├── id: string (IAQ-2024-00123)
  │   ├── customer: string
  │   ├── facility: string
  │   ├── date: timestamp
  │   ├── status: string (completed/processing)
  │   ├── items: string[]
  │   ├── result: string (합격/불합격)
  │   ├── pdfPath: string (Firebase Storage 경로)
  │   └── measurements: object (측정값 상세)
```

### 3. 견적 요청 폼 데이터

**현재 상태:** 폼 제출 시 콘솔 로그만 출력
```typescript
const handleSubmit = (formData: QuoteFormData) => {
  console.log('견적 요청:', formData);
  // TODO: Firebase Functions로 이메일 발송
};
```

**대체 방법:**
```typescript
// Firebase Functions 연동
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/config';

const handleSubmit = async (formData: QuoteFormData) => {
  try {
    const sendQuoteRequest = httpsCallable(functions, 'sendQuoteRequest');
    const result = await sendQuoteRequest(formData);

    if (result.data.success) {
      // 성공 처리
      setSubmitStatus('success');
    }
  } catch (error) {
    console.error('견적 요청 실패:', error);
    setSubmitStatus('error');
  }
};
```

### 4. 가격 및 서비스 정보

**현재 상태:** 하드코딩된 가격표
```typescript
const pricing = [
  { item: '일반 화학물질', period: '6개월', price: '50,000원' },
  // ...
];
```

**대체 방법:**
- Firebase Firestore에서 동적 관리
- 관리자 페이지에서 가격 업데이트 가능하도록 구현

### 5. 고객 후기 및 실적 데이터

**현재 상태:** 샘플 데이터
```typescript
const testimonials = [
  {
    name: '김철수',
    company: 'ABC 기업',
    content: '서비스가 매우 만족스럽습니다.',
    rating: 5
  }
];
```

**대체 방법:**
- 실제 고객 후기 Firestore 컬렉션
- 관리자 승인 시스템 구현

## 🛠️ 구현 우선순위

### Phase 1: 핵심 기능 (필수)
1. **공지사항 시스템** - Firestore 연동
2. **성적서 조회 시스템** - Firestore + Storage 연동
3. **견적 요청 폼** - Firebase Functions 이메일 발송

### Phase 2: 관리 기능 (권장)
1. **관리자 페이지** - 콘텐츠 관리 인터페이스
2. **실시간 알림** - 새로운 공지사항 푸시
3. **통계 대시보드** - 조회수, 인기 서비스 분석

### Phase 3: 고급 기능 (선택)
1. **AI 챗봇** - 서비스 문의 자동 응대
2. **예약 시스템** - 방문 예약 기능
3. **멀티랭귀지** - 영어/중국어 지원

## 📊 데이터 마이그레이션 계획

### 1. 기존 데이터 수집
- 현재 운영 중인 시스템에서 데이터 추출
- CSV/Excel 형식으로 정리

### 2. Firebase 설정
```bash
# Firebase 프로젝트 초기화
firebase init firestore
firebase init storage
firebase init functions

# 보안 규칙 설정
firebase deploy --only firestore:rules,storage:rules
```

### 3. 데이터 임포트
```typescript
// 데이터 임포트 스크립트
import { collection, addDoc } from 'firebase/firestore';

const importNotices = async () => {
  const noticesData = [
    // 기존 공지사항 데이터
  ];

  for (const notice of noticesData) {
    await addDoc(collection(db, 'notices'), notice);
  }
};
```

## 🔒 보안 고려사항

### 1. 데이터 접근 권한
- 성적서 조회: 고객 인증 필요
- 공지사항: 공개 읽기 전용
- 견적 요청: CAPTCHA 및 유효성 검증

### 2. 개인정보 보호
- GDPR/CCPA 준수
- 데이터 암호화 저장
- 접근 로그 기록

## 📈 모니터링 및 유지보수

### 1. 성능 모니터링
- Firebase Performance Monitoring
- Core Web Vitals 추적

### 2. 에러 추적
- Firebase Crashlytics
- Sentry 연동 (선택)

### 3. 백업 전략
- Firestore 자동 백업
- Storage 버전 관리

---

## 📞 담당자 연락처

- **프로젝트 매니저:** [이름]
- **개발팀:** [팀원 목록]
- **Firebase 담당:** [담당자]

**문의:** dev@ketri.co.kr | **전화:** 02-123-4567</content>
<parameter name="filePath">c:\ketricoding\ketri_project_10\REAL_DATA_MIGRATION_GUIDE.md