import { motion } from 'framer-motion';
import { FileText, BarChart3, Target, CheckCircle, Users, Award, Shield, TrendingUp, BookOpen } from 'lucide-react';

const ConsultingResults = () => {
  const reportFeatures = [
    {
      icon: BarChart3,
      title: '데이터 기반',
      desc: '객관적 측정 결과',
      color: 'from-blue-400 to-blue-600',
      stats: '100% 객관성',
    },
    {
      icon: Target,
      title: '실행 가능',
      desc: '구체적 개선 방안',
      color: 'from-green-400 to-green-600',
      stats: '실행률 95%',
    },
    {
      icon: Shield,
      title: '법적 효력',
      desc: '산업안전보건법 준수',
      color: 'from-purple-400 to-purple-600',
      stats: '공식 인정',
    },
  ];

  const reportComponents = [
    {
      step: '01',
      title: '현장 조사 개요',
      desc: '조사 대상 사업장 현황, 조사 기간, 조사 방법, 조사 참여자 등의 기본 정보',
      icon: FileText,
      color: 'from-primary-400 to-primary-600',
    },
    {
      step: '02',
      title: '작업환경 측정 결과',
      desc: '유해인자별 측정 값, 노출 수준 평가, 법적 기준 비교 분석',
      icon: BarChart3,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: '03',
      title: '위험성 평가 결과',
      desc: '식별된 위험 요인, 위험도 평가, 우선순위 설정',
      icon: Target,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      step: '04',
      title: '근골격계 유해요인 조사 결과',
      desc: '작업 분석 결과, 부담도 평가, 개선 우선 작업 선정',
      icon: Users,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: '05',
      title: '개선 권고사항',
      desc: '단기 및 중장기 개선 방안, 실행 계획, 예상 효과',
      icon: TrendingUp,
      color: 'from-green-400 to-green-600',
    },
    {
      step: '06',
      title: '결론 및 권고사항',
      desc: '종합 평가 결과, 향후 관리 방안, 지속적 개선 권고',
      icon: CheckCircle,
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: '데이터 수집',
      desc: '현장 조사 및 측정 데이터 체계적 정리',
      icon: FileText,
      color: 'from-primary-400 to-primary-600',
    },
    {
      step: '02',
      title: '분석 및 평가',
      desc: '데이터 분석 및 과학적 위험도 평가',
      icon: BarChart3,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: '03',
      title: '보고서 작성',
      desc: '전문가 검토를 통한 체계적 보고서 작성',
      icon: BookOpen,
      color: 'from-green-400 to-green-600',
    },
    {
      step: '04',
      title: '최종 보고',
      desc: '고객사 전달 및 상세한 결과 설명',
      icon: CheckCircle,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const usageMethods = [
    {
      title: '산업안전보건관리비 증명',
      desc: '산업안전보건관리비 지출 증명서 발급에 활용',
      icon: Award,
      color: 'from-green-400 to-green-600',
    },
    {
      title: '안전관리 계획 수립',
      desc: '연간 안전관리 계획 및 예산 수립의 기초 자료',
      icon: Target,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '외부 기관 보고',
      desc: '노동부, 보험사 등 외부 기관 보고용 자료',
      icon: Shield,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: '내부 교육 자료',
      desc: '근로자 안전 교육 및 관리자 교육 자료로 활용',
      icon: Users,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const qualityAssurance = [
    {
      icon: Award,
      title: '전문성',
      desc: '산업안전보건 전문가 작성',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: BarChart3,
      title: '객관성',
      desc: '표준화된 방법론 적용',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: CheckCircle,
      title: '신뢰성',
      desc: '품질 검토 및 승인 절차',
      color: 'from-green-400 to-green-600',
    },
  ];

  const benefits = [
    '산업안전보건관리비 공제 혜택',
    '법적 준수 증명',
    '안전관리 계획 수립 지원',
    '근로자 건강 보호',
    '기업 리스크 관리',
    '지속적 개선 체계 구축',
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
              컨설팅 결과 보고서
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              산업보건컨설팅 결과를 체계적으로 정리한 종합 보고서
            </motion.p>
          </motion.div>

          {/* Overview Section */}
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
                보고서 개요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              >
                현장 조사 결과를 바탕으로 문제점 분석, 개선 방안 제시, 실행 계획 수립 등을 종합적으로 정리한 문서입니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {reportFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                      {feature.desc}
                    </p>
                    <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {feature.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Report Components */}
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
                보고서 구성 요소
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 종합적인 분석 결과를 6가지 주요 구성 요소로 정리합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reportComponents.map((component, index) => (
                <motion.div
                  key={component.step}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${component.color} rounded-xl shadow-medium`}
                    >
                      <component.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {component.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {component.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {component.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Writing Process */}
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
                보고서 작성 프로세스
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                전문적이고 체계적인 프로세스로 고품질 보고서를 작성합니다
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

          {/* Usage Methods */}
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
                보고서 활용 방법
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                다양한 분야에서 실질적인 가치를 발휘하는 종합 보고서입니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {usageMethods.map((method, index) => (
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
                보고서 품질 보증
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                전문성, 객관성, 신뢰성을 바탕으로 한 최고 품질의 보고서를 제공합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {qualityAssurance.map((qa, index) => (
                  <motion.div
                    key={qa.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${qa.color} rounded-xl mb-6 shadow-medium`}
                    >
                      <qa.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {qa.title}
                    </h3>

                    <p className="text-secondary-600 dark:text-secondary-400">
                      {qa.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                <Award className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                보고서 활용 혜택
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                산업보건컨설팅 결과 보고서는 기업의 안전관리와 법적 준수를 위한 필수 문서입니다.
                다양한 분야에서 실질적인 가치를 창출합니다.
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
                  컨설팅 의뢰하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  샘플 보고서 보기
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConsultingResults;