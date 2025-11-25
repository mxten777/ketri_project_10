import { motion } from 'framer-motion';
import { Droplets, Shield, Microscope, FileText, Clock, CheckCircle, Beaker, AlertTriangle, Users, Building, TestTube, TrendingUp } from 'lucide-react';

const WaterIntro = () => {
  const waterImportance = [
    {
      icon: Droplets,
      title: '수질 안전',
      desc: '건강한 물 공급 보장',
      color: 'from-blue-400 to-blue-600',
      stats: '기본 권리',
    },
    {
      icon: Microscope,
      title: '정밀 분석',
      desc: '최신 장비로 정확 검사',
      color: 'from-green-400 to-green-600',
      stats: '99.9% 정확도',
    },
    {
      icon: FileText,
      title: '법적 준수',
      desc: '수질 기준 준수 확인',
      color: 'from-purple-400 to-purple-600',
      stats: '100% 필수',
    },
  ];

  const facilityTypes = [
    {
      title: '일반 수용가',
      facilities: ['공동주택 (아파트, 연립주택)', '업무시설 (사무실, 상가)', '교육시설 (학교, 학원)', '의료시설 (병원, 의원)', '위락시설 (호텔, 여관)'],
      icon: Building,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '특정 시설',
      facilities: ['식품제조·가공업소', '집단급식소', '목욕장업', '세탁업', '그 밖에 대통령령으로 정하는 시설'],
      icon: Users,
      color: 'from-green-400 to-green-600',
    },
  ];

  const testItems = [
    {
      title: '일반 세균',
      items: ['총대장균군', '대장균 등'],
      icon: Beaker,
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: '중금속',
      items: ['납', '비소', '카드뮴', '수은 등'],
      icon: AlertTriangle,
      color: 'from-red-400 to-red-600',
    },
    {
      title: '유기물질',
      items: ['페놀', '벤젠', '트리할로메탄 등'],
      icon: TestTube,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: '물리적 특성',
      items: ['pH', '탁도', '색도', '맛', '냄새 등'],
      icon: Droplets,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '잔류소독제',
      items: ['잔류염소', '총잔류염소 등'],
      icon: Shield,
      color: 'from-green-400 to-green-600',
    },
    {
      title: '기타 항목',
      items: ['질산성질소', '암모니아성질소 등'],
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const inspectionSchedule = [
    { type: '일반 수용가', period: '1년 1회', standard: '먹는물 수질기준' },
    { type: '집단급식소', period: '6개월 1회', standard: '먹는물 수질기준' },
    { type: '식품제조업소', period: '6개월 1회', standard: '먹는물 수질기준' },
    { type: '특정 시설', period: '3개월 1회', standard: '먹는물 수질기준' },
  ];

  const processSteps = [
    {
      step: '01',
      title: '의뢰 접수',
      desc: '검사 의뢰서 및 필요 서류 접수',
      icon: FileText,
      color: 'from-primary-400 to-primary-600',
    },
    {
      step: '02',
      title: '시료 채취',
      desc: '전문 채취 요원이 현장 방문',
      icon: Droplets,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: '03',
      title: '분석 실시',
      desc: '최신 장비로 정밀 분석',
      icon: Microscope,
      color: 'from-green-400 to-green-600',
    },
    {
      step: '04',
      title: '보고서 발급',
      desc: '공식 검사 성적서 제공',
      icon: CheckCircle,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const benefits = [
    '수질 안전성 보장',
    '법적 준수 증명',
    '건강 위험 예방',
    '품질 관리 체계 구축',
    '신뢰성 향상',
    '비용 절감 효과',
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
              <Droplets className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              먹는물 검사 소개
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              안전하고 깨끗한 수질 관리를 위한 전문 검사 서비스
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
                먹는물 검사의 중요성
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              >
                먹는물은 일상생활에서 가장 기본적이고 중요한 자원입니다
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
                {waterImportance.map((importance, index) => (
                  <motion.div
                    key={importance.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${importance.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <importance.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {importance.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                      {importance.desc}
                    </p>
                    <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {importance.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Facility Types */}
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
                검사 대상 시설
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                다양한 시설의 수질 안전을 책임지는 종합 검사 서비스입니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilityTypes.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${facility.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <facility.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {facility.title}
                  </h3>

                  <ul className="space-y-4">
                    {facility.facilities.map((item, itemIndex) => (
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

          {/* Test Items */}
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
                검사 항목
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                6가지 주요 카테고리로 체계적인 수질 분석을 실시합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <motion.li
                        key={subIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + subIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {subItem}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inspection Schedule */}
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
                검사 주기 및 기준
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                시설 유형별로 차별화된 검사 주기와 엄격한 수질 기준을 적용합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">시설 유형</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">검사 주기</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">적용 기준</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inspectionSchedule.map((schedule, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-6 text-gray-700 dark:text-gray-300 font-medium">{schedule.type}</td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="inline-flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary-500" />
                            {schedule.period}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          <span className="inline-flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            {schedule.standard}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm text-secondary-500 dark:text-secondary-400 mt-6 text-center"
              >
                * 검사 주기는 시설 규모, 이용자 수, 과거 검사 결과 등에 따라 조정될 수 있습니다.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Process Steps */}
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
                검사 절차 및 보고서
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적이고 전문적인 프로세스로 신뢰할 수 있는 검사 결과를 제공합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                먹는물 검사 혜택
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 수질 검사를 통해 안전한 물 공급을 보장하고 건강과 법적 준수를 동시에 실현합니다.
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
                  검사 의뢰하기
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

export default WaterIntro;