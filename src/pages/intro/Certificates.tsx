import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, TrendingUp, Users, Star, FileCheck, Zap } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'ISO 9001 품질경영시스템 인증',
      issuer: '한국표준협회',
      year: '2023',
      description: '품질경영시스템에 대한 국제표준 인증',
      icon: Shield,
      color: 'from-blue-400 to-blue-600',
      status: '유효',
    },
    {
      title: 'ISO 14001 환경경영시스템 인증',
      issuer: '한국표준협회',
      year: '2023',
      description: '환경경영시스템에 대한 국제표준 인증',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
      status: '유효',
    },
    {
      title: 'ISO 45001 안전보건경영시스템 인증',
      issuer: '한국표준협회',
      year: '2023',
      description: '안전보건경영시스템에 대한 국제표준 인증',
      icon: Shield,
      color: 'from-orange-400 to-orange-600',
      status: '유효',
    },
    {
      title: '시험·검사기관 지정서',
      issuer: '환경부',
      year: '2023',
      description: '먹는물 검사 및 실내공기질측정 지정',
      icon: FileCheck,
      color: 'from-cyan-400 to-cyan-600',
      status: '유효',
    },
    {
      title: '석면조사업무 지정서',
      issuer: '환경부',
      year: '2023',
      description: '석면조사 및 분석 업무 지정',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      status: '유효',
    },
    {
      title: '산업안전보건관리비 지출증명서 발급기관',
      issuer: '고용노동부',
      year: '2023',
      description: '산업안전보건관리비 지출증명서 발급 권한',
      icon: Award,
      color: 'from-indigo-400 to-indigo-600',
      status: '유효',
    }
  ];

  const qualityStats = [
    { label: '인증 유지 기간', value: '15년+', icon: TrendingUp },
    { label: '품질 관리 프로세스', value: '99.9%', icon: CheckCircle },
    { label: '전문 인력', value: '100+', icon: Users },
    { label: '고객 만족도', value: '98%', icon: Star },
  ];

  const qualityProcesses = [
    {
      icon: FileCheck,
      title: '표준 운영 절차',
      desc: '모든 업무에 대한 표준화된 절차 수립 및 운영',
      details: ['SOP 문서화', '절차 준수 모니터링', '지속적 개선'],
    },
    {
      icon: Zap,
      title: '장비 검교정',
      desc: '분석 장비의 정기적인 검교정 및 성능 확인',
      details: ['ISO 17025 준수', '외부 기관 검교정', '성능 기록 관리'],
    },
    {
      icon: Users,
      title: '전문 인력 양성',
      desc: '지속적인 교육을 통한 전문성 향상',
      details: ['정기 교육 프로그램', '자격증 취득 지원', '역량 평가 시스템'],
    },
    {
      icon: TrendingUp,
      title: '성과 모니터링',
      desc: '서비스 품질 및 고객 만족도 지속 모니터링',
      details: ['KPI 측정', '고객 피드백 분석', '개선 활동 실시'],
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
              <Award className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              인증 및 지정 현황
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              국제표준 인증과 정부 지정으로 검증된 품질과 신뢰성
            </motion.p>
          </motion.div>

          {/* Quality Assurance Stats */}
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
                품질 보증 및 신뢰성
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                엄격한 품질 관리 체계로 신뢰할 수 있는 서비스를 제공합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualityStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl mb-4 shadow-medium"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Certificates Grid */}
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
                주요 인증서 및 지정서
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                국제표준과 정부 기관의 공식 인증으로 검증된 전문성
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${cert.color} rounded-xl shadow-medium`}
                    >
                      <cert.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                          {cert.status}
                        </span>
                        <span className="text-sm text-secondary-500 dark:text-secondary-500 font-medium">
                          {cert.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Management System */}
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 과학적인 품질 관리로 최고 수준의 서비스를 제공합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualityProcesses.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl mb-6 shadow-medium"
                  >
                    <process.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {process.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-6">
                    {process.desc}
                  </p>

                  <ul className="space-y-3">
                    {process.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + detailIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accreditation Standards */}
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                국제표준 준수 및 지속적 개선
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                한국환경안전연구소는 ISO 9001, ISO 14001, ISO 45001 등 국제표준을 준수하며,
                지속적인 품질 개선 활동을 통해 최고 수준의 서비스를 제공하고 있습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  인증서 확인하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  품질 관리 문의
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certificates;