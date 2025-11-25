import { motion } from 'framer-motion';
import { Calendar, Award, TrendingUp, Zap, Globe, Target, Star, Rocket } from 'lucide-react';

const History = () => {
  const timelineData = [
    {
      year: '1995',
      title: '한국환경안전연구소 설립',
      description: '환경안전 분야의 전문 연구기관으로 출발하여 국내 환경안전 산업의 기틀을 마련했습니다.',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600',
      achievements: ['기초 연구 인프라 구축', '전문 인력 양성 시작', '국내 환경안전 표준화 선도'],
    },
    {
      year: '2000',
      title: '산업보건컨설팅 서비스 개시',
      description: '산업보건컨설팅 분야에 진출하여 종합적인 안전관리 서비스를 제공하기 시작했습니다.',
      icon: Award,
      color: 'from-green-400 to-green-600',
      achievements: ['산업안전 컨설팅 서비스', '직장 내 건강관리 프로그램', '안전문화 구축 지원'],
    },
    {
      year: '2005',
      title: '먹는물 검사 서비스 확대',
      description: '수질 검사 분야 전문성을 강화하여 전국적인 서비스 네트워크를 구축했습니다.',
      icon: TrendingUp,
      color: 'from-cyan-400 to-cyan-600',
      achievements: ['전국 50개 지점 네트워크', '24시간 긴급 검사 서비스', '수질 인증 획득'],
    },
    {
      year: '2010',
      title: '혈액투석용수 검사 서비스 시작',
      description: '의료 분야로 사업 영역을 확장하여 혈액투석용수 전문 검사 서비스를 제공했습니다.',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      achievements: ['의료기기 인증 획득', '병원 파트너십 구축', '의료 품질 표준 준수'],
    },
    {
      year: '2015',
      title: '실내공기질측정 및 석면조사분석 서비스 추가',
      description: '실내 환경 분야로 사업을 확장하여 종합적인 환경안전 솔루션을 제공했습니다.',
      icon: Globe,
      color: 'from-orange-400 to-orange-600',
      achievements: ['석면 전문 분석실 운영', '실내공기질 측정 장비 도입', '환경영향평가 서비스'],
    },
    {
      year: '2020',
      title: '디지털 전환 및 첨단 장비 도입',
      description: '최첨단 분석 장비와 디지털 시스템을 도입하여 서비스 품질을 향상시켰습니다.',
      icon: Target,
      color: 'from-red-400 to-red-600',
      achievements: ['AI 기반 분석 시스템', '실시간 모니터링 플랫폼', '디지털 보고서 자동화'],
    },
    {
      year: '2025',
      title: '지속 가능한 미래를 위한 혁신',
      description: '친환경 기술과 지속 가능한 솔루션 개발에 주력하며 미래 지향적 성장을 이어가고 있습니다.',
      icon: Rocket,
      color: 'from-indigo-400 to-indigo-600',
      achievements: ['탄소중립 목표 수립', '친환경 분석 기술 개발', '지속가능성 보고서 발간'],
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
              <Star className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              연혁
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              30년의 혁신과 성장을 통해 대한민국 환경안전 분야를 선도해 온 우리의 여정입니다
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 dark:from-primary-800 dark:via-primary-600 dark:to-primary-400 h-full rounded-full"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  >
                    <motion.div
                      initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className="glass-effect rounded-2xl p-6 shadow-large hover:shadow-glow transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl shadow-medium`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            {item.year}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + achIndex * 0.1 + 0.4 }}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                    className="relative z-10"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-glow border-4 border-white dark:border-gray-800`}
                    >
                      <span className="text-white font-bold text-sm">{item.year.slice(-2)}</span>
                    </motion.div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                30년의 성과와 미래 비전
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">30+</div>
                  <div className="text-secondary-600 dark:text-secondary-400">년 연구 경험</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">100+</div>
                  <div className="text-secondary-600 dark:text-secondary-400">전문 인력</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
                  <div className="text-secondary-600 dark:text-secondary-400">지점 네트워크</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">99.9%</div>
                  <div className="text-secondary-600 dark:text-secondary-400">정확도</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default History;