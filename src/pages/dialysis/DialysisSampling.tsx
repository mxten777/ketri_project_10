import { motion } from 'framer-motion';
import { Droplets, Shield, Ruler, Clock, FileText, AlertTriangle, CheckCircle, GraduationCap, Award, Search, Thermometer } from 'lucide-react';

const DialysisSampling = () => {
  const principles = [
    {
      icon: Shield,
      title: '무균 절차',
      desc: '오염 방지',
      color: 'from-blue-400 to-blue-600',
      details: ['개인위생 철저', '도구 소독', '청결한 환경', '오염 최소화'],
    },
    {
      icon: Ruler,
      title: '표준화',
      desc: '일관성 확보',
      color: 'from-green-400 to-green-600',
      details: ['표준 절차 준수', '동일한 방법', '품질 일관성', '신뢰성 확보'],
    },
    {
      icon: Clock,
      title: '적시성',
      desc: '신선도 유지',
      color: 'from-purple-400 to-purple-600',
      details: ['즉시 채수', '온도 유지', '신속 운반', '적기 검사'],
    },
    {
      icon: FileText,
      title: '기록 관리',
      desc: '추적성 확보',
      color: 'from-orange-400 to-orange-600',
      details: ['상세 기록', '추적 가능', '품질 관리', '책임 소재'],
    },
  ];

  const samplingPoints = [
    {
      type: '원수 (급수 전)',
      icon: '💧',
      color: 'from-blue-400 to-blue-600',
      points: ['정수장 출수구', '병원 급수관 입구', 'RO 시스템 전단'],
    },
    {
      type: '처리수 (정수 후)',
      icon: '🚰',
      color: 'from-green-400 to-green-600',
      points: ['RO 시스템 출수구', '최종 사용 지점', '저장 탱크'],
    },
  ];

  const samplingTiming = [
    {
      icon: '🌅',
      title: '정기 채수',
      desc: '법정 검사 주기',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: '⚡',
      title: '수시 채수',
      desc: '이상 발생 시',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: '🔧',
      title: '유지보수 후',
      desc: '시스템 점검 시',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const procedures = [
    {
      step: '01',
      title: '준비 및 소독',
      color: 'from-primary-500 to-primary-600',
      items: [
        '채수 담당자 개인위생 철저히 유지 (손 씻기, 장갑 착용)',
        '채수 용기 및 도구 70% 에탄올 또는 0.5% 차아염소산나트륨으로 소독',
        '채수 지점 주변 청소 및 소독',
        '필요한 경우 샘플링 밸브 설치 및 소독',
        '채수 기록표 준비 및 채수 정보 기록 시작',
      ],
    },
    {
      step: '02',
      title: '채수 실행',
      color: 'from-green-500 to-green-600',
      items: [
        '시스템 정상 작동 상태에서 채수 실시',
        '유량이 일정한 상태에서 1-2분간 사전 배수',
        '채수 용기를 채수 지점에 직접 연결하여 채수',
        '공기 접촉 최소화 및 오염 방지',
        '채수량: 미생물 검사 250mL, 화학성분 검사 500mL 이상',
      ],
    },
    {
      step: '03',
      title: '보관 및 운반',
      color: 'from-blue-500 to-blue-600',
      items: [
        '채수 즉시 용기 밀봉 및 라벨링',
        '미생물 검사 시료는 4℃ 이하 냉장 보관',
        '화학성분 검사 시료는 실온 또는 냉장 보관',
        '운반 중 온도 변화 최소화',
        '검사실 도착 즉시 검사 실시 (미생물: 24시간 이내)',
      ],
    },
  ];

  const containers = [
    {
      type: '미생물 검사',
      container: '멸균 유리 또는 폴리프로필렌 용기',
      icon: '🧪',
      color: 'from-red-400 to-red-600',
    },
    {
      type: '화학성분 검사',
      container: '산 처리 유리 또는 HDPE 용기',
      icon: '⚗️',
      color: 'from-blue-400 to-blue-600',
    },
    {
      type: '내독소 검사',
      container: '특정 내독소 용기 (pyrogen-free)',
      icon: '🦠',
      color: 'from-green-400 to-green-600',
    },
  ];

  const tools = [
    {
      type: '샘플링 밸브',
      tool: '무균 샘플링 밸브 또는 멸균 튜브',
      icon: '🔧',
      color: 'from-orange-400 to-orange-600',
    },
    {
      type: '소독 용품',
      tool: '70% 에탄올, 차아염소산나트륨 용액',
      icon: '🧴',
      color: 'from-purple-400 to-purple-600',
    },
    {
      type: '보호 장구',
      tool: '장갑, 마스크, 보호복',
      icon: '🛡️',
      color: 'from-gray-400 to-gray-600',
    },
  ];

  const qualityManagement = [
    {
      title: '품질 관리 항목',
      icon: Shield,
      color: 'from-primary-400 to-primary-600',
      items: [
        '채수자 교육 및 자격 확인',
        '용기 및 도구 정기 검교정',
        '채수 절차 준수 여부 점검',
        '시료 보관 조건 모니터링',
        '운반 시간 및 조건 기록',
        '이상 발생 시 즉각 보고 체계',
      ],
    },
    {
      title: '기록 사항',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
      items: [
        '채수 일시, 장소, 담당자',
        '시스템 작동 상태 및 유량',
        '채수 방법 및 용기 종류',
        '보관 및 운반 조건',
        '특이사항 및 이상 유무',
        '시료 도착 시간 및 상태',
      ],
    },
  ];

  const precautions = [
    {
      type: '금지 사항',
      icon: AlertTriangle,
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20',
      items: [
        '소독되지 않은 용기 사용',
        '공기 접촉이 많은 채수 방법',
        '시스템 정지 상태에서의 채수',
        '채수 후 장시간 실온 방치',
        '부적절한 용기 재사용',
        '채수 정보 불충분한 기록',
      ],
    },
    {
      type: '권장 사항',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
      items: [
        '표준 운영 절차(SOP) 철저 준수',
        '이중 채수로 정확성 검증',
        '실시간 온도 모니터링',
        '전문 교육받은 인력 투입',
        '품질 관리 체계 구축',
        '지속적인 개선 활동 실시',
      ],
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: '교육 프로그램',
      desc: '연 1회 정기 교육 및 실습 훈련',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Award,
      title: '자격 인증',
      desc: '채수 담당자 자격 검증',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Search,
      title: '감사 및 평가',
      desc: '정기 감사 및 성과 평가',
      color: 'from-green-400 to-green-600',
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
              <Droplets className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              채수방법
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              혈액투석용수 시료 채취의 표준 절차 및 품질 관리
            </motion.p>
          </motion.div>

          {/* Principles and Importance */}
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
                채수 원칙 및 중요성
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                검사 결과의 정확성과 신뢰성을 결정하는 핵심 과정
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${principle.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <principle.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {principle.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {principle.desc}
                  </p>

                  <div className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
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

          {/* Sampling Points and Timing */}
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
                채수 지점 및 시기
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {samplingPoints.map((point, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${point.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <span className="text-2xl">{point.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {point.type}
                  </h3>

                  <div className="space-y-3">
                    {point.points.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-secondary-700 dark:text-secondary-300">
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  채수 시기 기준
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {samplingTiming.map((timing, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${timing.color} rounded-xl mb-4 shadow-medium mx-auto`}
                    >
                      <span className="text-xl">{timing.icon}</span>
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {timing.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {timing.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Procedures */}
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
                채수 절차 및 방법
              </motion.h2>
            </div>

            <div className="space-y-8">
              {procedures.map((procedure, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${procedure.color} rounded-xl flex items-center justify-center shadow-medium`}
                    >
                      <span className="font-bold text-white">{procedure.step}</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {procedure.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {procedure.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Containers and Tools */}
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
                채수 용기 및 도구
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
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  용기 종류
                </h3>

                <div className="space-y-4">
                  {containers.map((container, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${container.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-lg">{container.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-800 dark:text-secondary-200">
                          {container.type}
                        </h4>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {container.container}
                        </p>
                      </div>
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
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  채수 도구
                </h3>

                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-lg">{tool.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-800 dark:text-secondary-200">
                          {tool.type}
                        </h4>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {tool.tool}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quality Management */}
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
                품질 관리 및 기록
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {qualityManagement.map((qm, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${qm.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <qm.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {qm.title}
                  </h3>

                  <div className="space-y-3">
                    {qm.items.map((item, itemIndex) => (
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

          {/* Precautions */}
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
                채수 시 주의사항
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {precautions.map((caution, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl p-8 shadow-soft hover:shadow-large border transition-all duration-300 ${caution.bgColor} border-gray-200 dark:border-gray-700`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${caution.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <caution.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {caution.type}
                  </h3>

                  <div className="space-y-3">
                    {caution.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                          caution.type === '금지 사항' ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                        <span className={`text-sm ${
                          caution.type === '금지 사항'
                            ? 'text-red-800 dark:text-red-200'
                            : 'text-green-800 dark:text-green-200'
                        }`}>
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education and Certification */}
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
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                채수 교육 및 인증
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                전문성 있는 채수 작업을 위한 체계적인 교육 및 자격 인증 시스템
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {education.map((edu, index) => (
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
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <edu.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {edu.desc}
                    </p>
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
                  <Thermometer className="w-5 h-5 inline mr-2" />
                  채수 매뉴얼 다운로드
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5 inline mr-2" />
                  교육 프로그램 안내
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DialysisSampling;