import { motion } from 'framer-motion';
import { Heart, Shield, Activity, Hospital, Home, Microscope, Beaker, Thermometer, Filter, Monitor, AlertTriangle, CheckCircle, Stethoscope, Droplets, Zap } from 'lucide-react';

const DialysisIntro = () => {
  const importancePoints = [
    {
      icon: Heart,
      title: '생명 유지',
      desc: '신장투석 환자 생존 필수',
      color: 'from-red-400 to-red-600',
      details: ['치명적 신장 질환 치료', '주 2-3회 투석 필요', '고순도 물 필수 사용'],
    },
    {
      icon: Shield,
      title: '엄격 기준',
      desc: '일반 수질보다 강화된 기준',
      color: 'from-blue-400 to-blue-600',
      details: ['의료기기법 기준 적용', 'ISO 13959 준수', '환자 안전 최우선'],
    },
    {
      icon: Activity,
      title: '안전 보장',
      desc: '감염 및 중독 예방',
      color: 'from-green-400 to-green-600',
      details: ['미생물 오염 방지', '화학물질 노출 최소화', '합병증 예방'],
    },
  ];

  const productionSystem = [
    {
      title: '다단계 정수 공정',
      icon: Filter,
      color: 'from-primary-400 to-primary-600',
      processes: [
        { name: '1차 여과', desc: '부유물 및 큰 입자 제거', icon: '🔍' },
        { name: '역삼투압', desc: '용존염류 및 유기물 제거', icon: '💧' },
        { name: '이온교환', desc: '잔류 이온 제거', icon: '⚡' },
        { name: '한외여과', desc: '미생물 및 내독소 제거', icon: '🦠' },
        { name: '최종 소독', desc: '염소 또는 열처리', icon: '🧴' },
      ],
    },
    {
      title: '품질 모니터링',
      icon: Monitor,
      color: 'from-purple-400 to-purple-600',
      processes: [
        { name: '실시간 센서', desc: '수질 센서 모니터링', icon: '📊' },
        { name: '미생물 검사', desc: '정기적인 미생물 검사', icon: '🔬' },
        { name: '화학물질 측정', desc: '농도 측정 및 분석', icon: '🧪' },
        { name: '시스템 검증', desc: '성능 검증 테스트', icon: '✅' },
        { name: '경보 시스템', desc: '이상 감지 및 알림', icon: '🚨' },
      ],
    },
  ];

  const targetFacilities = [
    {
      icon: Hospital,
      title: '의료기관',
      desc: '종합병원, 병원, 의원 등에서 운영하는 혈액투석실 및 관련 시설',
      color: 'from-primary-400 to-primary-600',
      facilities: ['종합병원 투석실', '병원 투석센터', '의원 투석시설', '대학병원 투석부'],
    },
    {
      icon: Stethoscope,
      title: '투석전문클리닉',
      desc: '혈액투석을 전문으로 하는 클리닉 및 의료시설',
      color: 'from-blue-400 to-blue-600',
      facilities: ['투석전문센터', '신장내과 클리닉', '투석전문병원', '다학제 클리닉'],
    },
    {
      icon: Home,
      title: '재택투석 시설',
      desc: '가정에서 혈액투석을 실시하는 환자를 위한 수질 관리',
      color: 'from-green-400 to-green-600',
      facilities: ['재택투석 환자', '가정용 정수시스템', '모바일 투석서비스', '원격 모니터링'],
    },
  ];

  const inspectionItems = [
    {
      icon: Microscope,
      title: '미생물',
      desc: '총세균수, 대장균, 내독소 등',
      color: 'from-red-400 to-red-600',
      items: ['총세균수', '대장균', '내독소', '진균', '바이러스 지표'],
    },
    {
      icon: Beaker,
      title: '화학물질',
      desc: '중금속, 유기물, 잔류염소 등',
      color: 'from-orange-400 to-orange-600',
      items: ['중금속', '유기물', '잔류염소', '소독부산물', '약품 잔류'],
    },
    {
      icon: Thermometer,
      title: '물리적 특성',
      desc: '전기전도도, pH, 온도 등',
      color: 'from-yellow-400 to-yellow-600',
      items: ['전기전도도', 'pH', '온도', '탁도', '색도'],
    },
    {
      icon: Activity,
      title: '시스템 성능',
      desc: '여과효율, 소독효과 등',
      color: 'from-green-400 to-green-600',
      items: ['여과효율', '소독효과', '유량', '압력', '막 성능'],
    },
    {
      icon: Droplets,
      title: '부유물질',
      desc: '입자 수, 탁도 등',
      color: 'from-blue-400 to-blue-600',
      items: ['입자 수', '탁도', '부유물', '침전물', '부식 생성물'],
    },
    {
      icon: Zap,
      title: '기타',
      desc: '경도, 알칼리도, 규산 등',
      color: 'from-purple-400 to-purple-600',
      items: ['경도', '알칼리도', '규산', '산소', '산화환원전위'],
    },
  ];

  const standards = [
    {
      item: '총세균수',
      standard: '100 CFU/mL 이하',
      frequency: '매월',
      category: '미생물',
      icon: '🦠',
      color: 'from-red-400 to-red-600',
    },
    {
      item: '내독소',
      standard: '0.25 EU/mL 이하',
      frequency: '매월',
      category: '미생물',
      icon: '🧬',
      color: 'from-orange-400 to-orange-600',
    },
    {
      item: '중금속 (납, 카드뮴 등)',
      standard: '각 기준 이하',
      frequency: '분기 1회',
      category: '화학물질',
      icon: '⚠️',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      item: '전기전도도',
      standard: '30 μS/cm 이하',
      frequency: '매일',
      category: '물리적',
      icon: '⚡',
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
              <Heart className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              혈액투석용수 검사 업무 소개
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              신장투석 환자를 위한 고순도 정수 시스템의 안전성과 품질 관리
            </motion.p>
          </motion.div>

          {/* Importance */}
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
                혈액투석용수의 중요성
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                신장 기능이 저하된 환자의 생명을 유지하는 데 필수적인 요소
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {importancePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index === 0 ? -30 : index === 1 ? 0 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${point.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <point.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {point.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                    {point.desc}
                  </p>

                  <div className="space-y-3">
                    {point.details.map((detail, detailIndex) => (
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

          {/* Production System */}
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
                혈액투석용수 생산 시스템
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                다단계 정수 공정과 실시간 품질 모니터링 시스템
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {productionSystem.map((system, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${system.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <system.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {system.title}
                  </h3>

                  <div className="space-y-4">
                    {system.processes.map((process, processIndex) => (
                      <motion.div
                        key={processIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: processIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="text-2xl">{process.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200">
                            {process.name}
                          </h4>
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            {process.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Target Facilities */}
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
                혈액투석용수 품질 관리가 필요한 의료시설 및 서비스
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {targetFacilities.map((facility, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${facility.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <facility.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {facility.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                    {facility.desc}
                  </p>

                  <div className="space-y-2">
                    {facility.facilities.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
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

          {/* Inspection Items */}
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
                주요 검사 항목
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                혈액투석용수의 안전성과 품질을 보장하기 위한 종합 검사 항목
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
                {inspectionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                          {item.title}
                        </h4>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {item.items.slice(0, 3).map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {subItem}
                          </span>
                        </div>
                      ))}
                      {item.items.length > 3 && (
                        <div className="text-xs text-secondary-500 dark:text-secondary-500">
                          +{item.items.length - 3}개 항목 더보기
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Standards and Frequency */}
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
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                검사 주기 및 기준
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                의료기기법 및 관련 규정에 따른 체계적인 검사 주기와 엄격한 품질 기준
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {standards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${standard.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-lg">{standard.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                          {standard.item}
                        </h4>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                          {standard.category}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">기준값:</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400 text-sm">
                          {standard.standard}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">검사주기:</span>
                        <span className="font-bold text-secondary-700 dark:text-secondary-300 text-sm">
                          {standard.frequency}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Microscope className="w-5 h-5 inline mr-2" />
                  상세 검사 기준 보기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  품질 관리 가이드
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-sm text-secondary-500 dark:text-secondary-500 mt-6"
              >
                * 기준은 의료기기법 및 관련 규정에 따름 | ISO 13959 준수
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DialysisIntro;