# KETRI 실데이터 교체 가이드 - 연락처 및 회사 정보

## 📋 개요

본 문서는 KETRI 웹사이트에서 더미 데이터로 설정된 연락처, 주소, 이메일 등의 회사 정보를 실데이터로 교체하는 방법을 안내합니다.

## 🔍 실데이터 교체 대상

### 1. 기본 회사 정보

**현재 더미 데이터:**
```typescript
// 대표 주소
"서울특별시 강남구 테헤란로 123"

// 대표 전화번호
"02-123-4567"

// 대표 이메일
"info@ketri.co.kr"
```

**실데이터로 교체 필요 항목:**
- ✅ **회사 주소:** 실제 사무실 주소
- ✅ **대표 전화번호:** 실제 대표번호
- ✅ **팩스 번호:** 실제 팩스 번호
- ✅ **이메일 주소:** 실제 이메일 주소들
- ✅ **업무 시간:** 실제 업무 시간
- ✅ **대중교통 정보:** 실제 위치 기반

### 2. 부서별 연락처 정보

**현재 더미 데이터:**
```typescript
// 먹는물 검사 담당
contact: '02-123-4567'
email: 'water@ketri.co.kr'

// 실내공기질 담당
contact: '02-123-4567'
email: 'indoor@ketri.co.kr'

// 개인정보 담당
email: 'privacy@ketri.co.kr'

// 접근성 담당
email: 'accessibility@ketri.co.kr'

// 저작권 담당
email: 'copyright@ketri.co.kr'
```

## 📁 파일별 교체 대상

### 1. `src/pages/intro/Directions.tsx` - 오시는 길 페이지

**교체해야 할 부분:**
```typescript
const contactInfo = [
  {
    icon: MapPin,
    title: '주소',
    content: [
      '[실제 주소 입력]',  // 예: '서울특별시 강남구 역삼동 123-45'
      '[상세 주소 입력]'   // 예: 'KETRI 빌딩 5층'
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Phone,
    title: '전화',
    content: [
      '[대표번호 입력] (대표)',    // 예: '02-555-0123 (대표)'
      '[팩스번호 입력] (팩스)'     // 예: '02-555-0124 (팩스)'
    ],
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Mail,
    title: '이메일',
    content: [
      '[대표 이메일 입력]',      // 예: 'info@ketri.co.kr'
      '[지원 이메일 입력]'       // 예: 'support@ketri.co.kr'
    ],
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Clock,
    title: '업무 시간',
    content: [
      '[업무시간 입력]',         // 예: '평일 09:00 - 18:00'
      '[점심시간 입력]'          // 예: '점심 12:00 - 13:00'
    ],
    color: 'from-orange-400 to-orange-600',
  },
];
```

**대중교통 정보 교체:**
```typescript
const transportOptions = [
  {
    icon: Train,
    title: '지하철',
    routes: [
      {
        line: '[실제 호선]',      // 예: '2호선'
        station: '[실제 역]',     // 예: '선릉역'
        exit: '[실제 출구]',      // 예: '1번 출구'
        walk: '[도보 시간]'       // 예: '도보 3분'
      }
      // 추가 역 정보...
    ],
  },
  {
    icon: Bus,
    title: '버스',
    routes: [
      {
        stop: '[실제 정류장]',    // 예: '선릉역 정류장'
        numbers: ['[버스 번호들]'] // 예: ['146', '360', '402']
      }
      // 추가 정류장 정보...
    ],
  },
];
```

### 2. `src/components/Footer.tsx` - 사이트 푸터

**교체해야 할 부분:**
```typescript
<div>
  <h4 className="font-semibold mb-4">연락처</h4>
  <div className="text-gray-400 space-y-2">
    <p>📍 [실제 주소 입력]</p>           // 예: '서울특별시 강남구 역삼동 123-45'
    <p>📞 [대표 전화번호 입력]</p>       // 예: '02-555-0123'
    <p>📧 [대표 이메일 입력]</p>         // 예: 'info@ketri.co.kr'
    <p>🕒 [업무시간 입력]</p>            // 예: '월-금 09:00-18:00'
  </div>
</div>
```

### 3. `src/pages/water/WaterRequest.tsx` - 먹는물 검사 신청

**교체해야 할 부분:**
```typescript
const contactInfo = {
  department: '먹는물 검사 담당',
  contact: '[실제 전화번호]',     // 예: '02-555-0123'
  email: '[실제 이메일]',         // 예: 'water@ketri.co.kr'
  hours: '평일 09:00-18:00'
};
```

### 4. `src/pages/indoor/IndoorAirQuote.tsx` - 실내공기질 견적 요청

**교체해야 할 부분:**
```typescript
<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
  <Phone className="w-5 h-5 text-primary-500" />
  <span className="text-secondary-700 dark:text-secondary-300">[실제 전화번호]</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
  <Mail className="w-5 h-5 text-primary-500" />
  <span className="text-secondary-700 dark:text-secondary-300">[실제 이메일]</span>
</div>
```

