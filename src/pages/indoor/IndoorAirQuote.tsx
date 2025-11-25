import { motion } from 'framer-motion';
import { Wind, Building2, TestTube, Calculator, Clock, Phone, Mail, MapPin, CheckCircle, AlertTriangle, Shield, Users, Calendar, Award } from 'lucide-react';

const IndoorAirQuote = () => {
  const serviceOverview = [
    {
      icon: Building2,
      title: '법적 의무',
      desc: '실내공기질 관리법 준수',
      color: 'from-red-400 to-red-600',
      details: ['연면적 1,000㎡ 이상 의무', '지하역사 및 터미널', '문화 및 집회 시설', '의료기관 및 교육시설'],
    },
    {
      icon: TestTube,
      title: '전문 장비',
      desc: '정밀 측정 시스템',
      color: 'from-blue-400 to-blue-600',
      details: ['광산란법 측정기', '비분산적외선 분석기', '액체크로마토그래피', '활성탄흡착 장비'],
    },
    {
      icon: Clock,
      title: '신속 보고',
      desc: '7일 이내 결과 제공',
      color: 'from-green-400 to-green-600',
      details: ['측정 후 7일 이내 보고', '상세 분석 결과', '개선 권고안 포함', '법적 보고서 양식'],
    },
  ];

  const mandatoryFacilities = [
    '연면적 1,000㎡ 이상의 건축물',
    '지하역사 및 터미널',
    '문화 및 집회 시설',
    '의료기관',
    '교육연구시설',
    '노유자시설',
    '판매시설',
    '운수시설',
  ];

  const optionalFacilities = [
    '사무실 및 업무시설',
    '공동주택',
    '숙박시설',
    '위락시설',
    '공장 및 창고',
    '음식점 및 요식업소',
    '종교시설',
    '기타 실내 공간',
  ];

  const measurementItems = [
    {
      item: '미세먼지 (PM-10)',
      recommended: '≤ 100 μg/m³',
      mandatory: '≤ 150 μg/m³',
      method: '광산란법',
      icon: '🌫️',
      color: 'from-gray-400 to-gray-600',
      health: '호흡기 건강 영향',
    },
    {
      item: '초미세먼지 (PM-2.5)',
      recommended: '≤ 50 μg/m³',
      mandatory: '≤ 75 μg/m³',
      method: '광산란법',
      icon: '💨',
      color: 'from-blue-400 to-blue-600',
      health: '심혈관계 영향',
    },
    {
      item: '이산화탄소 (CO₂)',
      recommended: '≤ 1,000 ppm',
      mandatory: '≤ 2,000 ppm',
      method: '비분산적외선법',
      icon: '🌬️',
      color: 'from-green-400 to-green-600',
      health: '산소 농도 저하',
    },
    {
      item: '일산화탄소 (CO)',
      recommended: '≤ 10 ppm',
      mandatory: '≤ 25 ppm',
      method: '비분산적외선법',
      icon: '⚠️',
      color: 'from-red-400 to-red-600',
      health: '중독 위험',
    },
    {
      item: '포름알데히드 (HCHO)',
      recommended: '≤ 0.1 ppm',
      mandatory: '≤ 0.3 ppm',
      method: '액체크로마토그래피법',
      icon: '🧪',
      color: 'from-purple-400 to-purple-600',
      health: '알레르기 유발',
    },
    {
      item: '총휘발성유기화합물 (TVOC)',
      recommended: '≤ 0.5 ppm',
      mandatory: '≤ 1.0 ppm',
      method: '광이온화법',
      icon: '🌀',
      color: 'from-orange-400 to-orange-600',
      health: '다중 화학물질 민감증',
    },
    {
      item: '라돈 (Rn)',
      recommended: '≤ 148 Bq/m³',
      mandatory: '≤ 400 Bq/m³',
      method: '활성탄흡착법',
      icon: '☢️',
      color: 'from-yellow-400 to-yellow-600',
      health: '방사선 피폭',
    },
  ];

  const pricingPackages = [
    {
      name: '기본 패키지',
      price: '₩150,000',
      items: ['PM-10', 'CO₂', 'CO'],
      description: '필수 항목 중심',
      color: 'from-blue-400 to-blue-600',
      icon: '📊',
      popular: false,
    },
    {
      name: '표준 패키지',
      price: '₩250,000',
      items: ['기본 패키지', 'HCHO', 'TVOC'],
      description: '화학물질 포함',
      color: 'from-green-400 to-green-600',
      icon: '🔬',
      popular: true,
    },
    {
      name: '프리미엄 패키지',
      price: '₩350,000',
      items: ['전 항목', '라돈', '상세 분석'],
      description: '완전 종합 검사',
      color: 'from-purple-400 to-purple-600',
      icon: '👑',
      popular: false,
    },
  ];

  const additionalCosts = [
    {
      item: '출장비',
      cost: '기본 50,000원',
      detail: '서울 지역 외 100,000원',
      icon: '🚗',
    },
    {
      item: '추가 측정점',
      cost: '50,000원/점',
      detail: '기본 3점 포함',
      icon: '📍',
    },
    {
      item: '긴급 측정',
      cost: '기본 요금의 50% 가산',
      detail: '24시간 이내 측정',
      icon: '🚨',
    },
    {
      item: '야간/휴일 측정',
      cost: '기본 요금의 30% 가산',
      detail: '야간 및 휴일 작업',
      icon: '🌙',
    },
    {
      item: '상세 보고서',
      cost: '50,000원',
      detail: '기본 보고서 포함',
      icon: '📋',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: '문의 및 상담',
      desc: '전화 또는 이메일로 측정 조건 및 견적 문의',
      icon: Phone,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '현장 사전 조사',
      desc: '측정 장소 및 조건 확인을 위한 사전 방문',
      icon: MapPin,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 3,
      title: '계약 및 일정 조율',
      desc: '견적 확정 및 측정 일정 협의',
      icon: Calendar,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 4,
      title: '측정 실시',
      desc: '전문 기술자가 현장에서 측정 실시',
      icon: TestTube,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: 5,
      title: '결과 보고',
      desc: '7일 이내 상세 결과 보고서 제공',
      icon: Award,
      color: 'from-red-400 to-red-600',
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
              <Wind className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              실내공기질 측정 의뢰
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              건강한 실내 환경을 위한 전문적인 공기질 측정 서비스
            </motion.p>
          </motion.div>

          {/* Service Overview */}
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
                서비스 개요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                실내공기질 관리법에 따른 전문 측정 서비스
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {serviceOverview.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: detailIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Measurement Target Facilities */}
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
                측정 대상 시설
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-xl shadow-medium"
                  >
                    <Shield className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    의무 측정 대상
                  </h3>
                </div>

                <div className="grid gap-3">
                  {mandatoryFacilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {facility}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-medium"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    임의 측정 대상
                  </h3>
                </div>

                <div className="grid gap-3">
                  {optionalFacilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {facility}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Measurement Items and Standards */}
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
                측정 항목 및 기준
              </motion.h2>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">측정 항목</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">권고 기준</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">의무 기준</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">측정 방법</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">건강 영향</th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurementItems.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-medium`}
                            >
                              <span className="text-sm">{item.icon}</span>
                            </motion.div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              {item.item}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="font-medium text-green-600 dark:text-green-400">
                            {item.recommended}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="font-medium text-orange-600 dark:text-orange-400">
                            {item.mandatory}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-secondary-600 dark:text-secondary-400">
                            {item.method}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-secondary-600 dark:text-secondary-400">
                            {item.health}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* Pricing and Quotes */}
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
                측정 비용 및 견적
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border transition-all duration-300 ${
                    pkg.popular
                      ? 'border-primary-500 shadow-glow'
                      : 'border-gray-100 dark:border-gray-700'
                  }`}
                >
                  {pkg.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium"
                    >
                      추천 패키지
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <span className="text-2xl">{pkg.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {pkg.description}
                  </p>

                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm ml-2">
                      (VAT 별도)
                    </span>
                  </div>

                  <div className="space-y-3">
                    {pkg.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl shadow-medium"
                >
                  <Calculator className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  추가 비용 항목
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalCosts.map((cost, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-medium"
                      >
                        <span className="text-sm">{cost.icon}</span>
                      </motion.div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {cost.item}
                      </span>
                    </div>
                    <div className="text-primary-600 dark:text-primary-400 font-bold mb-1">
                      {cost.cost}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {cost.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Request Process */}
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
                의뢰 절차
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-medium">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
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
                <Phone className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                연락처 및 문의
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                실내공기질 측정 서비스에 대해 궁금하신 점이 있으시면 언제든지 연락주세요
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-500" />
                    실내공기질 측정 담당
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-500" />
                      <span className="text-secondary-700 dark:text-secondary-300">02-123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary-500" />
                      <span className="text-secondary-700 dark:text-secondary-300">indoor@ketri.co.kr</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-primary-500" />
                      <span className="text-secondary-700 dark:text-secondary-300">팩스: 02-123-4568</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-500" />
                    운영 시간
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">평일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">09:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">토요일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">09:00 - 13:00</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">일요일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">휴무</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary-700 dark:text-primary-300 font-semibold mb-2">
                      문의 시 다음 정보를 알려주시면 보다 정확한 견적을 받으실 수 있습니다:
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      시설명, 주소, 연면적, 측정 희망 항목, 희망 일정
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  전화 상담하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  이메일 문의하기
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndoorAirQuote;