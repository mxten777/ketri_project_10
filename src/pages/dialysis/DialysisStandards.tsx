import { motion } from 'framer-motion';
import { Shield, Globe, Stethoscope, Microscope, Beaker, TestTube, AlertTriangle, CheckCircle, Ruler, Activity, Award } from 'lucide-react';

const DialysisStandards = () => {
  const legalStandards = [
    {
      icon: Shield,
      title: '국내 법규',
      desc: '의료기기법',
      color: 'from-red-400 to-red-600',
      details: ['의료기기법 제7조', '혈액투석용수 관리지침', '법적 의무 준수', '행정처분 기준'],
    },
    {
      icon: Globe,
      title: '국제 표준',
      desc: 'ISO 13959',
      color: 'from-blue-400 to-blue-600',
      details: ['ISO 13959:2009', '세계보건기구(WHO)', '국제적 상호인정', '글로벌 기준'],
    },
    {
      icon: Stethoscope,
      title: '의료 지침',
      desc: 'KDOQI',
      color: 'from-green-400 to-green-600',
      details: ['KDOQI 가이드라인', 'EBPG 권고안', '임상 근거 기반', '환자 안전 우선'],
    },
    {
      icon: Microscope,
      title: '과학 근거',
      desc: 'EBPG',
      color: 'from-purple-400 to-purple-600',
      details: ['European Best Practice', '근거 기반 의학', '최신 연구 결과', '지속적 업데이트'],
    },
  ];

  const physicochemicalStandards = [
    {
      item: 'pH',
      standard: '6.8 ~ 8.0',
      method: '전기화학적 방법',
      legal: '의료기기법',
      icon: '🧪',
      color: 'from-blue-400 to-blue-600',
      importance: '화학적 안정성',
    },
    {
      item: '전기전도도 (25℃)',
      standard: '≤ 30 μS/cm',
      method: '전기전도도계',
      legal: '의료기기법',
      icon: '⚡',
      color: 'from-yellow-400 to-yellow-600',
      importance: '이온 농도 지표',
    },
    {
      item: '총용존고형물',
      standard: '≤ 50 mg/L',
      method: '중량법',
      legal: '의료기기법',
      icon: '⚖️',
      color: 'from-gray-400 to-gray-600',
      importance: '용존 물질 총량',
    },
    {
      item: '총경도 (CaCO₃)',
      standard: '≤ 50 mg/L',
      method: 'EDTA 적정법',
      legal: '의료기기법',
      icon: '💧',
      color: 'from-cyan-400 to-cyan-600',
      importance: '칼슘/마그네슘 농도',
    },
    {
      item: '총알칼리도 (CaCO₃)',
      standard: '≤ 50 mg/L',
      method: '산-염기 적정법',
      legal: '의료기기법',
      icon: '🧴',
      color: 'from-green-400 to-green-600',
      importance: '산-염기 균형',
    },
    {
      item: '잔류염소',
      standard: '≤ 0.1 mg/L',
      method: 'DPD 방법',
      legal: '의료기기법',
      icon: '🦠',
      color: 'from-orange-400 to-orange-600',
      importance: '소독 잔류물',
    },
    {
      item: '총유기탄소 (TOC)',
      standard: '≤ 0.5 mg/L',
      method: '비색분석법',
      legal: '의료기기법',
      icon: '🌿',
      color: 'from-purple-400 to-purple-600',
      importance: '유기물 오염도',
    },
  ];

  const microbiologicalStandards = [
    {
      item: '총세균수',
      standard: '≤ 100 CFU/mL',
      method: 'R2A 한천배지',
      importance: '감염 예방',
      icon: '🦠',
      color: 'from-red-400 to-red-600',
      risk: '높음',
    },
    {
      item: '내독소',
      standard: '≤ 0.25 EU/mL',
      method: 'LAL 검사',
      importance: '염증 반응 방지',
      icon: '⚠️',
      color: 'from-orange-400 to-orange-600',
      risk: '높음',
    },
    {
      item: '입자 수 (≥ 0.5 μm)',
      standard: '≤ 5,000 개/mL',
      method: '광산란법',
      importance: '부유물질 모니터링',
      icon: '🔍',
      color: 'from-blue-400 to-blue-600',
      risk: '중간',
    },
  ];

  const heavyMetalStandards = [
    {
      substance: '납 (Pb)',
      standard: '≤ 0.005 mg/L',
      method: 'ICP-MS',
      health: '신경계 손상',
      icon: '🧠',
      color: 'from-gray-400 to-gray-600',
      toxicity: '높음',
    },
    {
      substance: '카드뮴 (Cd)',
      standard: '≤ 0.001 mg/L',
      method: 'ICP-MS',
      health: '신장 손상',
      icon: '🫘',
      color: 'from-yellow-400 to-yellow-600',
      toxicity: '매우 높음',
    },
    {
      substance: '수은 (Hg)',
      standard: '≤ 0.0002 mg/L',
      method: '냉증기 원자흡광법',
      health: '신경계 독성',
      icon: '☠️',
      color: 'from-red-400 to-red-600',
      toxicity: '극히 높음',
    },
    {
      substance: '비소 (As)',
      standard: '≤ 0.005 mg/L',
      method: 'ICP-MS',
      health: '암 발생 위험',
      icon: '⚠️',
      color: 'from-purple-400 to-purple-600',
      toxicity: '높음',
    },
    {
      substance: '크롬 (Cr)',
      standard: '≤ 0.014 mg/L',
      method: 'ICP-MS',
      health: '알레르기 유발',
      icon: '🤧',
      color: 'from-orange-400 to-orange-600',
      toxicity: '중간',
    },
    {
      substance: '니켈 (Ni)',
      standard: '≤ 0.02 mg/L',
      method: 'ICP-MS',
      health: '피부염 유발',
      icon: '🦴',
      color: 'from-green-400 to-green-600',
      toxicity: '중간',
    },
    {
      substance: '알루미늄 (Al)',
      standard: '≤ 0.01 mg/L',
      method: 'ICP-MS',
      health: '뼈 질환 유발',
      icon: '🦴',
      color: 'from-blue-400 to-blue-600',
      toxicity: '중간',
    },
  ];

  const testingMethods = [
    {
      category: '표준 검사 방법',
      icon: Beaker,
      color: 'from-primary-400 to-primary-600',
      methods: [
        'KS I ISO 13959: 물 투석 및 관련 치료용',
        'USP 643: 총 유기탄소',
        'USP 645: 물 전도도',
        'USP 71: 미생물 한도 검사',
        'USP 85: 세균 내독소 검사',
        'ASTM D4194: 입자 수 측정',
      ],
    },
    {
      category: '주요 검사 장비',
      icon: TestTube,
      color: 'from-blue-400 to-blue-600',
      methods: [
        'ICP-MS (유도결합 플라즈마 질량분석기)',
        'TOC 분석기 (총유기탄소 측정기)',
        '전기전도도계',
        'pH 미터',
        '입자 계수기',
        'LAL 시약 키트',
      ],
    },
  ];

  const qualityManagement = [
    {
      icon: Ruler,
      title: '장비 검교정',
      desc: '연 1회 이상 공인 기관 검교정',
      color: 'from-primary-400 to-primary-600',
      details: ['공인 검교정 기관', '정기적 검교정 주기', '교정 기록 유지', '장비 성능 확인'],
    },
    {
      icon: Activity,
      title: '시험 검사',
      desc: '매 검사마다 양성 대조군 사용',
      color: 'from-green-400 to-green-600',
      details: ['양성 대조군 검증', '음성 대조군 확인', '시험 정확도 검증', '결과 신뢰성 확보'],
    },
    {
      icon: Award,
      title: '결과 검증',
      desc: '이중 검사 및 교차 검증 실시',
      color: 'from-blue-400 to-blue-600',
      details: ['이중 검사 실시', '교차 검증 시스템', '결과 일관성 확인', '오류 최소화'],
    },
  ];

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case '극히 높음':
        return { text: '극히 높음', color: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' };
      case '매우 높음':
        return { text: '매우 높음', color: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' };
      case '높음':
        return { text: '높음', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300' };
      case '중간':
        return { text: '중간', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' };
      default:
        return { text: '낮음', color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' };
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              검사기준
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              혈액투석용수 품질 기준 및 검사 방법의 체계적 관리
            </motion.p>
          </motion.div>

          {/* Legal Standards Overview */}
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
                법적 기준 개요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                환자 안전을 위한 엄격한 품질 기준 체계
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {legalStandards.map((standard, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${standard.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <standard.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {standard.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {standard.desc}
                  </p>

                  <div className="space-y-3">
                    {standard.details.map((detail, detailIndex) => (
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

          {/* Physicochemical Standards */}
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
                물리화학적 검사 기준
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
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">기준치</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">측정 방법</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">법적 근거</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">중요성</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicochemicalStandards.map((item, index) => (
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
                            {item.standard}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-secondary-600 dark:text-secondary-400">
                            {item.method}
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
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* Microbiological Standards */}
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
                미생물학적 검사 기준
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {microbiologicalStandards.map((item, index) => {
                const badge = getRiskBadge(item.risk);
                return (
                  <motion.div
                    key={index}
                    initial={{ x: index === 0 ? -30 : index === 1 ? 0 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl mb-6 shadow-medium`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {item.item}
                    </h3>

                    <div className="mb-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                        위험도: {badge.text}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">기준치</span>
                        <span className="font-semibold text-primary-600 dark:text-primary-400">{item.standard}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">측정 방법</span>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">{item.method}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">중요성</span>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">{item.importance}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Heavy Metals and Hazardous Substances */}
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
                중금속 및 유해물질 기준
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
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">물질명</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">기준치</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">측정 방법</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-gray-200">건강 영향</th>
                      <th className="text-center py-4 px-6 font-bold text-gray-800 dark:text-gray-200">독성 등급</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heavyMetalStandards.map((item, index) => {
                      const badge = getRiskBadge(item.toxicity);
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
                                {item.substance}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="font-medium text-secondary-700 dark:text-secondary-300">
                              {item.standard}
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

          {/* Testing Methods and Equipment */}
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
                검사 방법 및 장비
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testingMethods.map((category, index) => (
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
                    {category.category}
                  </h3>

                  <div className="space-y-3">
                    {category.methods.map((method, methodIndex) => (
                      <motion.div
                        key={methodIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: methodIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-sm text-secondary-700 dark:text-secondary-300">
                          {method}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Management and Verification */}
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
                품질 관리 및 검증
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                검사 결과의 정확성과 신뢰성을 보장하는 체계적인 품질 관리 시스템
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {qualityManagement.map((qm, index) => (
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
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${qm.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <qm.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {qm.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      {qm.desc}
                    </p>
                    <div className="space-y-2">
                      {qm.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {detail}
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
                  <Shield className="w-5 h-5 inline mr-2" />
                  품질 관리 매뉴얼
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  기준 초과 대응 가이드
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DialysisStandards;