### 5. `src/pages/indoor/IndoorAirResults.tsx` - 실내공기질 성적서 조회

**교체해야 할 부분:**
```typescript
<div className="space-y-3">
  <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
    <Phone className="w-5 h-5 text-primary-500" />
    <span className="text-secondary-700 dark:text-secondary-300">[실제 전화번호]</span>
  </div>
  <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
    <Mail className="w-5 h-5 text-primary-500" />
    <span className="text-secondary-700 dark:text-secondary-300">[실제 이메일]</span>
  </div>
</div>
```

### 6. `src/pages/footer/Privacy.tsx` - 개인정보처리방침

**교체해야 할 부분:**
```typescript
<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
    개인정보 보호책임자
  </h3>
  <div className="space-y-2 text-blue-700 dark:text-blue-300">
    <p><strong>성명:</strong> [담당자 이름]</p>
    <p><strong>직책:</strong> [담당자 직책]</p>
    <p><strong>연락처:</strong> [실제 이메일]</p>
    <p><strong>전화:</strong> [실제 전화번호]</p>
  </div>
</div>
```

### 7. `src/pages/footer/Accessibility.tsx` - 웹 접근성

**교체해야 할 부분:**
```typescript
<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
    접근성 관련 문의
  </h3>
  <div className="space-y-2 text-green-700 dark:text-green-300">
    <p><strong>이메일:</strong> [실제 이메일]</p>
    <p><strong>전화:</strong> [실제 전화번호]</p>
  </div>
</div>
```

### 8. `src/pages/footer/Copyright.tsx` - 저작권

**교체해야 할 부분:**
```typescript
<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-4">
    저작권 문의
  </h3>
  <div className="space-y-2 text-purple-700 dark:text-purple-300">
    <p><strong>이메일:</strong> [실제 이메일]</p>
    <p><strong>전화:</strong> [실제 전화번호]</p>
  </div>
</div>
```

## 🛠️ 교체 작업 순서

### Phase 1: 기본 정보 교체 (필수)
1. **회사 기본 정보 수집**
   - 실제 주소, 전화번호, 이메일 확인
   - 업무 시간 및 운영 정보 확인

2. **주요 페이지 교체**
   - `Directions.tsx` (오시는 길)
   - `Footer.tsx` (사이트 푸터)

### Phase 2: 세부 정보 교체 (권장)
1. **서비스별 담당자 정보**
   - 각 서비스 페이지의 연락처
   - 부서별 담당 이메일

2. **법적 문서 정보**
   - 개인정보 보호책임자
   - 접근성/저작권 담당자

## 📊 데이터 검증 체크리스트

### 주소 정보
- [ ] 실제 도로명 주소 확인
- [ ] 상세 주소 (건물명, 층수) 확인
- [ ] 우편번호 확인
- [ ] 지도 서비스 연동 가능 여부 확인

### 연락처 정보
- [ ] 대표 전화번호 확인
- [ ] 팩스 번호 확인 (있는 경우)
- [ ] 대표 이메일 주소 확인
- [ ] 부서별 이메일 주소 확인

### 업무 정보
- [ ] 실제 업무 시간 확인
- [ ] 점심 시간 확인
- [ ] 휴무일 정보 확인
- [ ] 긴급 연락처 확인

### 교통 정보
- [ ] 가장 가까운 지하철역 확인
- [ ] 버스 정류장 정보 확인
- [ ] 주차장 정보 확인
- [ ] 주변 랜드마크 확인

## 🔒 보안 및 개인정보 고려사항

### 이메일 주소 관리
- **실제 운영 이메일 사용:** 테스트용 주소가 아닌 실제 업무용 이메일
- **스팸 방지:** 이메일 주소가 수집되지 않도록 조치
- **연락처 분리:** 일반 문의와 민감한 문의를 분리

### 전화번호 관리
- **대표번호 우선:** 일반 문의는 대표번호로 유도
- **부서별 번호:** 전문 상담이 필요한 경우 부서별 번호 제공
- **업무 시간 안내:** 전화 연결 가능 시간 명시

## 📞 담당자 연락처

**프로젝트 문의:** pm@ketri.co.kr
**기술 지원:** dev@ketri.co.kr
**데이터 관리:** data@ketri.co.kr

---

## ✅ 최종 검증

실데이터 교체 완료 후 다음 항목들을 검증하세요:

1. **모든 페이지에서 주소/연락처 일관성 확인**
2. **이메일 주소가 실제 수신 가능한지 테스트**
3. **전화번호가 실제 연결되는지 확인**
4. **지도 서비스에 주소 검색이 가능한지 확인**
5. **업무 시간 정보가 최신인지 확인**

**교체 완료 시점:** [날짜 입력]
**검증 담당자:** [담당자 이름]
**승인 담당자:** [승인자 이름]</content>
<parameter name="filePath">c:\ketricoding\ketri_project_10\REAL_CONTACT_DATA_GUIDE.md