import { motion } from 'framer-motion';
import { Calendar, AlertTriangle, CheckCircle, FileText, TrendingUp, Shield, Zap, Beaker, Activity } from 'lucide-react';

const DialysisSchedule = () => {
  const inspectionTypes = [
    {
      icon: Calendar,
      title: '법정 검사',
      desc: '의료기기법 의무',
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20',
      details: ['총세균수, 내독소, 중금속 등', '법적 의무 검사 항목', '감염 및 안전 관리'],
    },
    {
      icon: Beaker,
      title: '정밀 검사',
      desc: '종합 수질 평가',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      details: ['모든 검사 항목 포괄', '수질 상태 종합 분석', '장기적 추세 분석'],
    },
    {
      icon: Zap,
      title: '긴급 검사',
      desc: '이상 발생 시',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20',
      details: ['수질 이상 징후 발생', '시스템 고장 대응', '환자 안전 우선'],
    },
  ];

  const inspectionItems = [
    {
      item: '총세균수',
      frequency: '매월 1회',
      legal: '의료기기법',
      importance: '감염 예방',
      icon: '🦠',
      color: 'from-red-400 to-red-600',
      priority: 'high',
    },
    {
      item: '내독소',
      frequency: '매월 1회',
      legal: '의료기기법',
      importance: '염증 반응 방지',
      icon: '⚠️',
      color: 'from-orange-400 to-orange-600',
      priority: 'high',
    },
    {
      item: '전기전도도',
      frequency: '매일',
      legal: '시설 자체 점검',
      importance: '수질 변동 모니터링',
      icon: '⚡',
      color: 'from-blue-400 to-blue-600',
      priority: 'daily',
    },
    {
      item: '중금속 (납, 카드뮴 등)',
      frequency: '분기 1회',
      legal: '의료기기법',
      importance: '중금속 축적 방지',
      icon: '⚗️',
      color: 'from-purple-400 to-purple-600',
      priority: 'quarterly',
    },
    {
      item: '유기물 (총유기탄소)',
      frequency: '분기 1회',
      legal: '의료기기법',
      importance: '유기물 오염 확인',
      icon: '🌿',
      color: 'from-green-400 to-green-600',
      priority: 'quarterly',
    },
    {
      item: '잔류염소',
      frequency: '매주 1회',
      legal: '시설 자체 점검',
      importance: '소독 효과 확인',
      icon: '🧴',
      color: 'from-cyan-400 to-cyan-600',
      priority: 'weekly',
    },
    {
      item: '입자 수',
      frequency: '매월 1회',
      legal: '의료기기법',
      importance: '부유물질 모니터링',
      icon: '🔍',
      color: 'from-gray-400 to-gray-600',
      priority: 'monthly',
    },
    {
      item: 'pH',
      frequency: '매일',
      legal: '시설 자체 점검',
      importance: '화학적 안정성',
      icon: '🧪',
      color: 'from-indigo-400 to-indigo-600',
      priority: 'daily',
    },
  ];

  const adjustmentCriteria = [
    {
      type: '단축 사유',
      icon: AlertTriangle,
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20',
      reasons: [
        '최근 검사에서 기준 초과 항목 발생 시',
        '시스템 고장 또는 유지보수 후',
        '원수 수질 악화 또는 변화 시',
        '환자 이상 반응 보고 시',
        '새로운 장비 설치 또는 변경 시',
        '감독 기관의 특별 지시 시',
      ],
    },
    {
      type: '연장 가능 사유',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
      reasons: [
        '2년 이상 모든 검사 항목 적합 시',
        '자동 모니터링 시스템 우수 운영 시',
        '자체 검사 능력 입증 시',
        '감독 기관의 승인 하에 한함',
      ],
    },
  ];

  const additionalInspections = [
    {
      category: '법적 의무 검사',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      items: [
        '시스템 설치 후 초기 검사',
        '주요 부품 교체 후',
        '소독 또는 세척 후',
        '장기간 정지 후 재가동 시',
        '감독 기관 정기 점검 시',
      ],
    },
    {
      category: '권고 검사 시기',
      icon: TrendingUp,
      color: 'from-blue-400 to-blue-600',
      items: [
        '계절적 수질 변화 시',
        '원수 공급원 변경 시',
        '이상 징후 발견 시',
        '신규 환자 증가 시',
        '장비 성능 저하 의심 시',
      ],
    },
  ];

  const managementServices = [
    {
      icon: Calendar,
      title: '일정 관리',
      desc: '검사 주기 자동 계산 및 알림 시스템',
      color: 'from-primary-400 to-primary-600',
      features: ['자동 일정 생성', '알림 시스템', '주기 조정', '기록 관리'],
    },
    {
      icon: FileText,
      title: '결과 보고',
      desc: '검사 결과 즉시 보고 및 기록 보관',
      color: 'from-blue-400 to-blue-600',
      features: ['실시간 보고', '전자 기록', '추세 분석', '보관 시스템'],
    },
    {
      icon: Shield,
      title: '안전 관리',
      desc: '기준 초과 시 즉각 조치 안내',
      color: 'from-green-400 to-green-600',
      features: ['이상 감지', '긴급 조치', '보고 체계', '안전 프로토콜'],
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'daily':
        return { text: '매일', color: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' };
      case 'weekly':
        return { text: '주간', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300' };
      case 'monthly':
        return { text: '월간', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' };
      case 'quarterly':
        return { text: '분기', color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' };
      case 'high':
        return { text: '중요', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' };
      default:
        return { text: '일반', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300' };
    }
  };

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
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              검사주기
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              혈액투석용수 검사의 법적 검사 주기 및 체계적인 일정 관리
            </motion.p>
          </motion.div>

          {/* Inspection Types */}
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
                검사 주기 기준
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                환자 안전을 최우선으로 하는 엄격한 검사 체계
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {inspectionTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`rounded-2xl p-8 shadow-soft hover:shadow-large border transition-all duration-300 ${type.bgColor} border-gray-200 dark:border-gray-700`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <type.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {type.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {type.desc}
                  </p>

                  <div className="space-y-3">
                    {type.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: detailIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg"
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

          {/* Inspection Items Table */}
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
                검사 항목별 주기
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
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">검사 항목</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">검사 주기</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">법적 근거</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">중요성</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">우선순위</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inspectionItems.map((item, index) => {
                      const badge = getPriorityBadge(item.priority);
                      return (
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
                            <span className="font-medium text-secondary-700 dark:text-secondary-300">
                              {item.frequency}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-secondary-600 dark:text-secondary-400">
                              {item.legal}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-secondary-600 dark:text-secondary-400">
                              {item.importance}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                              {badge.text}
                            </span>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* Adjustment Criteria */}
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
                검사 주기 조정 기준
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {adjustmentCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl p-8 shadow-soft hover:shadow-large border transition-all duration-300 ${criteria.bgColor} border-gray-200 dark:border-gray-700`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${criteria.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <criteria.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {criteria.type}
                  </h3>

                  <div className="space-y-3">
                    {criteria.reasons.map((reason, reasonIndex) => (
                      <motion.div
                        key={reasonIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: reasonIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                          criteria.type === '단축 사유' ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                        <span className={`text-sm ${
                          criteria.type === '단축 사유'
                            ? 'text-red-800 dark:text-red-200'
                            : 'text-green-800 dark:text-green-200'
                        }`}>
                          {reason}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Inspections */}
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
                수시 검사 실시 시기
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {additionalInspections.map((inspection, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${inspection.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <inspection.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {inspection.category}
                  </h3>

                  <div className="space-y-3">
                    {inspection.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Management Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-6xl mx-auto"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
              >
                <Activity className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                검사 일정 관리 및 보고
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 검사 일정 관리와 신속한 결과 보고로 안전한 혈액투석 환경을 유지합니다
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {managementServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      {service.desc}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
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
                  <Calendar className="w-5 h-5 inline mr-2" />
                  검사 일정 확인
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  검사 결과 보고서
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DialysisSchedule;