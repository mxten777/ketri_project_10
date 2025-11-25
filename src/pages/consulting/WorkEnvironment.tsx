import { motion } from 'framer-motion';
import { Microscope, Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, BarChart3, Users, Award, Zap } from 'lucide-react';

const WorkEnvironment = () => {
  const features = [
    {
      icon: Microscope,
      title: '정밀 측정',
      desc: '최신 장비로 정확한 데이터 확보',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Shield,
      title: '법적 준수',
      desc: '산업안전보건법 준수 보고서 제공',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: TrendingUp,
      title: '비용 절감',
      desc: '산업안전보건관리비 인정',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const hazards = [
    {
      category: '화학물질',
      items: ['휘발성 유기화합물 (VOCs)', '중금속 (납, 카드뮴, 크롬 등)', '용제 및 화학약품', '분진 및 미세먼지'],
      icon: AlertTriangle,
      color: 'text-red-500',
    },
    {
      category: '물리적 요인',
      items: ['소음 및 진동', '조도 및 온습도', '전자파 및 레이저', '방사선'],
      icon: Zap,
      color: 'text-yellow-500',
    },
    {
      category: '생물학적 요인',
      items: ['세균 및 바이러스', '곰팡이 및 진균', '알레르기 유발 물질', '생물학적 독소'],
      icon: Users,
      color: 'text-green-500',
    },
  ];

  const pricing = [
    { item: '일반 화학물질', period: '6개월', price: '50,000원', color: 'bg-blue-50 dark:bg-blue-900/20' },
    { item: '특별 유해인자', period: '3개월', price: '80,000원', color: 'bg-green-50 dark:bg-green-900/20' },
    { item: '소음·진동', period: '1년', price: '30,000원', color: 'bg-purple-50 dark:bg-purple-900/20' },
    { item: '실내공기질', period: '1년', price: '40,000원', color: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  const process = [
    {
      step: '01',
      title: '상담 및 견적',
      desc: '현장 실사 및 측정 계획 수립',
      icon: Users,
    },
    {
      step: '02',
      title: '측정 실시',
      desc: '전문 인력이 현장 방문 측정',
      icon: Microscope,
    },
    {
      step: '03',
      title: '분석 및 보고',
      desc: '데이터 분석 및 보고서 작성',
      icon: BarChart3,
    },
    {
      step: '04',
      title: '개선 권고',
      desc: '개선 방안 제시 및 사후 관리',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    { icon: Award, title: '법적 의무 준수', desc: '산업안전보건법 요구사항 충족' },
    { icon: Shield, title: '근로자 건강 보호', desc: '유해인자 노출로부터 근로자 보호' },
    { icon: TrendingUp, title: '비용 절감 효과', desc: '산업안전보건관리비로 비용 절감' },
    { icon: CheckCircle, title: '품질 향상', desc: '작업환경 개선으로 생산성 향상' },
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
          className="max-w-6xl mx-auto"
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
              <Microscope className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              작업환경 측정
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              산업안전보건관리비로 인정되는 전문 작업환경 측정 서비스
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
                  안전한 작업환경을 위한
                  <span className="block text-primary-600 dark:text-primary-400">전문 측정 서비스</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  작업환경 측정은 산업현장에서 근로자가 노출되는 유해인자를 측정하여
                  작업장 내 유해·위험 요인을 파악하고 개선하는 데 목적이 있습니다.
                  산업안전보건관리비로 인정되어 비용 절감 효과도 있습니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">법적 준수</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/50 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">정확성 보장</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">비용 절감</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl shadow-medium`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">{feature.title}</h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Hazards */}
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
                측정 대상 유해인자
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                산업현장에서 발생하는 다양한 유해인자를 체계적으로 측정합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {hazards.map((hazard, index) => (
                <motion.div
                  key={hazard.category}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl"
                    >
                      <hazard.icon className={`w-6 h-6 ${hazard.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {hazard.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {hazard.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 text-secondary-600 dark:text-secondary-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
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
                측정 주기 및 비용
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                산업안전보건관리비로 인정되는 합리적인 가격
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 shadow-large"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricing.map((item, index) => (
                  <motion.div
                    key={item.item}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${item.color} rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300`}
                  >
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{item.item}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">측정 주기: {item.period}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{item.price}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800"
              >
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>참고:</strong> 실제 비용은 현장 조건, 측정 항목 수, 지역에 따라 변동될 수 있습니다.
                  상세 견적은 현장 실사를 통해 산출됩니다.
                </p>
              </motion.div>
            </motion.div>
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
                서비스 절차
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 전문적인 작업환경 측정 프로세스
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                작업환경 측정으로 얻을 수 있는 다양한 이점들
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
                작업환경 측정 서비스 문의
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                안전하고 건강한 작업환경을 위해 전문적인 측정 서비스를 받아보세요.
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

export default WorkEnvironment;