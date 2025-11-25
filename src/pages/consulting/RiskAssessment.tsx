import { motion } from 'framer-motion';
import { AlertTriangle, BarChart3, Shield, CheckCircle, Target, Users, TrendingDown, Award, Zap, Eye, ClipboardList, Settings } from 'lucide-react';

const RiskAssessment = () => {
  const riskCategories = [
    {
      title: '물리적 위험',
      icon: Zap,
      color: 'from-red-400 to-red-600',
      risks: ['추락 및 낙하 위험', '전기 위험', '소음 및 진동', '온도 및 압력 이상', '방사선 및 전자파'],
    },
    {
      title: '화학적 위험',
      icon: AlertTriangle,
      color: 'from-orange-400 to-orange-600',
      risks: ['유해 화학물질 노출', '폭발 및 화재 위험', '산소 결핍', '부식성 물질', '독성 가스'],
    },
    {
      title: '생물학적 위험',
      icon: Users,
      color: 'from-green-400 to-green-600',
      risks: ['병원체 및 바이러스', '곰팡이 및 세균', '동물 매개 질병', '생물학적 오염'],
    },
    {
      title: '인간공학적 위험',
      icon: Target,
      color: 'from-purple-400 to-purple-600',
      risks: ['부적절한 자세', '과도한 힘 사용', '반복 동작', '진동 및 충격', '작업 공간 설계'],
    },
  ];

  const methodologies = [
    {
      title: '기본적 위험성 평가',
      desc: '작업장 내 위험 요인을 직관적으로 식별하고 평가하는 기본적인 방법입니다. 모든 사업장에서 의무적으로 실시해야 합니다.',
      color: 'from-primary-400 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
      icon: Eye,
    },
    {
      title: '세부 위험성 평가',
      desc: '정량적 분석을 통해 위험의 심각성과 발생 가능성을 수치화하여 평가합니다. 고위험 사업장이나 특정 유해 요인이 있는 경우 실시합니다.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      icon: BarChart3,
    },
    {
      title: '작업조건 위험성 평가',
      desc: '근골격계 부담 작업, 건강장해 유해인자, 정신적 스트레스 등을 종합적으로 평가합니다.',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      icon: Settings,
    },
  ];

  const process = [
    { step: '01', title: '준비', desc: '평가 계획 수립 및 팀 구성', icon: ClipboardList },
    { step: '02', title: '위험 식별', desc: '현장 조사 및 위험 요인 파악', icon: Eye },
    { step: '03', title: '위험 평가', desc: '심각도 및 가능성 분석', icon: BarChart3 },
    { step: '04', title: '대책 수립', desc: '개선 방안 및 우선순위 설정', icon: Settings },
    { step: '05', title: '모니터링', desc: '실행 및 효과 평가', icon: CheckCircle },
  ];

  const benefits = [
    { icon: TrendingDown, title: '재해율 감소', desc: '산업재해 발생률 최대 70% 감소' },
    { icon: Award, title: '법적 준수', desc: '산업안전보건법 완전 준수' },
    { icon: Shield, title: '보험 혜택', desc: '보험료 할인 및 안전 등급 향상' },
    { icon: CheckCircle, title: '품질 향상', desc: '생산성 및 제품 품질 개선' },
  ];

  const stats = [
    { value: '70%', label: '재해율 감소', desc: '평균 산업재해 감소율' },
    { value: '50%', label: '비용 절감', desc: '안전관리 비용 절감 효과' },
    { value: '95%', label: '준수율 향상', desc: '법적 요구사항 준수율' },
    { value: '85%', label: '만족도', desc: '근로자 안전 만족도' },
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              위험성 평가
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              체계적인 위험성 평가로 산업재해 예방 및 안전관리 수준 향상
            </motion.p>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8 lg:p-12 mb-16 shadow-large"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  위험성 평가란?
                  <span className="block text-primary-600 dark:text-primary-400">안전관리의 핵심</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  위험성 평가는 작업장에서 발생할 수 있는 위험 요인을 식별하고,
                  그 위험의 심각성과 발생 가능성을 평가하여 우선순위를 정하고
                  개선 대책을 수립하는 체계적인 프로세스입니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/50 rounded-full"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">위험 식별</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/50 rounded-full"
                  >
                    <BarChart3 className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-700 dark:text-orange-300">리스크 평가</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/50 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">개선 대책</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
                    <div className="text-xs text-secondary-600 dark:text-secondary-400">{stat.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Risk Categories */}
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
                위험성 평가 대상
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                산업현장에서 발생하는 다양한 위험 요인을 체계적으로 평가합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riskCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl shadow-medium`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.risks.map((risk, riskIndex) => (
                      <motion.li
                        key={riskIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + riskIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 text-secondary-600 dark:text-secondary-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {risk}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Methodologies */}
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                상황에 맞는 최적의 평가 방법을 선택하여 정확한 위험성 평가를 실시합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${method.bgColor} p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-6 shadow-medium`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {method.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {method.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
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
                위험성 평가 프로세스
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 과학적인 5단계 평가 프로세스로 정확한 결과를 도출합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: 'spring' }}
                      className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-glow"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
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
                기대 효과
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                위험성 평가로 얻을 수 있는 다양한 이점과 효과들
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl mb-4 shadow-medium mx-auto"
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                위험성 평가 서비스 문의
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                안전하고 건강한 작업환경을 위해 전문적인 위험성 평가를 받아보세요.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
              >
                무료 상담 신청하기
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RiskAssessment;