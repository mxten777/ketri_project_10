import { motion } from 'framer-motion';
import { FileText, Search, TestTube, BarChart, CheckCircle, Phone, Wrench, Download, Shield, Stethoscope, ClipboardList } from 'lucide-react';

const DialysisRequest = () => {
  const procedureSteps = [
    {
      step: '01',
      title: '의뢰 접수',
      desc: '전문 의뢰서 작성',
      icon: FileText,
      color: 'from-primary-400 to-primary-600',
      details: ['의료기관 담당자 확인', '의뢰서 양식 작성', '필요 서류 첨부', '접수 확인 및 일정 협의'],
    },
    {
      step: '02',
      title: '현장 실사',
      desc: '시스템 점검',
      icon: Search,
      color: 'from-blue-400 to-blue-600',
      details: ['시스템 구성 검토', '운영 현황 점검', '안전성 평가', '개선사항 파악'],
    },
    {
      step: '03',
      title: '시료 채취',
      desc: '무균 채취',
      icon: TestTube,
      color: 'from-green-400 to-green-600',
      details: ['멸균 용기 사용', '다단계 시료 채취', '온도 유지 운반', '채취 기록 보관'],
    },
    {
      step: '04',
      title: '분석 및 보고',
      desc: '결과 보고서',
      icon: BarChart,
      color: 'from-purple-400 to-purple-600',
      details: ['전문 분석 실시', '품질 검증', '공식 보고서 발급', '개선 권고안 제시'],
    },
  ];

  const requestDocuments = [
    {
      icon: ClipboardList,
      title: '혈액투석용수 검사 의뢰서',
      desc: '공식 의뢰서 양식 작성',
      required: true,
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Shield,
      title: '의료기관 허가증 사본',
      desc: '의료기관 운영 허가 확인',
      required: true,
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Wrench,
      title: '정수 시스템 사양서',
      desc: '시스템 설치 및 운영 정보',
      required: true,
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FileText,
      title: '유지보수 기록',
      desc: '최근 1년간 유지보수 내역',
      required: false,
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Stethoscope,
      title: '운영 현황 자료',
      desc: '환자 수 및 투석기 운영 정보',
      required: false,
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: BarChart,
      title: '이전 검사 성적서',
      desc: '최근 검사 결과 (해당시)',
      required: false,
      color: 'from-red-400 to-red-600',
    },
  ];

  const pricingPackages = [
    {
      name: '기본 검사 패키지',
      price: '300,000원 ~ 500,000원',
      desc: '필수 항목 중심 기본 검사',
      items: ['총세균수 및 내독소', '전기전도도 및 pH', '중금속 기본 검사', '시스템 성능 평가'],
      color: 'from-primary-400 to-primary-600',
      recommended: false,
    },
    {
      name: '종합 검사 패키지',
      price: '800,000원 ~ 1,200,000원',
      desc: '전 항목 포함 종합 안전성 검사',
      items: ['기본 패키지 포함', '모든 화학물질 분석', '미생물 종합 검사', '시스템 성능 상세 평가', '개선 권고안 보고서'],
      color: 'from-green-400 to-green-600',
      recommended: true,
    },
    {
      name: '긴급 검사',
      price: '기본 요금 + 50%',
      desc: '즉시 대응이 필요한 긴급 상황',
      items: ['24시간 내 검사 실시', '우선 처리 및 보고', '현장 즉시 조치 권고', '추가 사후 관리 지원'],
      color: 'from-red-400 to-red-600',
      recommended: false,
    },
  ];

  const aftercareServices = [
    {
      icon: FileText,
      title: '공식 보고서',
      desc: '의료기기법 기준 공식 성적서 발급',
      color: 'from-primary-400 to-primary-600',
      features: ['공식 인증서', '법적 효력', '보관용 파일', '디지털 인증'],
    },
    {
      icon: Wrench,
      title: '개선 권고',
      desc: '시스템 개선 방안 제시',
      color: 'from-blue-400 to-blue-600',
      features: ['상세 분석 결과', '개선 우선순위', '실행 계획안', '예상 비용 산정'],
    },
    {
      icon: Phone,
      title: '사후 지원',
      desc: '기술 지원 및 재검사 안내',
      color: 'from-green-400 to-green-600',
      features: ['전문가 상담', '기술 지원', '재검사 안내', '교육 프로그램'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              검사의뢰절차
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              혈액투석용수 검사를 의뢰하기 위한 단계별 안내
            </motion.p>
          </motion.div>

          {/* Procedure Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              >
                검사 의뢰 절차 개요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                환자 안전과 직결되는 만큼 엄격한 절차와 기준을 적용합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300 relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {step.desc}
                  </p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: detailIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Step 1: Request Submission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              >
                1단계: 검사 의뢰 접수
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6 shadow-medium"
                >
                  <Stethoscope className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  의료기관 담당자 확인
                </h3>

                <div className="space-y-4">
                  {[
                    '의료기관장 또는 위임장 확인',
                    '혈액투석실 운영 허가증 확인',
                    '의료기기 설치 및 관리 현황',
                    '환자 수 및 투석기 운영 대수',
                    '정수 시스템 사양 및 설치 일자',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 shadow-medium"
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  검사 의뢰서 작성
                </h3>

                <div className="space-y-4">
                  {[
                    '혈액투석용수 검사 의뢰서 양식 다운로드',
                    '시설 기본 정보 및 시스템 사양 기재',
                    '검사 희망 일정 및 연락처 정보 입력',
                    '필요 서류 첨부 (의료기관 허가증, 시스템 도면 등)',
                    '온라인 제출 또는 방문 접수',
                    '접수 확인 및 일정 협의',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      <span className="text-secondary-700 dark:text-secondary-300 text-sm">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              >
                필요 서류 및 수수료
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  필수 제출 서류
                </h3>

                <div className="space-y-4">
                  {requestDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${doc.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <doc.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200">
                            {doc.title}
                          </h4>
                          {doc.required && (
                            <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full">
                              필수
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {doc.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  수수료 안내
                </h3>

                <div className="space-y-6">
                  {pricingPackages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                        pkg.recommended
                          ? 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800 shadow-large'
                          : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 shadow-soft hover:shadow-large'
                      }`}
                    >
                      {pkg.recommended && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full font-semibold">
                          추천
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {pkg.name}
                        </h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {pkg.price}
                          </div>
                        </div>
                      </div>

                      <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                        {pkg.desc}
                      </p>

                      <div className="space-y-2">
                        {pkg.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-secondary-700 dark:text-secondary-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Aftercare Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-6xl mx-auto"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                검사 결과 및 사후 관리
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 검사 결과를 통해 안전한 혈액투석용수 공급을 보장합니다.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {aftercareServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      {service.desc}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-secondary-500">
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Download className="w-5 h-5 inline mr-2" />
                  의뢰서 양식 다운로드
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  상담 및 접수 문의
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DialysisRequest;