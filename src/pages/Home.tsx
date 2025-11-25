import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Microscope, Droplets, Wind, Mountain, Award, Users, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden py-20 lg:py-32"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500/5 to-accent-500/5"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-8 shadow-glow"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              한국환경안전연구소
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              첨단 환경·안전 솔루션의 선두주자로서<br />
              <span className="font-semibold text-primary-600 dark:text-primary-400">신뢰할 수 있는 과학적 접근</span>으로 미래를 보호합니다
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/intro/greeting"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                연구소 소개
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/notices"
                className="inline-flex items-center px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                공지사항
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, label: '30년+', desc: '연구 경험' },
              { icon: Users, label: '10,000+', desc: '고객 만족' },
              { icon: Microscope, label: '50+', desc: '분석 장비' },
              { icon: CheckCircle, label: 'ISO 9001', desc: '인증 획득' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-soft border border-white/20 dark:border-gray-700/20"
              >
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              전문 서비스
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              최첨단 기술과 전문 인력으로 제공하는 종합 환경안전 솔루션
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '산업보건컨설팅',
                desc: '작업환경 측정, 위험성 평가, 근골격계 유해요인 조사 등 종합적인 산업보건 서비스를 제공합니다.',
                link: '/consulting/work-environment',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Droplets,
                title: '먹는물 검사',
                desc: '수질 검사 대상 및 범위, 검사 주기 및 수수료, 검사의뢰 신청절차를 안내합니다.',
                link: '/water/intro',
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                icon: Microscope,
                title: '혈액투석용수',
                desc: '혈액투석용수 검사 업무 소개, 검사의뢰절차, 검사주기 및 관련기준을 제공합니다.',
                link: '/dialysis/intro',
                color: 'from-teal-500 to-teal-600',
              },
              {
                icon: Wind,
                title: '실내공기질측정',
                desc: '실내공기질 측정 견적 요청과 성적서 조회 서비스를 이용하실 수 있습니다.',
                link: '/indoor/quote',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Mountain,
                title: '석면조사분석',
                desc: '석면농도측정, 석면비산정도측정, 석면해체제거감리 등 전문적인 석면 서비스를 제공합니다.',
                link: '/asbestos/density',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: Clock,
                title: '공지사항',
                desc: '최신 공지사항과 중요 안내사항을 확인하실 수 있습니다.',
                link: '/notices',
                color: 'from-red-500 to-red-600',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    자세히 보기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              왜 한국환경안전연구소를 선택해야 할까요?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              30년의 전문성과 최첨단 기술로 고객의 안전과 만족을 최우선으로 합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: '국내 최고 수준',
                desc: '최첨단 장비와 전문 인력으로 신뢰할 수 있는 결과를 제공합니다.',
                color: 'text-yellow-500',
              },
              {
                icon: Shield,
                title: '종합적 접근',
                desc: '환경과 안전을 아우르는 통합적인 솔루션을 제시합니다.',
                color: 'text-blue-500',
              },
              {
                icon: Clock,
                title: '빠른 서비스',
                desc: '신속한 분석과 정확한 보고서로 고객 만족을 최우선합니다.',
                color: 'text-green-500',
              },
              {
                icon: Users,
                title: '안전 보장',
                desc: '엄격한 품질 관리와 인증된 절차로 안전을 보장합니다.',
                color: 'text-purple-500',
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-medium mb-6 group-hover:shadow-large transition-shadow duration-300`}
                >
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;