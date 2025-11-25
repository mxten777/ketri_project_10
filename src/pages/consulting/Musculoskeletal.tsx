import { motion } from 'framer-motion';
import { Users, AlertTriangle, Activity, Target, ClipboardList, BarChart3, Heart, Shield, CheckCircle, Zap, RotateCcw, TrendingUp } from 'lucide-react';

const Musculoskeletal = () => {
  const msdRisks = [
    {
      icon: Activity,
      title: '근육 긴장',
      desc: '지속적인 근육 사용으로 인한 피로 누적',
      color: 'from-red-400 to-red-600',
      stats: '주요 원인',
    },
    {
      icon: Target,
      title: '관절 부담',
      desc: '관절에 가해지는 과도한 하중',
      color: 'from-orange-400 to-orange-600',
      stats: '관절 손상',
    },
    {
      icon: RotateCcw,
      title: '반복 동작',
      desc: '지속적인 반복 작업으로 인한 마모',
      color: 'from-yellow-400 to-yellow-600',
      stats: '염좌 유발',
    },
    {
      icon: AlertTriangle,
      title: '불편한 자세',
      desc: '어색한 작업 자세로 인한 긴장',
      color: 'from-purple-400 to-purple-600',
      stats: '자세 교정',
    },
  ];

  const riskFactors = [
    {
      title: '물리적 부하 요인',
      items: ['무거운 물체 취급', '반복적인 동작', '불편한 작업 자세', '진동 및 충격', '장시간 서서 작업'],
      color: 'from-red-400 to-red-600',
    },
    {
      title: '작업 환경 요인',
      items: ['작업대 높이 부적합', '의자 및 도구 설계', '작업 공간 협소', '조명 및 온도 조건', '개인보호구 착용'],
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const investigationMethods = [
    {
      icon: ClipboardList,
      title: '설문조사 및 인터뷰',
      desc: '근로자의 증상 경험, 작업 강도, 피로도 등을 조사하여 주관적 부담도를 평가합니다.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: BarChart3,
      title: '작업 분석 및 측정',
      desc: '작업 동작을 세부적으로 분석하고, 자세, 힘, 빈도 등을 정량적으로 측정합니다.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Heart,
      title: '생체역학적 평가',
      desc: '근육 활동도, 관절 각도, 근력 등을 측정하여 생체역학적 부담을 평가합니다.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Shield,
      title: '리스크 평가 도구',
      desc: 'RULA, REBA, OWAS 등의 표준화된 평가 도구를 활용하여 위험도를 산정합니다.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: '사전 준비',
      desc: '조사 계획 수립 및 자료 수집',
      icon: Target,
      color: 'from-primary-400 to-primary-600',
    },
    {
      step: '02',
      title: '현장 조사',
      desc: '작업 관찰 및 측정 실시',
      icon: Activity,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: '03',
      title: '데이터 분석',
      desc: '결과 분석 및 위험도 평가',
      icon: BarChart3,
      color: 'from-green-400 to-green-600',
    },
    {
      step: '04',
      title: '개선 방안',
      desc: '실행 가능한 개선 대책 제시',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const improvementSolutions = [
    {
      title: '작업 환경 개선',
      items: ['작업대 높이 조정', '인체공학적 의자 도입', '자동화 장비 설치', '회전 근무제 도입'],
      icon: Shield,
      color: 'from-green-400 to-green-600',
    },
    {
      title: '근로자 교육',
      items: ['올바른 작업 자세 교육', '스트레칭 프로그램', '근력 강화 운동', '증상 조기 발견 교육'],
      icon: Users,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '개인보호구 및 도구',
      items: ['인체공학적 작업 도구', '쿠션 패드 및 받침대', '무게 분산 장비', '진동 흡수 장갑'],
      icon: Heart,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: '작업 방식 개선',
      items: ['작업 동작 재설계', '휴식 시간 확보', '팀 리프트 교육', '작업 속도 조절'],
      icon: Zap,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const benefits = [
    '근골격계 질환 예방',
    '작업 생산성 향상',
    '근로자 건강 보호',
    '의료비 및 보험료 절감',
    '기업 이미지 제고',
    '법적 준수 보장',
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
              <Users className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              근골격계 유해요인 조사
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              근골격계 질환 예방을 위한 체계적인 유해요인 평가 및 개선 방안 제시
            </motion.p>
          </motion.div>

          {/* MSD Overview */}
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
                근골격계 질환이란?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              >
                근육, 뼈, 관절, 인대, 신경 등 근골격계에 발생하는 질환으로 부적절한 작업 환경으로 인해 발생합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {msdRisks.map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${risk.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <risk.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                      {risk.desc}
                    </p>
                    <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {risk.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Risk Factors */}
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
                조사 대상 유해요인
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                근골격계 질환을 유발하는 다양한 물리적 및 환경적 요인을 체계적으로 평가합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {riskFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${factor.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {factor.title}
                  </h3>

                  <ul className="space-y-4">
                    {factor.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investigation Methods */}
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
                조사 방법 및 도구
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                과학적이고 체계적인 방법론을 통해 근골격계 부담을 정확하게 평가합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {investigationMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {method.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {method.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investigation Process */}
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
                조사 프로세스
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 전문적인 프로세스로 근골격계 유해요인을 정확하게 진단합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-medium mx-auto`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Improvement Solutions */}
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
                개선 방안 예시
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                다양한 개선 방안을 통해 근골격계 건강을 보호하고 작업 효율성을 높입니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {improvementSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${solution.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {solution.title}
                  </h3>

                  <ul className="space-y-3">
                    {solution.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
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
                <Heart className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                근골격계 조사 혜택
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 근골격계 유해요인 조사를 통해 근로자의 건강을 보호하고
                기업의 생산성과 경쟁력을 동시에 향상시킬 수 있습니다.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/50"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                      {benefit}
                    </span>
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
                  조사 의뢰하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  상담 문의
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Musculoskeletal;