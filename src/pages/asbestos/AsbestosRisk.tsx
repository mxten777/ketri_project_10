import { motion } from 'framer-motion';
import { AlertTriangle, Search, Calculator, FileText, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

const AsbestosRisk = () => {
  const serviceOverview = [
    {
      icon: AlertTriangle,
      title: '위해성 종합 평가',
      desc: '건축물 내 석면의 위해성을 과학적으로 평가',
      color: 'from-red-400 to-red-600',
      details: ['위해성 등급 분류', '노출 위험도 분석', '건강 영향 평가', '관리 우선순위'],
    },
    {
      icon: Search,
      title: '전문 현장 조사',
      desc: '숙련된 전문가가 현장을 철저히 조사',
      color: 'from-blue-400 to-blue-600',
      details: ['시각적 검사', '물질 샘플링', '상태 평가', '위치 파악'],
    },
    {
      icon: Calculator,
      title: '정량적 위험 분석',
      desc: '데이터 기반의 정량적 위해성 계산',
      color: 'from-green-400 to-green-600',
      details: ['농도 측정', '노출량 계산', '위험도 모델링', '통계적 분석'],
    },
    {
      icon: FileText,
      title: '상세 평가 보고서',
      desc: '종합적인 평가 결과 및 관리 방안 제시',
      color: 'from-purple-400 to-purple-600',
      details: ['평가 결과 요약', '관리 권고사항', '비용 분석', '우선순위 제안'],
    },
  ];

  const evaluationMethodology = [
    {
      method: '현장 시각 조사',
      description: '석면 함유 자재의 위치, 상태, 접근성을 육안으로 조사',
      icon: '👁️',
      color: 'from-blue-400 to-blue-600',
      tools: ['확대경', '측정 도구', '사진 촬영', '위치 표시'],
    },
    {
      method: '샘플링 및 분석',
      description: '의심되는 자재에서 샘플을 채취하여 실험실 분석',
      icon: '🧪',
      color: 'from-green-400 to-green-600',
      tools: ['샘플링 도구', '편광 현미경', 'X선 회절 분석', '화학 분석'],
    },
    {
      method: '위해성 등급화',
      description: '석면 종류, 농도, 노출 가능성에 따른 위해성 등급 부여',
      icon: '📊',
      color: 'from-orange-400 to-orange-600',
      tools: ['위험도 매트릭스', '점수화 시스템', '통계 모델', '전문가 판단'],
    },
    {
      method: '관리 방안 수립',
      description: '평가 결과에 따른 최적의 관리 및 제거 방안 제시',
      icon: '🎯',
      color: 'from-purple-400 to-purple-600',
      tools: ['비용 분석', '우선순위 설정', '대안 평가', '실행 계획'],
    },
  ];

  const riskLevels = [
    {
      level: '매우 낮음',
      range: '위해성 지수 0-20',
      description: '건강 위험도가 매우 낮음',
      color: 'from-green-400 to-green-600',
      actions: ['정기 모니터링', '기본 유지관리', '교육 실시'],
      icon: '🟢',
      priority: '낮음',
    },
    {
      level: '낮음',
      range: '위해성 지수 21-40',
      description: '건강 위험도가 낮음',
      color: 'from-blue-400 to-blue-600',
      actions: ['연간 점검', '노출 최소화', '작업자 교육'],
      icon: '🔵',
      priority: '중간',
    },
    {
      level: '중간',
      range: '위해성 지수 41-60',
      description: '건강 위험도가 중간 수준',
      color: 'from-yellow-400 to-yellow-600',
      actions: ['분기별 점검', '제거 고려', '안전 조치 강화'],
      icon: '🟡',
      priority: '높음',
    },
    {
      level: '높음',
      range: '위해성 지수 61-80',
      description: '건강 위험도가 높음',
      color: 'from-orange-400 to-orange-600',
      actions: ['즉각적 제거', '작업 중단', '전문가 상담'],
      icon: '🟠',
      priority: '매우 높음',
    },
    {
      level: '매우 높음',
      range: '위해성 지수 81-100',
      description: '건강 위험도가 매우 높음',
      color: 'from-red-400 to-red-600',
      actions: ['즉시 격리', '긴급 제거', '법적 조치'],
      icon: '🔴',
      priority: '최우선',
    },
  ];

  const evaluationFactors = [
    {
      factor: '석면 종류',
      weight: '30%',
      description: '크로시돌라이트 등 고위험 석면의 비율',
      icon: '🧬',
      color: 'from-red-400 to-red-600',
    },
    {
      factor: '함유량',
      weight: '25%',
      description: '석면의 총 함유량 및 농도',
      icon: '📏',
      color: 'from-orange-400 to-orange-600',
    },
    {
      factor: '자재 상태',
      weight: '20%',
      description: '석면 자재의 손상 및 노후화 정도',
      icon: '🔍',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      factor: '노출 가능성',
      weight: '15%',
      description: '인체 노출 가능성 및 빈도',
      icon: '👥',
      color: 'from-blue-400 to-blue-600',
    },
    {
      factor: '위치 및 환경',
      weight: '10%',
      description: '설치 위치 및 주변 환경 영향',
      icon: '🏢',
      color: 'from-green-400 to-green-600',
    },
  ];

  const evaluationProcess = [
    {
      step: 1,
      title: '사전 준비',
      desc: '평가 대상 및 범위 결정, 자료 수집',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '현장 조사',
      desc: '건축물 내 석면 함유 자재 종합 조사',
      icon: Search,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 3,
      title: '샘플링',
      desc: '필요 시료 채취 및 분석 준비',
      icon: Calculator,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: 4,
      title: '실험실 분석',
      desc: '샘플의 석면 종류 및 농도 분석',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 5,
      title: '위해성 평가',
      desc: '분석 결과를 바탕으로 종합 위해성 평가',
      icon: BarChart3,
      color: 'from-red-400 to-red-600',
    },
    {
      step: 6,
      title: '보고서 작성',
      desc: '평가 결과 및 관리 방안 보고서 작성',
      icon: CheckCircle,
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const reportContents = [
    {
      section: '실행 개요',
      items: ['평가 목적 및 범위', '평가 방법론', '사용 장비 및 도구'],
      icon: '📋',
    },
    {
      section: '조사 결과',
      items: ['석면 함유 자재 현황', '위치별 분포도', '상태 평가 결과'],
      icon: '🔍',
    },
    {
      section: '분석 결과',
      items: ['석면 종류 및 농도', '위해성 등급 분류', '위험도 평가'],
      icon: '📊',
    },
    {
      section: '관리 방안',
      items: ['우선순위별 조치 계획', '비용 분석', '시행 일정', '모니터링 방안'],
      icon: '🎯',
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
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              석면건축물 위해성평가
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              건축물 내 석면의 위해성을 과학적이고 종합적으로 평가하는 전문 서비스
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

          {/* Evaluation Methodology */}
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
                평가 방법론
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {evaluationMethodology.map((method, index) => (
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

                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2 block">사용 도구 및 장비</span>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
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
                위해성 등급 분류
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
                {riskLevels.map((level, index) => (
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
                          {level.level}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {level.range}
                        </p>
                      </div>
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-400 mb-4 text-sm">
                      {level.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-secondary-700 dark:text-secondary-300">관리 우선순위:</span>
                        <span className={`font-semibold ${level.priority === '최우선' ? 'text-red-600 dark:text-red-400' : level.priority === '매우 높음' ? 'text-orange-600 dark:text-orange-400' : level.priority === '높음' ? 'text-yellow-600 dark:text-yellow-400' : 'text-green-600 dark:text-green-400'}`}>
                          {level.priority}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2 block">필요 조치:</span>
                        <div className="flex flex-wrap gap-1">
                          {level.actions.map((action, actionIndex) => (
                            <span key={actionIndex} className="text-xs bg-gray-100 dark:bg-gray-700 text-secondary-600 dark:text-secondary-400 px-2 py-1 rounded">
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Evaluation Factors */}
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
                평가 요소 및 가중치
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {evaluationFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${factor.color} rounded-xl shadow-medium`}
                    >
                      <span className="text-xl">{factor.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {factor.factor}
                      </h3>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {factor.weight}
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {factor.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Evaluation Process */}
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
                평가 프로세스
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {evaluationProcess.map((step, index) => (
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

          {/* Report Contents */}
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
                보고서 내용
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {reportContents.map((section, index) => (
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
                      <span className="text-xl">{section.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {section.section}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {item}
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
                <BarChart3 className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                전문 석면 위해성 평가 서비스
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                과학적 방법론을 바탕으로 건축물 내 석면의 위해성을 정확하게 평가하여 안전한 관리 방안을 제시합니다
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
                  평가 의뢰하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  샘플 보고서
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AsbestosRisk;