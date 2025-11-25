import { motion } from 'framer-motion';
import { FlaskConical, AlertTriangle, Shield, CheckCircle, FileText, Users, TrendingUp, Target } from 'lucide-react';

const ChemicalManagement = () => {
  const chemicalRisks = [
    {
      icon: AlertTriangle,
      title: '건강 위험',
      desc: '호흡기·피부 질환 유발',
      color: 'from-red-400 to-red-600',
      stats: '60% 사고 원인',
    },
    {
      icon: FlaskConical,
      title: '화재·폭발',
      desc: '인화성 물질 관리 필요',
      color: 'from-orange-400 to-orange-600',
      stats: '30% 화재 원인',
    },
    {
      icon: FileText,
      title: '법적 준수',
      desc: '산업안전보건법 의무',
      color: 'from-blue-400 to-blue-600',
      stats: '100% 필수',
    },
  ];

  const managementTargets = [
    {
      title: '유해·위험 화학물질',
      items: ['발암성 물질 (벤젠, 석면 등)', '생식독성 물질', '신경독성 물질', '호흡기 유해 물질', '피부 부식성 물질'],
      color: 'from-red-400 to-red-600',
    },
    {
      title: '관리 대상 물질',
      items: ['인화성·가연성 물질', '폭발성 물질', '산화성 물질', '유독성 물질', '부식성 물질'],
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const managementSystem = [
    {
      icon: FileText,
      title: '화학물질 취급 관리',
      desc: '화학물질의 도입부터 폐기까지 전 과정에 대한 체계적인 관리 시스템 구축',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Shield,
      title: '안전 데이터 시트 (SDS) 관리',
      desc: '모든 화학물질에 대한 안전 데이터 시트 작성 및 근로자 교육 실시',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Users,
      title: '개인보호구 및 안전 설비',
      desc: '적합한 개인보호구 제공 및 환기 설비, 비상 샤워 시설 등 안전 설비 설치',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: '노출 모니터링 및 건강 관리',
      desc: '정기적인 작업환경 측정과 근로자 건강 진단을 통한 노출 관리',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const consultingSteps = [
    {
      step: '01',
      title: '화학물질 현황 조사',
      desc: '사업장 내 사용 화학물질 전수 조사 및 분류',
      icon: Target,
      color: 'from-green-400 to-green-600',
    },
    {
      step: '02',
      title: '위험성 평가',
      desc: '화학물질의 유해성·위험성 평가 및 우선순위 설정',
      icon: AlertTriangle,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      step: '03',
      title: '관리 체계 구축',
      desc: '화학물질 관리 지침서 및 절차서 작성',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: '04',
      title: '교육 프로그램 개발',
      desc: '근로자 대상 안전 교육 자료 및 프로그램 개발',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: '05',
      title: '모니터링 시스템',
      desc: '지속적인 관리 효과 평가 및 개선 방안 제시',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: '06',
      title: '사후 관리 지원',
      desc: '구축된 시스템의 운영 지원 및 정기 점검',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
    },
  ];

  const benefits = [
    '화학물질 사고 예방',
    '산업안전보건법 준수',
    '근로자 건강 보호',
    '비용 절감 (보험료, 치료비)',
    '기업 이미지 제고',
    '생산성 향상',
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
              <FlaskConical className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              화학물질 관리 컨설팅
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              화학물질 안전관리 체계 구축 및 유해 화학물질 노출 방지
            </motion.p>
          </motion.div>

          {/* Importance Section */}
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
                화학물질 관리의 중요성
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                산업현장에서 사용되는 다양한 화학물질은 근로자의 건강을 위협하는 주요 요인입니다
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
                {chemicalRisks.map((risk, index) => (
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

          {/* Management Targets */}
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
                화학물질 관리 대상
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적인 관리와 감독이 필요한 화학물질들을 분류하여 관리합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {managementTargets.map((target, index) => (
                <motion.div
                  key={target.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${target.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {target.title}
                  </h3>

                  <ul className="space-y-4">
                    {target.items.map((item, itemIndex) => (
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

          {/* Management System */}
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
                화학물질 관리 체계
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                종합적이고 체계적인 화학물질 관리 시스템을 구축합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {managementSystem.map((system, index) => (
                <motion.div
                  key={system.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${system.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <system.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {system.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {system.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consulting Process */}
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
                컨설팅 서비스 과정
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 전문적인 접근으로 화학물질 관리 시스템을 구축합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
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
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl shadow-medium`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
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
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                기대 효과 및 혜택
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                화학물질 관리 컨설팅을 통해 얻을 수 있는 다양한 혜택과 효과들입니다.
                안전하고 효율적인 작업 환경을 조성하여 기업 경쟁력을 강화합니다.
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
                  컨설팅 신청하기
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

export default ChemicalManagement;