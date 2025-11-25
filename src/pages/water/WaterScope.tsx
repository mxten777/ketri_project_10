import { motion } from 'framer-motion';
import { Building, Factory, Shield, AlertTriangle, FileText, Target, Eye, TrendingUp, XCircle, Award, Microscope } from 'lucide-react';

const WaterScope = () => {
  const facilityTypes = [
    {
      type: '일반 수용가 시설',
      desc: '상수도에서 공급받는 물을 사용하는 시설로서, 공동주택, 업무시설, 교육시설, 의료시설, 위락시설 등',
      icon: Building,
      color: 'from-primary-400 to-primary-600',
      facilities: [
        '공동주택 (아파트, 연립주택, 다세대주택)',
        '업무시설 (사무실, 상가건물)',
        '교육시설 (학교, 유치원, 학원)',
        '의료시설 (병원, 의원, 요양시설)',
        '위락시설 (호텔, 여관, 여인숙)',
        '종교시설 (교회, 사찰, 성당)',
        '체육시설 (체육관, 수영장)',
        '그 밖에 일반인이 이용하는 시설',
      ],
    },
    {
      type: '특정 시설',
      desc: '식품위생법, 공중위생관리법 등 다른 법령에 따라 수질 관리가 요구되는 시설',
      icon: Factory,
      color: 'from-blue-400 to-blue-600',
      facilities: [
        '식품제조·가공업소',
        '식품접객업소 (일반음식점, 휴게음식점)',
        '집단급식소 (학교, 회사 구내식당)',
        '목욕장업 (사우나, 찜질방 포함)',
        '세탁업 (세탁소, 드라이크리닝소)',
        '이용업 (PC방, 노래방, 오락실)',
        '숙박업 (여관, 모텔, 민박)',
        '그 밖에 대통령령으로 정하는 시설',
      ],
    },
  ];

  const inspectionItems = [
    {
      item: '일반세균 (총대장균군)',
      standard: '0 CFU/mL',
      note: '불검출',
      category: '미생물',
      icon: '🦠',
      color: 'from-red-400 to-red-600',
    },
    {
      item: '색도',
      standard: '5 도 이하',
      note: '백금코발트색단위',
      category: '물리적',
      icon: '🎨',
      color: 'from-purple-400 to-purple-600',
    },
    {
      item: '탁도',
      standard: '0.5 NTU 이하',
      note: '카오린광산단위',
      category: '물리적',
      icon: '💧',
      color: 'from-blue-400 to-blue-600',
    },
    {
      item: '냄새',
      standard: '0 단계',
      note: '기준치 이하',
      category: '물리적',
      icon: '👃',
      color: 'from-green-400 to-green-600',
    },
    {
      item: '맛',
      standard: '0 단계',
      note: '기준치 이하',
      category: '물리적',
      icon: '👅',
      color: 'from-orange-400 to-orange-600',
    },
    {
      item: '수소이온농도(pH)',
      standard: '5.8 ~ 8.5',
      note: '-',
      category: '물리적',
      icon: '⚗️',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      item: '증발잔류물',
      standard: '500 mg/L 이하',
      note: '105℃ 건조',
      category: '물리적',
      icon: '🔬',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const detailedItems = [
    {
      title: '중금속 및 유기물질',
      icon: AlertTriangle,
      color: 'from-red-400 to-red-600',
      items: [
        { name: '납 및 그 화합물', standard: '0.05 mg/L 이하' },
        { name: '비소 및 그 화합물', standard: '0.05 mg/L 이하' },
        { name: '카드뮴 및 그 화합물', standard: '0.01 mg/L 이하' },
        { name: '수은 및 그 화합물', standard: '0.001 mg/L 이하' },
        { name: '6가크롬', standard: '0.05 mg/L 이하' },
        { name: '페놀류', standard: '0.005 mg/L 이하' },
        { name: '벤젠', standard: '0.01 mg/L 이하' },
        { name: '사염화탄소', standard: '0.002 mg/L 이하' },
      ],
    },
    {
      title: '소독제 및 기타 물질',
      icon: Shield,
      color: 'from-green-400 to-green-600',
      items: [
        { name: '잔류염소', standard: '4.0 mg/L 이하' },
        { name: '총트리할로메탄', standard: '0.1 mg/L 이하' },
        { name: '브롬산염', standard: '0.01 mg/L 이하' },
        { name: '질산성질소', standard: '44.0 mg/L 이하' },
        { name: '암모니아성질소', standard: '0.5 mg/L 이하' },
        { name: '세제(음이온계면활성제)', standard: '0.5 mg/L 이하' },
        { name: '구리', standard: '1.0 mg/L 이하' },
        { name: '아연', standard: '3.0 mg/L 이하' },
      ],
    },
  ];

  const exclusions = [
    {
      title: '수질 검사 의무 제외 시설',
      icon: XCircle,
      color: 'from-red-400 to-red-600',
      type: 'mandatory',
      reasons: [
        '1일 평균 급수량이 100톤 미만인 소규모 시설',
        '상수도 공급을 받지 않는 시설 (개별정수시설 등)',
        '특정 법령에 따라 별도 수질 관리가 이루어지는 시설',
        '군사시설 및 국가안보 관련 시설',
        '재난 등으로 인한 임시 급수 시설',
      ],
    },
    {
      title: '검사 면제 조건',
      icon: Award,
      color: 'from-green-400 to-green-600',
      type: 'exemption',
      reasons: [
        '최근 3년간 모든 검사 항목이 먹는물 수질기준에 적합한 시설',
        '지방자치단체장이 인정하는 수질관리 우수 시설',
        '자체 수질검사 능력이 있는 대규모 시설',
      ],
    },
  ];

  const resultUsages = [
    {
      icon: FileText,
      title: '법적 준수',
      desc: '수질 기준 준수 확인 및 보고',
      color: 'from-primary-400 to-primary-600',
      benefits: ['법적 의무 이행', '행정처분 방지', '신뢰성 확보'],
    },
    {
      icon: Shield,
      title: '안전 관리',
      desc: '수질 문제 조기 발견 및 개선',
      color: 'from-green-400 to-green-600',
      benefits: ['위험 예방', '신속 대응', '안전 보장'],
    },
    {
      icon: TrendingUp,
      title: '품질 향상',
      desc: '지속적인 수질 모니터링',
      color: 'from-blue-400 to-blue-600',
      benefits: ['품질 관리', '개선 방향', '최적화'],
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
              <Target className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              수질 검사 대상 및 범위
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              먹는물 수질 검사의 대상 시설과 검사 항목에 대한 상세 안내
            </motion.p>
          </motion.div>

          {/* Facility Classification */}
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
                검사 대상 시설 분류
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                법적 기준에 따라 분류된 수질 검사 대상 시설입니다
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {facilityTypes.map((facility, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${facility.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <facility.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {facility.type}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                    {facility.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {facility.facilities.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
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

          {/* Inspection Items and Standards */}
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
                검사 항목 및 기준
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                먹는물 수질기준에 따른 주요 검사 항목과 기준값입니다
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
                        <span className="text-lg">{item.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                          {item.item}
                        </h4>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">기준값:</span>
                        <span className="font-bold text-primary-600 dark:text-primary-400">
                          {item.standard}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">비고:</span>
                        <span className="text-sm text-secondary-500 dark:text-secondary-500">
                          {item.note}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Detailed Inspection Items */}
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
                검사 대상 물질 상세
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                중금속, 유기물질, 소독제 등 주요 검사 대상 물질의 상세 기준
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {detailedItems.map((category, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                          {item.name}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                          {item.standard}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exclusions and Exemptions */}
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
                검사 제외 대상
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                수질 검사 의무가 제외되거나 면제되는 경우에 대한 안내입니다
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {exclusions.map((exclusion, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl p-8 shadow-soft hover:shadow-large border transition-all duration-300 ${
                    exclusion.type === 'mandatory'
                      ? 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800'
                      : 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${exclusion.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <exclusion.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {exclusion.title}
                  </h3>

                  <div className="space-y-3">
                    {exclusion.reasons.map((reason, reasonIndex) => (
                      <motion.div
                        key={reasonIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: reasonIndex * 0.1, duration: 0.4 }}
                        className={`flex items-start gap-3 p-3 rounded-lg ${
                          exclusion.type === 'mandatory'
                            ? 'bg-red-100 dark:bg-red-900/30'
                            : 'bg-green-100 dark:bg-green-900/30'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                          exclusion.type === 'mandatory'
                            ? 'bg-red-500'
                            : 'bg-green-500'
                        }`}></div>
                        <span className={`text-sm ${
                          exclusion.type === 'mandatory'
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

          {/* Result Usage */}
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
                <Eye className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                검사 결과 활용
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                체계적인 수질 검사를 통해 법적 준수, 안전 관리, 품질 향상을 동시에 실현합니다.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {resultUsages.map((usage, index) => (
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
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${usage.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <usage.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {usage.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      {usage.desc}
                    </p>
                    <ul className="space-y-1">
                      {usage.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-xs text-secondary-500">
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                          {benefit}
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
                  <Microscope className="w-5 h-5 inline mr-2" />
                  검사 항목 상세보기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  수질 기준 다운로드
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WaterScope;