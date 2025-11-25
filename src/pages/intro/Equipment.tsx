import { motion } from 'framer-motion';
import { Microscope, TestTube, Activity, Zap, Settings, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Equipment = () => {
  const equipmentCategories = [
    {
      category: '분광분석 장비',
      icon: Activity,
      color: 'from-blue-400 to-blue-600',
      description: '고정밀 분광 분석으로 미량 물질까지 정확하게 측정',
      items: [
        {
          name: '고성능 액체 크로마토그래프 질량분석기 (LC-MS/MS)',
          specs: '감도: 1pg/mL, 분석시간: 15분',
          features: ['다중 반응 모니터링', '고감도 분석', '자동화 시스템']
        },
        {
          name: '유도결합플라즈마 질량분석기 (ICP-MS)',
          specs: '검출한계: 0.1ppt, 동시 분석: 70원소',
          features: ['다원소 동시 분석', '저농도 검출', '동위원소 분석']
        },
        {
          name: '원자흡광광도계 (AAS)',
          specs: '정밀도: 0.1%, 측정범위: ppm~%',
          features: ['그래파이트炉', '수은/수소화물 분석', '자동 희석']
        },
        {
          name: '자외가시분광광도계 (UV-Vis)',
          specs: '파장범위: 190-1100nm, 해상도: 0.1nm',
          features: ['이중 빔 방식', '동적 측정', '다중 셀 지원']
        }
      ]
    },
    {
      category: '크로마토그래피 장비',
      icon: TestTube,
      color: 'from-green-400 to-green-600',
      description: '정밀한 분리 분석으로 복합 시료의 성분을 분해',
      items: [
        {
          name: '가스 크로마토그래프 질량분석기 (GC-MS)',
          specs: '질량범위: 1.5-1000amu, 감도: 1pg',
          features: ['전자충격 이온화', '라이브러리 검색', '헤드스페이스 분석']
        },
        {
          name: '고성능 액체 크로마토그래프 (HPLC)',
          specs: '압력: 600bar, 유속: 0.001-10mL/min',
          features: ['다중 검출기', '자동 샘플러', '온도 제어 컬럼']
        },
        {
          name: '이온 크로마토그래프 (IC)',
          specs: '검출한계: 0.01mg/L, 분석시간: 10분',
          features: ['음이온/양이온 분석', '억제 전도도 검출', '자동 재생']
        },
        {
          name: '크기배제 크로마토그래프 (SEC)',
          specs: '분자량 범위: 100-10,000kDa',
          features: ['단백질 분자량 측정', '다중 검출', '자동 분석']
        }
      ]
    },
    {
      category: '환경측정 장비',
      icon: Microscope,
      color: 'from-purple-400 to-purple-600',
      description: '실시간 환경 모니터링으로 안전한 작업환경 조성',
      items: [
        {
          name: '실내공기질 자동측정기',
          specs: '측정항목: VOCs, CO2, PM2.5',
          features: ['실시간 모니터링', '데이터 로깅', '경보 시스템']
        },
        {
          name: '소음진동 측정기',
          specs: '주파수범위: 10Hz-20kHz, 정밀도: 0.1dB',
          features: ['FFT 분석', '옥타브 분석', '시간 가중']
        },
        {
          name: '조도 측정기',
          specs: '측정범위: 0.01-200,000lux',
          features: ['색온도 측정', 'CIE 좌표', '스펙트럼 분석']
        },
        {
          name: '온습도 측정기',
          specs: '온도범위: -40~+120°C, 습도범위: 0~100%',
          features: ['고정밀 센서', '데이터 로거', '무선 전송']
        }
      ]
    },
    {
      category: '석면 분석 장비',
      icon: Zap,
      color: 'from-orange-400 to-orange-600',
      description: '첨단 현미경 기술로 석면 섬유를 정밀하게 분석',
      items: [
        {
          name: '편광현미경 (PLM)',
          specs: '배율: 40x-1000x, 해상도: 0.2μm',
          features: ['편광 분석', '섬유 카운팅', '형태 분석']
        },
        {
          name: '주사전자현미경 (SEM)',
          specs: '배율: 10x-300,000x, 해상도: 1nm',
          features: ['고해상도 영상', 'EDS 분석', '3D 표면 분석']
        },
        {
          name: '에너지분산형 X선분석기 (EDS)',
          specs: '검출원소: B-U, 해상도: 125eV',
          features: ['원소 정량 분석', '매핑 분석', '라인 스캔']
        },
        {
          name: 'X선 회절분석기 (XRD)',
          specs: '각도범위: 5-120°, 해상도: 0.01°',
          features: ['결정구조 분석', '상 분석', '정량 분석']
        }
      ]
    }
  ];

  const qualityFeatures = [
    { icon: Settings, title: '정기 검교정', desc: '국제표준에 따른 월별/분기별 검교정' },
    { icon: Shield, title: '품질 인증', desc: 'ISO 17025 인증 장비로 신뢰성 보장' },
    { icon: TrendingUp, title: '성능 모니터링', desc: '실시간 성능 추적 및 데이터 관리' },
    { icon: CheckCircle, title: '정확도 검증', desc: '표준물질을 이용한 정기 검증 실시' },
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
              <Microscope className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              보유 장비
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              최첨단 분석 장비로 정확하고 신뢰할 수 있는 결과를 제공합니다
            </motion.p>
          </motion.div>

          {/* Quality Assurance */}
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
                품질 보증 체계
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                국제표준에 따른 엄격한 장비 관리로 최고 수준의 분석 품질을 유지합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl mb-4 shadow-medium"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Equipment Categories */}
          <div className="space-y-16">
            {equipmentCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6 shadow-medium`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {category.category}
                  </h2>

                  <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-tight">
                        {item.name}
                      </h3>

                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
                          <Settings className="w-4 h-4" />
                          주요 스펙
                        </div>
                        <p className="text-secondary-700 dark:text-secondary-300 font-medium">
                          {item.specs}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          주요 특징
                        </h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: itemIndex * 0.1 + featureIndex * 0.05, duration: 0.4 }}
                              className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Equipment Management */}
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
                체계적인 장비 관리 시스템
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                모든 분석 장비는 국제표준에 따른 엄격한 관리 체계를 통해 최고 수준의 성능과 정확도를 유지합니다.
                정기적인 검교정과 성능 검증으로 신뢰할 수 있는 분석 결과를 제공합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  장비 사양서 다운로드
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  분석 서비스 문의
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Equipment;