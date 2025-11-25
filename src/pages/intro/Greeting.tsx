import { motion } from 'framer-motion';
import { User, Award, Users, Target, Heart, Lightbulb, Shield } from 'lucide-react';

const Greeting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const stats = [
    { icon: Award, label: '30년+', desc: '연구 경험', color: 'text-yellow-500' },
    { icon: Users, label: '10,000+', desc: '고객 만족', color: 'text-blue-500' },
    { icon: Target, label: '99.9%', desc: '정확도', color: 'text-green-500' },
    { icon: Heart, label: 'ISO 9001', desc: '품질 인증', color: 'text-red-500' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: '혁신',
      desc: '최첨단 기술로 미래를 선도합니다',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: '신뢰',
      desc: '엄격한 품질 관리로 신뢰를 보장합니다',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Heart,
      title: '배려',
      desc: '고객의 안전과 만족을 최우선으로 합니다',
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-8 shadow-glow"
            >
              <User className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              인사말
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed"
            >
              한국환경안전연구소 대표이사 김철수의 인사말입니다
            </motion.p>
          </motion.div>

          {/* CEO Message */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-3xl p-8 lg:p-12 mb-16 shadow-large"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/3"
              >
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center shadow-medium">
                    <User className="w-24 h-24 text-primary-600 dark:text-primary-400" />
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center"
                  >
                    <Award className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-2/3"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  한국환경안전연구소 대표이사
                  <span className="block text-primary-600 dark:text-primary-400">김철수</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    안녕하십니까? 한국환경안전연구소 대표이사 김철수입니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    한국환경안전연구소는 1995년 설립 이래, 환경과 안전 분야에서 국내 최고 수준의 전문성을 인정받아 왔습니다.
                    최첨단 분석 장비와 숙련된 전문 인력을 바탕으로 산업보건컨설팅, 먹는물 검사, 혈액투석용수 검사,
                    실내공기질측정, 석면조사분석 등 다양한 분야에서 신뢰할 수 있는 서비스를 제공하고 있습니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    우리는 '안전한 환경, 건강한 미래'라는 비전을 실현하기 위해 끊임없이 노력하고 있습니다.
                    고객 여러분의 건강과 안전을 최우선으로 생각하며, 최고品質의 서비스를 제공하기 위해 최선을 다하겠습니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="font-semibold text-primary-600 dark:text-primary-400"
                  >
                    앞으로도 한국환경안전연구소에 많은 관심과 성원을 부탁드립니다.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
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
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl mb-4`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{stat.label}</div>
                <div className="text-secondary-600 dark:text-secondary-400 font-medium">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            variants={itemVariants}
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
              className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
            >
              혁신, 신뢰, 배려의 가치를 바탕으로 최고의 서비스를 제공합니다
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
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
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 shadow-medium`}
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
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Greeting;