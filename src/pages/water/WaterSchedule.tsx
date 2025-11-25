import { motion } from 'framer-motion';
import { Calendar, Clock, FileText, AlertTriangle, CheckCircle, TrendingUp, Bell, Archive, Shield, RefreshCw, Zap, Target } from 'lucide-react';

const WaterSchedule = () => {
  const scheduleCriteria = [
    {
      icon: Calendar,
      title: '정기 검사',
      desc: '법정 검사 주기 준수',
      color: 'from-primary-400 to-primary-600',
      details: '매년/반기/분기별 정기적 수질 모니터링',
    },
    {
      icon: AlertTriangle,
      title: '추가 검사',
      desc: '필요시 수시 검사',
      color: 'from-orange-400 to-red-500',
      details: '이상 징후 발견시 즉각적 추가 검사 실시',
    },
    {
      icon: Archive,
      title: '결과 관리',
      desc: '검사 결과 기록 보관',
      color: 'from-green-400 to-green-600',
      details: '체계적인 데이터 관리 및 추이 분석',
    },
  ];

  const facilitySchedules = [
    {
      facility: '일반 수용가 시설',
      period: '1년 1회',
      law: '먹는물관리법 제8조',
      icon: '🏢',
      color: 'from-blue-400 to-blue-600',
    },
    {
      facility: '집단급식소',
      period: '6개월 1회',
      law: '식품위생법 제36조',
      icon: '🍽️',
      color: 'from-green-400 to-green-600',
    },
    {
      facility: '식품제조·가공업소',
      period: '6개월 1회',
      law: '식품위생법 제36조',
      icon: '🏭',
      color: 'from-purple-400 to-purple-600',
    },
    {
      facility: '목욕장업',
      period: '3개월 1회',
      law: '공중위생관리법 제4조',
      icon: '🛁',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      facility: '세탁업',
      period: '3개월 1회',
      law: '공중위생관리법 제4조',
      icon: '👔',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      facility: '숙박업',
      period: '3개월 1회',
      law: '공중위생관리법 제4조',
      icon: '🏨',
      color: 'from-pink-400 to-pink-600',
    },
    {
      facility: '이용업',
      period: '3개월 1회',
      law: '공중위생관리법 제4조',
      icon: '💼',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  const shorteningReasons = [
    {
      reason: '부적합 검사 결과',
      desc: '최근 3년간 검사 결과가 2회 이상 부적합한 경우',
      icon: '⚠️',
      severity: 'high',
    },
    {
      reason: '수질 사고 이력',
      desc: '수질 사고 발생 이력이 있는 경우',
      icon: '🚨',
      severity: 'high',
    },
    {
      reason: '이용자 수 증가',
      desc: '이용자 수가 증가하여 위생 관리가 필요한 경우',
      icon: '📈',
      severity: 'medium',
    },
    {
      reason: '지자체장 판단',
      desc: '지방자치단체장이 필요하다고 인정하는 경우',
      icon: '🏛️',
      severity: 'medium',
    },
    {
      reason: '시설 노후화',
      desc: '시설 노후화로 인한 수질 관리 우려가 있는 경우',
      icon: '🏗️',
      severity: 'medium',
    },
  ];

  const extensionReasons = [
    {
      reason: '적합 검사 결과',
      desc: '최근 3년간 모든 검사 항목이 기준에 적합한 경우',
      icon: '✅',
      benefit: '신뢰성 입증',
    },
    {
      reason: '자체 검사 능력',
      desc: '자체 수질검사 능력이 있고 품질관리 체계가 우수한 경우',
      icon: '🔬',
      benefit: '효율성 향상',
    },
    {
      reason: '지자체장 인정',
      desc: '지방자치단체장이 수질관리 상태가 양호하다고 인정하는 경우',
      icon: '👑',
      benefit: '관리 우수',
    },
    {
      reason: '소규모 시설',
      desc: '소규모 시설로서 수질 오염 우려가 적은 경우',
      icon: '🏠',
      benefit: '최적화',
    },
  ];

  const mandatoryInspections = [
    {
      timing: '시설 신축 또는 증축 시',
      icon: '🏗️',
      color: 'from-red-400 to-red-600',
    },
    {
      timing: '급수시설 변경 시',
      icon: '🔧',
      color: 'from-orange-400 to-orange-600',
    },
    {
      timing: '수질 사고 발생 시',
      icon: '🚨',
      color: 'from-red-500 to-red-700',
    },
    {
      timing: '지방자치단체장 요구 시',
      icon: '🏛️',
      color: 'from-blue-400 to-blue-600',
    },
    {
      timing: '이용자 민원 발생 시',
      icon: '📢',
      color: 'from-yellow-400 to-yellow-600',
    },
  ];

  const recommendedInspections = [
    {
      timing: '계절적 요인으로 수질 변동 우려 시',
      icon: '🌤️',
      color: 'from-green-400 to-green-600',
    },
    {
      timing: '시설 유지보수 후',
      icon: '🔧',
      color: 'from-blue-400 to-blue-600',
    },
    {
      timing: '장기간 미사용 후 재사용 시',
      icon: '⏸️',
      color: 'from-purple-400 to-purple-600',
    },
    {
      timing: '수질 이상 징후 발견 시',
      icon: '👁️',
      color: 'from-orange-400 to-orange-600',
    },
    {
      timing: '자체 점검 결과 이상 시',
      icon: '📊',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const managementServices = [
    {
      icon: Calendar,
      title: '일정 관리',
      desc: '검사 주기 자동 계산 및 일정 관리',
      features: ['자동 일정 생성', '주기별 알림', '캘린더 연동'],
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Bell,
      title: '알림 서비스',
      desc: '검사 예정일 사전 알림 제공',
      features: ['이메일 알림', 'SMS 알림', '웹 푸시 알림'],
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Archive,
      title: '기록 보관',
      desc: '검사 결과 및 일정 기록 체계적 관리',
      features: ['디지털 보관', '추이 분석', '보고서 생성'],
      color: 'from-blue-400 to-blue-600',
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
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              검사 주기
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              시설 유형별 수질 검사 주기 및 일정 안내
            </motion.p>
          </motion.div>

          {/* Schedule Criteria */}
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
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              >
                먹는물 수질 검사는 법적 기준에 따라 체계적으로 관리됩니다
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
                {scheduleCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${criteria.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <criteria.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {criteria.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                      {criteria.desc}
                    </p>
                    <p className="text-sm text-secondary-500 dark:text-secondary-500">
                      {criteria.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Facility Schedules */}
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
                시설별 검사 주기
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                시설 유형에 따른 법적 검사 주기 및 근거 법령
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilitySchedules.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${schedule.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{schedule.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                          {schedule.facility}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-primary-500" />
                          <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {schedule.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-secondary-500 dark:text-secondary-400">
                      <FileText className="w-3 h-3" />
                      {schedule.law}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Schedule Adjustment */}
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                시설의 특성과 관리 상태에 따라 검사 주기가 조정될 수 있습니다
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Shortening Reasons */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 shadow-medium"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">
                  검사 주기 단축 사유
                </h3>

                <div className="space-y-4">
                  {shorteningReasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`flex items-start gap-4 p-4 rounded-xl border ${
                        reason.severity === 'high'
                          ? 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700'
                          : 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700'
                      }`}
                    >
                      <span className="text-2xl">{reason.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                          {reason.reason}
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {reason.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Extension Reasons */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 shadow-medium"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-6">
                  검사 주기 연장 가능 사유
                </h3>

                <div className="space-y-4">
                  {extensionReasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl border border-green-300 dark:border-green-700"
                    >
                      <span className="text-2xl">{reason.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                          {reason.reason}
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                          {reason.desc}
                        </p>
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-200 dark:bg-green-800 rounded-full text-xs font-medium text-green-800 dark:text-green-200">
                          <Target className="w-3 h-3" />
                          {reason.benefit}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                정기 검사 외에 필요한 경우 실시하는 추가 검사
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mandatory Inspections */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-6 shadow-medium"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  법적 의무 검사
                </h3>

                <div className="space-y-4">
                  {mandatoryInspections.map((inspection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${inspection.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-lg">{inspection.icon}</span>
                      </motion.div>
                      <span className="text-red-800 dark:text-red-200 font-medium">
                        {inspection.timing}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recommended Inspections */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 shadow-medium"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  권고 검사 시기
                </h3>

                <div className="space-y-4">
                  {recommendedInspections.map((inspection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${inspection.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-lg">{inspection.icon}</span>
                      </motion.div>
                      <span className="text-blue-800 dark:text-blue-200 font-medium">
                        {inspection.timing}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                <RefreshCw className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                검사 일정 관리 및 알림
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 검사 일정 관리로 법적 준수를 보장하고 효율적인 수질 관리를 지원합니다.
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
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-secondary-500">
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                  일정 관리 시스템
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Bell className="w-5 h-5 inline mr-2" />
                  알림 설정하기
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WaterSchedule;