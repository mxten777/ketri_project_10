import { motion } from 'framer-motion';
import { User, Briefcase, Microscope, Shield, Droplets, Home, Users, Award, Target, Zap, Heart, Globe } from 'lucide-react';

const Organization = () => {
  const departments = [
    {
      title: '대표이사',
      icon: User,
      color: 'from-primary-400 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
      description: '연구소 전체 운영 및 전략 방향성 수립',
      responsibilities: ['전략적 의사결정', '비전 수립', '품질 관리 감독', '대외 관계 구축'],
      members: '1명',
    },
    {
      title: '경영지원본부',
      icon: Briefcase,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      description: '행정, 재무, 인사 관리 및 고객 지원',
      responsibilities: ['행정 업무', '재무 관리', '인사 운영', '고객 서비스', '법무 지원'],
      members: '15명',
    },
    {
      title: '기술연구본부',
      icon: Microscope,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      description: '분석 기술 개발 및 품질 관리',
      responsibilities: ['기술 개발', '품질 관리', '연구 개발', '장비 유지보수', '표준화 작업'],
      members: '25명',
    },
    {
      title: '산업보건컨설팅팀',
      icon: Shield,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      description: '작업환경 측정 및 위험성 평가',
      responsibilities: ['작업환경 측정', '위험성 평가', '안전 컨설팅', '교육 프로그램', '보고서 작성'],
      members: '20명',
    },
    {
      title: '수질검사팀',
      icon: Droplets,
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
      description: '먹는물 및 혈액투석용수 검사',
      responsibilities: ['수질 분석', '먹는물 검사', '투석용수 검사', '현장 조사', '데이터 관리'],
      members: '18명',
    },
    {
      title: '실내환경팀',
      icon: Home,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      description: '실내공기질측정 및 석면조사분석',
      responsibilities: ['공기질 측정', '석면 조사', '환경 영향평가', '개선 방안 제시', '모니터링'],
      members: '16명',
    },
  ];

  const stats = [
    { icon: Users, label: '총 인원', value: '95명', desc: '전문 인력' },
    { icon: Award, label: '자격증 보유', value: '200+', desc: '다양한 전문 자격증' },
    { icon: Target, label: '프로젝트', value: '10,000+', desc: '성공적 완료' },
    { icon: Zap, label: '기술력', value: '30년', desc: '축적된 경험' },
  ];

  const values = [
    {
      icon: Heart,
      title: '고객 중심',
      desc: '고객의 안전과 만족을 최우선으로 합니다',
    },
    {
      icon: Globe,
      title: '글로벌 표준',
      desc: '국제적인 품질 기준을 준수합니다',
    },
    {
      icon: Target,
      title: '정확성',
      desc: '최고 수준의 정확도와 신뢰성을 보장합니다',
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
              <Users className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              조직도
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              전문성과 협력을 바탕으로 최고의 환경안전 서비스를 제공하는 우리의 조직입니다
            </motion.p>
          </motion.div>

          {/* Organization Chart */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${dept.bgColor} p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${dept.color} rounded-xl mb-4 shadow-medium`}
                  >
                    <dept.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {dept.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      주요 업무
                    </div>
                    <ul className="space-y-1">
                      {dept.responsibilities.slice(0, 3).map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + respIndex * 0.05 }}
                          className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      인원: {dept.members}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-primary-500"
                    >
                      <Award className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl mb-4"
                >
                  <stat.icon className={`w-6 h-6 text-primary-600 dark:text-primary-400`} />
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{stat.value}</div>
                <div className="text-secondary-600 dark:text-secondary-400 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
            >
              우리의 핵심 가치
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-12"
            >
              전문성과 신뢰를 바탕으로 최고의 서비스를 제공합니다
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl mb-6 shadow-medium mx-auto"
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
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
                함께 일할 준비가 되셨나요?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                환경안전 분야의 전문가들과 함께 미래를 만들어가고 싶다면 언제든 연락주세요.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
              >
                채용 문의하기
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Organization;