import { motion } from 'framer-motion';
import { Wind, Shield, TrendingUp, MapPin, Building, Wrench, FileText, Calculator, Activity } from 'lucide-react';

const AsbestosDispersion = () => {
  const serviceOverview = [
    {
      icon: Wind,
      title: '비산 위험 평가',
      desc: '석면 섬유의 공기 중 비산 정도를 정밀하게 측정',
      color: 'from-blue-400 to-blue-600',
      details: ['실시간 모니터링', '비산 예측 모델링', '위험도 등급화', '대응 방안 제시'],
    },
    {
      icon: Shield,
      title: '안전 관리',
      desc: '작업 중 석면 비산을 최소화하는 안전 프로토콜',
      color: 'from-red-400 to-red-600',
      details: ['방진 마스크 착용', '음압 작업 환경', '비산 방지 장치', '정기 모니터링'],
    },
    {
      icon: Activity,
      title: '동적 분석',
      desc: '작업 과정별 비산 변화를 실시간으로 분석',
      color: 'from-green-400 to-green-600',
      details: ['연속 측정 시스템', '데이터 로깅', '패턴 분석', '예측 모델링'],
    },
    {
      icon: TrendingUp,
      title: '효율성 최적화',
      desc: '비산 최소화를 위한 최적 작업 조건 도출',
      color: 'from-purple-400 to-purple-600',
      details: ['작업 속도 조절', '장비 효율화', '인력 배치 최적화', '비용 절감'],
    },
  ];

  const measurementMethods = [
    {
      method: '개인 공기 샘플링 (PAS)',
      description: '작업자의 호흡대 주변 공기를 샘플링하여 노출 농도를 측정',
      advantages: ['개인별 노출 평가', '실제 작업 환경 반영', '법적 증거 자료'],
      icon: '👤',
      color: 'from-blue-400 to-blue-600',
      duration: '8시간',
    },
    {
      method: '정역 공기 샘플링 (SAS)',
      description: '작업 구역 내 고정된 지점에서 공기를 연속 샘플링',
      advantages: ['구역별 농도 분포', '장기간 모니터링', '추이 분석 가능'],
      icon: '📍',
      color: 'from-green-400 to-green-600',
      duration: '연속',
    },
    {
      method: '표면 와이핑 샘플링',
      description: '작업 표면의 석면 잔류물을 와이핑하여 비산 가능성을 평가',
      advantages: ['잔류 오염도 측정', '청소 효과 검증', '재비산 위험 평가'],
      icon: '🧽',
      color: 'from-orange-400 to-orange-600',
      duration: '즉시',
    },
    {
      method: '공기 중 섬유 계수',
      description: '공기 중 부유하는 석면 섬유를 직접 계수하여 농도를 측정',
      advantages: ['실시간 결과', '정확한 농도', '즉각적 대응 가능'],
      icon: '🔬',
      color: 'from-purple-400 to-purple-600',
      duration: '실시간',
    },
  ];

  const dispersionRiskLevels = [
    {
      level: '안전',
      range: '0 - 0.005 섬유/cm³',
      description: '비산 위험이 거의 없음',
      color: 'from-green-400 to-green-600',
      actions: ['정상 작업 유지', '기본 예방 조치', '정기 모니터링'],
      icon: '✅',
    },
    {
      level: '주의',
      range: '0.005 - 0.01 섬유/cm³',
      description: '비산 위험이 낮음',
      color: 'from-yellow-400 to-yellow-600',
      actions: ['방진 마스크 착용', '환기 강화', '작업 속도 조절'],
      icon: '⚠️',
    },
    {
      level: '경고',
      range: '0.01 - 0.1 섬유/cm³',
      description: '비산 위험이 높음',
      color: 'from-orange-400 to-orange-600',
      actions: ['작업 중단 고려', '전문가 상담', '안전 조치 강화'],
      icon: '🚨',
    },
    {
      level: '위험',
      range: '0.1 섬유/cm³ 이상',
      description: '즉각적 조치 필요',
      color: 'from-red-400 to-red-600',
      actions: ['작업 즉시 중단', '대피 조치', '전문가 긴급 투입'],
      icon: '⛔',
    },
  ];

  const applicationFields = [
    {
      field: '건축물 해체',
      description: '석면 함유 자재 해체 시 비산 모니터링',
      icon: Building,
      color: 'from-blue-400 to-blue-600',
      risks: ['대량 비산 가능', '인근 지역 영향', '장기간 작업'],
    },
    {
      field: '리모델링 작업',
      description: '내부 공사 시 석면 비산 관리',
      icon: Wrench,
      color: 'from-green-400 to-green-600',
      risks: ['제한된 공간', '주변 영향', '단기 집중'],
    },
    {
      field: '유지보수 작업',
      description: '석면 자재 보수 시 비산 측정',
      icon: Shield,
      color: 'from-orange-400 to-orange-600',
      risks: ['예상치 못한 비산', '부분적 영향', '간헐적 작업'],
    },
    {
      field: '환경 모니터링',
      description: '주변 환경 영향 평가',
      icon: MapPin,
      color: 'from-purple-400 to-purple-600',
      risks: ['광범위한 영향', '지속적 모니터링', '법적 규제'],
    },
  ];

  const analysisProcess = [
    {
      step: 1,
      title: '사전 평가',
      desc: '작업 현장 및 석면 함유 물질 사전 조사',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '샘플링 계획',
      desc: '측정 지점 및 방법 결정',
      icon: MapPin,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 3,
      title: '실시간 모니터링',
      desc: '작업 중 연속적인 비산 측정',
      icon: Activity,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: 4,
      title: '분석 및 보고',
      desc: '결과 분석 및 안전 대책 제시',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
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
              석면비산정도측정
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              석면 섬유의 공기 중 비산 정도를 실시간으로 모니터링하는 전문 서비스
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

          {/* Risk Levels */}
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
                비산 위험도 분류
              </motion.h2>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {dispersionRiskLevels.map((level, index) => (
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
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{level.icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {level.level} 단계
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {level.range}
                        </p>
                      </div>
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {level.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">필요 조치:</span>
                      {level.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-secondary-600 dark:text-secondary-400">{action}</span>
                        </div>
                      ))}
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
                        {field.risks.map((risk, riskIndex) => (
                          <span key={riskIndex} className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                            {risk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Analysis Process */}
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
                분석 프로세스
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {analysisProcess.map((step, index) => (
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
                실시간 석면비산 모니터링 서비스
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                작업 중 석면 비산을 실시간으로 모니터링하여 안전한 작업 환경을 보장합니다
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
                  모니터링 의뢰
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

export default AsbestosDispersion;