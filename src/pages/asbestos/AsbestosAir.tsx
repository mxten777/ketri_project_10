import { motion } from 'framer-motion';
import { Wind, TestTube, Shield, TrendingUp, Building, Users, Activity, FileText, Calculator, CheckCircle } from 'lucide-react';

const AsbestosAir = () => {
  const serviceOverview = [
    {
      icon: Wind,
      title: '실내 공기질 모니터링',
      desc: '건축물 내 공기 중 석면 섬유 농도를 실시간 측정',
      color: 'from-blue-400 to-blue-600',
      details: ['연속 측정 시스템', '실시간 데이터', '경보 시스템', '추이 분석'],
    },
    {
      icon: TestTube,
      title: '정밀 분석',
      desc: '고감도 분석 장비로 미세한 석면 섬유까지 검출',
      color: 'from-green-400 to-green-600',
      details: ['전자현미경 분석', '섬유 계수', '종류 식별', '농도 계산'],
    },
    {
      icon: Shield,
      title: '안전 기준 준수',
      desc: '국제 및 국내 안전 기준에 따른 평가 및 보고',
      color: 'from-red-400 to-red-600',
      details: ['법적 기준 준수', '건강 영향 평가', '관리 방안 제시', '법적 보고'],
    },
    {
      icon: TrendingUp,
      title: '데이터 기반 의사결정',
      desc: '장기적인 측정 데이터를 통한 과학적 관리 방안 수립',
      color: 'from-purple-400 to-purple-600',
      details: ['데이터 축적', '추이 분석', '예측 모델링', '최적화 전략'],
    },
  ];

  const measurementMethods = [
    {
      method: '개인 공기 샘플링 (PAS)',
      description: '작업자 호흡대 주변 공기를 개인별로 샘플링하여 노출 농도 측정',
      advantages: ['개인별 노출 평가', '실제 작업 환경 반영', '법적 증거 자료'],
      icon: '👤',
      color: 'from-blue-400 to-blue-600',
      duration: '8시간',
      accuracy: '95%',
    },
    {
      method: '역학 공기 샘플링 (AES)',
      description: '작업 구역 내 고정된 지점에서 공기를 샘플링하여 구역별 농도 측정',
      advantages: ['구역별 농도 분포', '장기간 모니터링', '추이 분석 가능'],
      icon: '📍',
      color: 'from-green-400 to-green-600',
      duration: '연속',
      accuracy: '92%',
    },
    {
      method: '외부 공기 샘플링',
      description: '건축물 외부 공기를 기준으로 측정하여 내부 농도와 비교 분석',
      advantages: ['배경 농도 파악', '오염원 식별', '필터 효율 평가'],
      icon: '🌬️',
      color: 'from-orange-400 to-orange-600',
      duration: '24시간',
      accuracy: '90%',
    },
    {
      method: '실시간 모니터링',
      description: '연속적인 공기 샘플링으로 실시간 농도 모니터링 및 경보 시스템',
      advantages: ['즉각적 대응', '연속 데이터', '자동 경보', '예방 관리'],
      icon: '📊',
      color: 'from-purple-400 to-purple-600',
      duration: '실시간',
      accuracy: '88%',
    },
  ];

  const airQualityStandards = [
    {
      standard: '실내공기질 관리법',
      limit: '0.01 섬유/cm³ (8시간 TWA)',
      description: '일반 실내 환경 노출 기준',
      icon: '🏢',
      color: 'from-blue-400 to-blue-600',
      category: '일반',
    },
    {
      standard: '산업안전보건법',
      limit: '0.1 섬유/cm³ (8시간 TWA)',
      description: '작업장 환경 노출 기준',
      icon: '🏭',
      color: 'from-orange-400 to-orange-600',
      category: '산업',
    },
    {
      standard: '학교보건법',
      limit: '0.005 섬유/cm³ (24시간)',
      description: '교육 시설 특별 기준',
      icon: '🏫',
      color: 'from-green-400 to-green-600',
      category: '교육',
    },
    {
      standard: '의료법',
      limit: '0.002 섬유/cm³ (24시간)',
      description: '의료 시설 엄격 기준',
      icon: '🏥',
      color: 'from-red-400 to-red-600',
      category: '의료',
    },
    {
      standard: 'WHO 권고치',
      limit: '0.0001 섬유/cm³ (연간 평균)',
      description: '세계보건기구 건강 영향 최소화 기준',
      icon: '🌍',
      color: 'from-purple-400 to-purple-600',
      category: '국제',
    },
  ];

  const applicationFields = [
    {
      field: '사무실 및 상업시설',
      description: '일반 업무 공간의 공기질 모니터링',
      icon: Building,
      color: 'from-blue-400 to-blue-600',
      concerns: ['장기 노출', '직원 건강', '생산성 영향'],
    },
    {
      field: '교육 시설',
      description: '학교 및 교육기관의 특별 관리',
      icon: Users,
      color: 'from-green-400 to-green-600',
      concerns: ['학생 건강', '학습 환경', '법적 의무'],
    },
    {
      field: '의료 시설',
      description: '병원 및 의료기관의 엄격한 기준 준수',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      concerns: ['환자 안전', '면역 저하자', '감염 위험'],
    },
    {
      field: '산업 시설',
      description: '작업장 공기질 모니터링 및 관리',
      icon: Activity,
      color: 'from-orange-400 to-orange-600',
      concerns: ['작업자 건강', '안전 규정', '보험 적용'],
    },
  ];

  const measurementProcess = [
    {
      step: 1,
      title: '측정 계획 수립',
      desc: '측정 대상, 기간, 지점 선정 및 방법 결정',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '장비 설치 및 검증',
      desc: '샘플링 장비 설치 및 성능 검증',
      icon: TestTube,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 3,
      title: '샘플링 실행',
      desc: '계획된 기간 동안 공기 샘플링 실시',
      icon: Wind,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: 4,
      title: '실험실 분석',
      desc: '샘플의 석면 섬유 농도 및 종류 분석',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 5,
      title: '결과 평가 및 보고',
      desc: '안전 기준 비교 및 종합 평가 보고서 작성',
      icon: CheckCircle,
      color: 'from-red-400 to-red-600',
    },
  ];

  const qualityAssurance = [
    {
      aspect: '장비 검증',
      description: '모든 측정 장비의 정기 검증 및 교정',
      icon: '🔧',
      measures: ['ISO 인증 장비', '정기 교정', '성능 검증', '추적성 확보'],
    },
    {
      aspect: '분석 정확도',
      description: '표준 물질을 이용한 분석 방법 검증',
      icon: '🎯',
      measures: ['표준 시료 사용', '교차 검증', '정밀도 평가', '불확도 측정'],
    },
    {
      aspect: '품질 관리',
      description: '전체 프로세스의 품질 관리 체계 운영',
      icon: '✅',
      measures: ['표준 운영 절차', '내부 품질 관리', '외부 검증', '지속적 개선'],
    },
    {
      aspect: '데이터 신뢰성',
      description: '측정 데이터의 신뢰성 및 추적성 확보',
      icon: '📈',
      measures: ['원본 데이터 보존', '전자 기록', '감사 추적', '백업 시스템'],
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
              <Wind className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              석면건축물 공기질측정
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              건축물 내 공기 중 석면 섬유 농도를 정밀하게 측정하여 실내 공기질 안전을 보장하는 서비스
            </motion.p>
          </motion.div>

          {/* Service Overview */}
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
                서비스 특징
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {serviceOverview.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
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

          {/* Measurement Methods */}
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
                측정 방법
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {measurementMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {method.method}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">측정 시간</span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{method.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">정확도</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{method.accuracy}</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2 block">장점</span>
                      <div className="flex flex-wrap gap-2">
                        {method.advantages.map((advantage, advIndex) => (
                          <span key={advIndex} className="text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                            {advantage}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Air Quality Standards */}
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
                공기질 안전 기준
              </motion.h2>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {airQualityStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${standard.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{standard.icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {standard.standard}
                        </h3>
                        <span className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                          {standard.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-400 mb-4 text-sm">
                      {standard.description}
                    </p>

                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">노출 기준: </span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{standard.limit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Application Fields */}
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
                적용 분야
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {applicationFields.map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${field.color} rounded-xl shadow-medium`}
                    >
                      <field.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {field.field}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {field.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <span className="text-sm font-medium text-red-700 dark:text-red-300 mb-2 block">특별 관리 사항</span>
                      <div className="flex flex-wrap gap-2">
                        {field.concerns.map((concern, concernIndex) => (
                          <span key={concernIndex} className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                            {concern}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Measurement Process */}
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
                측정 프로세스
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {measurementProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-medium">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Assurance */}
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
                품질 관리 체계
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {qualityAssurance.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium"
                    >
                      <span className="text-xl">{aspect.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {aspect.aspect}
                    </h3>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {aspect.description}
                  </p>

                  <div className="space-y-3">
                    {aspect.measures.map((measure, measureIndex) => (
                      <motion.div
                        key={measureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: measureIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {measure}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
              >
                <Wind className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                전문 공기질 측정 서비스
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                최첨단 측정 장비와 전문 분석 기술로 건축물 내 공기 중 석면 농도를 정확하게 측정합니다
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Calculator className="w-5 h-5 inline mr-2" />
                  측정 의뢰하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Activity className="w-5 h-5 inline mr-2" />
                  실시간 모니터링
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AsbestosAir;