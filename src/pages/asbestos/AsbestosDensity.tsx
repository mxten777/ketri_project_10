import { motion } from 'framer-motion';
import { Microscope, Shield, TestTube, Award, Target, FileText, Clock, Calculator } from 'lucide-react';

const AsbestosDensity = () => {
  const serviceOverview = [
    {
      icon: Microscope,
      title: '정밀 분석',
      desc: '고해상도 현미경으로 정확한 석면 식별',
      color: 'from-blue-400 to-blue-600',
      details: ['위상차 현미경', '주사전자현미경', '편광 현미경', 'X선 회절 분석'],
    },
    {
      icon: Shield,
      title: '안전 우선',
      desc: '전문가의 안전한 샘플링 및 분석',
      color: 'from-red-400 to-red-600',
      details: ['개인보호구 착용', '안전 절차 준수', '위험성 평가', '응급 대응 체계'],
    },
    {
      icon: Award,
      title: '공인 성적서',
      desc: '국가공인 검사기관 인증 결과',
      color: 'from-green-400 to-green-600',
      details: ['KS 인증', 'ISO/IEC 17025', '공인 성적서', '법적 효력'],
    },
    {
      icon: Clock,
      title: '신속 분석',
      desc: '샘플링 후 7일 이내 결과 보고',
      color: 'from-purple-400 to-purple-600',
      details: ['긴급 분석 가능', '우선 처리 옵션', '실시간 진행 상황', '빠른 의사결정'],
    },
  ];

  const measurementMethods = [
    {
      method: '위상차 현미경 분석 (PCM)',
      description: '석면 섬유의 굴절률 차이를 이용한 식별 및 계수',
      advantages: ['빠른 분석 속도', '비용 효율성', '기초 screening에 적합'],
      icon: '🔬',
      color: 'from-blue-400 to-blue-600',
      accuracy: '85-90%',
    },
    {
      method: '주사전자현미경 분석 (SEM)',
      description: '고해상도 이미지로 석면의 미세 구조 관찰 및 정량 분석',
      advantages: ['높은 정확도', '세부 구조 분석', '저농도 검출 가능'],
      icon: '⚡',
      color: 'from-green-400 to-green-600',
      accuracy: '95-98%',
    },
    {
      method: '에너지분산 X선 분석 (EDX)',
      description: '석면의 화학 조성을 분석하여 종류를 정확히 식별',
      advantages: ['정확한 종류 식별', '화학 조성 분석', '복합 물질 구분'],
      icon: '🧪',
      color: 'from-purple-400 to-purple-600',
      accuracy: '98-99%',
    },
    {
      method: '편광 현미경 분석 (PLM)',
      description: '석면의 광학 특성을 이용한 종류별 식별 및 농도 측정',
      advantages: ['종류별 특성 분석', '비용 효율성', '현장 적용 가능'],
      icon: '🎯',
      color: 'from-orange-400 to-orange-600',
      accuracy: '90-95%',
    },
  ];

  const asbestosTypes = [
    {
      type: '크리소타일 (백석면)',
      formula: 'Mg₃Si₂O₅(OH)₄',
      risk: '중간',
      uses: '석면 시멘트, 프레이크, 텍스타일',
      color: 'from-blue-400 to-blue-600',
      icon: '🌀',
    },
    {
      type: '크로시돌라이트 (청석면)',
      formula: 'Na₂Fe³⁺₂Fe²⁺₃Si₈O₂₂(OH)₂',
      risk: '매우 높음',
      uses: '단열재, 내화물, 필터',
      color: 'from-red-400 to-red-600',
      icon: '🔴',
    },
    {
      type: '아모사이트 (갈색석면)',
      formula: '(Mg,Fe)₇Si₈O₂₂(OH)₂',
      risk: '높음',
      uses: '단열재, 내화 보드, 파이프',
      color: 'from-orange-400 to-orange-600',
      icon: '🟤',
    },
    {
      type: '안토필라이트',
      formula: 'Mg₇Si₈O₂₂(OH)₂',
      risk: '중간',
      uses: '특수 용도, 연구용',
      color: 'from-green-400 to-green-600',
      icon: '🟢',
    },
    {
      type: '트레몰라이트',
      formula: 'Ca₂Mg₅Si₈O₂₂(OH)₂',
      risk: '낮음',
      uses: '자연 발생, 드물게 사용',
      color: 'from-gray-400 to-gray-600',
      icon: '⚪',
    },
    {
      type: '악티놀라이트',
      formula: 'Ca₂(Mg,Fe)₅Si₈O₂₂(OH)₂',
      risk: '중간',
      uses: '제련 부산물, 드물게 사용',
      color: 'from-purple-400 to-purple-600',
      icon: '🟣',
    },
  ];

  const safetyStandards = [
    {
      standard: '실내공기질 관리법',
      limit: '0.01 섬유/cm³ (8시간 TWA)',
      description: '실내 환경 노출 기준',
      icon: '🏢',
      color: 'from-blue-400 to-blue-600',
    },
    {
      standard: '산업안전보건법',
      limit: '0.1 섬유/cm³ (8시간 TWA)',
      description: '작업장 노출 기준',
      icon: '🏭',
      color: 'from-orange-400 to-orange-600',
    },
    {
      standard: 'OSHA 미국 산업안전보건청',
      limit: '0.1 섬유/cm³ (8시간 TWA)',
      description: '국제 기준 준용',
      icon: '🇺🇸',
      color: 'from-red-400 to-red-600',
    },
    {
      standard: 'WHO 세계보건기구',
      limit: '0.0001 섬유/cm³ (연간 평균)',
      description: '건강 영향 최소화 기준',
      icon: '🌍',
      color: 'from-green-400 to-green-600',
    },
  ];

  const analysisProcess = [
    {
      step: 1,
      title: '샘플링 계획 수립',
      desc: '측정 대상 및 방법 결정',
      icon: Target,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '안전한 샘플링',
      desc: '전문가가 현장에서 샘플 채취',
      icon: Shield,
      color: 'from-red-400 to-red-600',
    },
    {
      step: 3,
      title: '실험실 분석',
      desc: '다양한 방법으로 정밀 분석',
      icon: Microscope,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 4,
      title: '결과 보고서 작성',
      desc: '상세 분석 결과 및 권고사항',
      icon: FileText,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const getRiskBadge = (risk: string) => {
    switch (risk) {
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
              <Microscope className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              석면농도측정
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              최첨단 분석 기술로 석면 농도를 정밀하게 측정하는 전문 서비스
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
                서비스 특징
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
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

          {/* Asbestos Types */}
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
                석면 종류 및 특성
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {asbestosTypes.map((asbestos, index) => {
                const badge = getRiskBadge(asbestos.risk);
                return (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${asbestos.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{asbestos.icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {asbestos.type}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 font-mono">
                          {asbestos.formula}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                        건강 위험도: {badge.text}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">주요 용도</span>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">{asbestos.uses}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Measurement Methods */}
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
                측정 방법 및 장비
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {measurementMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {method.method}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">정확도</span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{method.accuracy}</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2 block">장점</span>
                      <div className="flex flex-wrap gap-2">
                        {method.advantages.map((advantage, advIndex) => (
                          <span key={advIndex} className="text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                            {advantage}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Standards */}
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
                안전 기준 및 규제
              </motion.h2>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {safetyStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${standard.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{standard.icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {standard.standard}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {standard.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">노출 기준: </span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{standard.limit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Analysis Process */}
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
                분석 프로세스
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {analysisProcess.map((step, index) => (
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

          {/* CTA Section */}
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
                <Calculator className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                전문적인 석면농도측정 서비스
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                최첨단 분석 장비와 전문가 팀으로 정확하고 신뢰할 수 있는 석면 농도 측정 결과를 제공합니다
              </p>

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
                  <Calculator className="w-5 h-5 inline mr-2" />
                  견적 요청하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <TestTube className="w-5 h-5 inline mr-2" />
                  샘플 분석 의뢰
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AsbestosDensity;