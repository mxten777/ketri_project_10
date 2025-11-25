import { motion } from 'framer-motion';
import { Palette, Type, Shield, Award, Target, Heart, Eye, Download } from 'lucide-react';

const CI = () => {
  const colorPalette = [
    { name: 'Primary Blue', hex: '#1e40af', rgb: 'rgb(30, 64, 175)', usage: '메인 로고, 헤더, 강조 텍스트' },
    { name: 'Secondary Green', hex: '#059669', rgb: 'rgb(5, 150, 105)', usage: '환경 관련 콘텐츠, 성공 메시지' },
    { name: 'Accent Orange', hex: '#ea580c', rgb: 'rgb(234, 88, 12)', usage: '주의사항, 경고 메시지' },
    { name: 'Neutral Gray', hex: '#6b7280', rgb: 'rgb(107, 114, 128)', usage: '본문 텍스트, 보조 요소' },
  ];

  const brandValues = [
    {
      icon: Shield,
      title: '신뢰성',
      desc: '30년의 전문성과 정확한 분석으로 쌓아온 고객 신뢰',
      color: 'from-blue-400 to-blue-600',
      stats: '99.9% 정확도',
    },
    {
      icon: Award,
      title: '전문성',
      desc: '최첨단 장비와 전문 인력으로 최고 수준의 서비스 제공',
      color: 'from-green-400 to-green-600',
      stats: '100+ 전문가',
    },
    {
      icon: Target,
      title: '혁신성',
      desc: '지속적인 기술 개발과 새로운 솔루션으로 미래를 선도',
      color: 'from-purple-400 to-purple-600',
      stats: '50+ 특허 보유',
    },
    {
      icon: Heart,
      title: '배려',
      desc: '고객의 건강과 안전을 최우선으로 생각하는 마음가짐',
      color: 'from-pink-400 to-red-500',
      stats: '10,000+ 고객',
    },
  ];

  const guidelines = [
    {
      icon: Eye,
      title: '가시성 확보',
      desc: '로고 주변에 충분한 여백을 두어 가시성을 확보하세요',
      items: ['최소 여백: 로고 높이의 1/4', '배경색과 대비 고려', '명확한 식별 가능'],
    },
    {
      icon: Palette,
      title: '색상 일관성',
      desc: '지정된 브랜드 색상을 정확히 사용하여 일관성을 유지하세요',
      items: ['Pantone 색상 참조', '디지털 색상 값 준수', '색각 이상 고려'],
    },
    {
      icon: Type,
      title: '타이포그래피',
      desc: '브랜드 폰트를 일관되게 사용하여 전문성을 표현하세요',
      items: ['Inter 기본 폰트', 'Playfair Display 제목', '적절한 행간 조정'],
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
              <Palette className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              CI 소개
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              한국환경안전연구소의 브랜드 아이덴티티와 디자인 가이드라인
            </motion.p>
          </motion.div>

          {/* Logo Showcase */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
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
                메인 로고
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                신뢰와 전문성을 상징하는 한국환경안전연구소의 얼굴
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect rounded-3xl p-12 text-center shadow-large"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full mb-8 shadow-medium"
              >
                <span className="text-8xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  K
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  한국환경안전연구소
                </h3>
                <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-6">
                  Korea Environment & Safety Research Institute
                </p>
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    로고 다운로드
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  >
                    가이드라인 보기
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Color Palette */}
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
                브랜드 색상
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                브랜드 아이덴티티를 표현하는 핵심 색상 팔레트
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-xl shadow-medium border-2 border-gray-200 dark:border-gray-600"
                      style={{ backgroundColor: color.hex }}
                    ></motion.div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">{color.name}</h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">{color.hex}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{color.rgb}</p>
                  <p className="text-xs text-secondary-500 dark:text-secondary-500">{color.usage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand Values */}
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
                브랜드 가치
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                한국환경안전연구소가 추구하는 핵심 가치와 원칙들
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 shadow-medium`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-4">
                    {value.desc}
                  </p>
                  <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {value.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
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
                타이포그래피
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                브랜드의 목소리를 전달하는 글꼴 시스템
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 shadow-large"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    헤드라인 폰트 (Playfair Display)
                  </h3>
                  <div className="space-y-4">
                    <p className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      한국환경안전연구소
                    </p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      첨단 환경·안전 솔루션의 선두주자
                    </p>
                    <p className="text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                      신뢰와 전문성으로 미래를 선도합니다
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    본문 폰트 (Inter)
                  </h3>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
                    <p className="text-lg leading-relaxed">
                      한국환경안전연구소는 1995년 설립 이래, 환경과 안전 분야에서 국내 최고 수준의 전문성을 인정받아 왔습니다.
                    </p>
                    <p className="text-base leading-relaxed">
                      최첨단 분석 장비와 숙련된 전문 인력을 바탕으로 산업보건컨설팅, 먹는물 검사, 혈액투석용수 검사 등 다양한 분야에서 신뢰할 수 있는 서비스를 제공하고 있습니다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      우리는 '안전한 환경, 건강한 미래'라는 비전을 실현하기 위해 끊임없이 노력하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Guidelines */}
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
                CI 사용 가이드라인
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                브랜드 일관성을 유지하기 위한 필수 가이드라인
              </motion.p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {guidelines.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl mb-6 shadow-medium"
                  >
                    <guide.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {guide.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-6">
                    {guide.desc}
                  </p>

                  <ul className="space-y-3">
                    {guide.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                브랜드 가이드 다운로드
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                CI 가이드라인과 로고 파일을 다운로드하여 브랜드 일관성을 유지하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  CI 가이드라인 다운로드
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  문의하기
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CI;