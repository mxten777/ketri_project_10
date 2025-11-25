import { motion } from 'framer-motion';
import { Shield, Eye, FileCheck, HardHat, Recycle, Award, CheckCircle, Calculator, ClipboardList } from 'lucide-react';

const AsbestosRemoval = () => {
  const serviceOverview = [
    {
      icon: Shield,
      title: '안전 우선 감리',
      desc: '석면 해체 작업의 안전성을 최우선으로 감독',
      color: 'from-red-400 to-red-600',
      details: ['위험성 평가', '안전 계획 수립', '비상 대응 체계', '작업자 보호'],
    },
    {
      icon: Eye,
      title: '전문 현장 감독',
      desc: '숙련된 감리사가 작업 현장을 실시간 모니터링',
      color: 'from-blue-400 to-blue-600',
      details: ['연속 현장 감독', '절차 준수 확인', '품질 관리', '문제 즉시 해결'],
    },
    {
      icon: FileCheck,
      title: '법규 준수 보장',
      desc: '모든 관련 법규 및 기준의 철저한 이행 감독',
      color: 'from-green-400 to-green-600',
      details: ['환경법 준수', '노동법 준수', '건설법 준수', '보고 의무 이행'],
    },
    {
      icon: Recycle,
      title: '환경 친화 처리',
      desc: '석면 폐기물의 안전하고 친환경적인 처리 감독',
      color: 'from-purple-400 to-purple-600',
      details: ['폐기물 분류', '전문 처리 업체', '환경 영향 최소화', '추적 관리'],
    },
  ];

  const supervisionStages = [
    {
      stage: '사전 준비 단계',
      description: '해체 작업 전 철저한 준비와 계획 수립',
      icon: ClipboardList,
      color: 'from-blue-400 to-blue-600',
      tasks: ['석면 함유량 조사', '작업 계획 수립', '안전 대책 마련', '관계자 협의'],
      duration: '1-2주',
    },
    {
      stage: '작업 실행 단계',
      description: '현장 작업의 실시간 감독 및 품질 관리',
      icon: HardHat,
      color: 'from-orange-400 to-orange-600',
      tasks: ['작업자 안전 확인', '절차 준수 감독', '비산 모니터링', '품질 검사'],
      duration: '작업 기간',
    },
    {
      stage: '완료 검증 단계',
      description: '작업 완료 후 철저한 검증 및 보고',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
      tasks: ['청소 상태 확인', '공기질 측정', '문서화 완료', '최종 보고서'],
      duration: '1-3일',
    },
    {
      stage: '사후 관리 단계',
      description: '작업 후 지속적인 모니터링 및 관리',
      icon: Eye,
      color: 'from-purple-400 to-purple-600',
      tasks: ['정기 점검', '유지보수 가이드', '문제 해결 지원', '법적 보고'],
      duration: '3-6개월',
    },
  ];

  const safetyMeasures = [
    {
      measure: '작업 구역 격리',
      description: '석면 비산 방지를 위한 완전한 작업 구역 격리',
      icon: '🚧',
      color: 'from-red-400 to-red-600',
      details: ['플라스틱 시트 설치', '음압 시스템', '출입 통제', '경고 표지판'],
    },
    {
      measure: '개인보호구 착용',
      description: '작업자 및 관계자의 철저한 보호구 착용 감독',
      icon: '🛡️',
      color: 'from-blue-400 to-blue-600',
      details: ['방진 마스크', '보호복', '안전 고글', '장갑 및 신발'],
    },
    {
      measure: '비산 모니터링',
      description: '실시간 석면 비산 농도 모니터링 및 관리',
      icon: '📊',
      color: 'from-green-400 to-green-600',
      details: ['연속 측정', '임계치 알림', '데이터 기록', '대응 조치'],
    },
    {
      measure: '폐기물 안전 처리',
      description: '석면 폐기물의 전문적이고 안전한 처리 감독',
      icon: '♻️',
      color: 'from-purple-400 to-purple-600',
      details: ['밀봉 포장', '전용 운반', '특정 매립지', '처리 확인서'],
    },
  ];

  const legalRequirements = [
    {
      law: '석면안전관리법',
      requirement: '석면 작업 신고 및 허가',
      description: '석면 해체 작업 시 사전 신고 및 허가 의무',
      icon: '📋',
      color: 'from-blue-400 to-blue-600',
    },
    {
      law: '건설산업기본법',
      requirement: '전문 감리사 배치',
      description: '일정 규모 이상 해체 작업 시 감리사 의무 배치',
      icon: '👷',
      color: 'from-green-400 to-green-600',
    },
    {
      law: '폐기물관리법',
      requirement: '특정 폐기물 처리',
      description: '석면 폐기물의 특정 폐기물로서의 처리 의무',
      icon: '🗂️',
      color: 'from-orange-400 to-orange-600',
    },
    {
      law: '산업안전보건법',
      requirement: '작업자 건강 관리',
      description: '작업자 건강 진단 및 보호 조치 의무',
      icon: '🏥',
      color: 'from-red-400 to-red-600',
    },
  ];

  const expertTeam = [
    {
      role: '석면 감리사',
      qualification: '석면 안전관리사 자격증 보유',
      experience: '5년 이상 현장 경험',
      icon: Award,
      color: 'from-blue-400 to-blue-600',
    },
    {
      role: '안전 관리자',
      qualification: '산업안전기사 자격증',
      experience: '석면 작업 안전 관리 전문',
      icon: Shield,
      color: 'from-red-400 to-red-600',
    },
    {
      role: '환경 모니터링 담당',
      qualification: '환경기사 자격증',
      experience: '공기질 및 환경 측정 전문',
      icon: Eye,
      color: 'from-green-400 to-green-600',
    },
    {
      role: '품질 관리자',
      qualification: '건설 품질 관리 경력',
      experience: '해체 작업 품질 관리 전문',
      icon: CheckCircle,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const workProcess = [
    {
      step: 1,
      title: '현장 조사 및 평가',
      desc: '석면 함유량 및 작업 조건 사전 조사',
      icon: ClipboardList,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: '작업 계획 수립',
      desc: '안전하고 효율적인 작업 계획 수립',
      icon: FileCheck,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 3,
      title: '안전 조치 설치',
      desc: '작업 구역 격리 및 안전 시설 설치',
      icon: Shield,
      color: 'from-orange-400 to-orange-600',
    },
    {
      step: 4,
      title: '작업 실행 감독',
      desc: '실시간 현장 감독 및 문제 해결',
      icon: Eye,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 5,
      title: '품질 및 안전 검증',
      desc: '작업 완료 후 철저한 검증 실시',
      icon: CheckCircle,
      color: 'from-red-400 to-red-600',
    },
    {
      step: 6,
      title: '최종 보고 및 관리',
      desc: '완료 보고서 작성 및 사후 관리',
      icon: Award,
      color: 'from-indigo-400 to-indigo-600',
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              석면해체제거감리
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              석면 해체 제거 작업의 안전성과 법규 준수를 전문적으로 감독하는 서비스
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

          {/* Supervision Stages */}
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
                감리 단계
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {supervisionStages.map((stage, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stage.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <stage.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {stage.stage}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {stage.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">소요 기간</span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{stage.duration}</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2 block">주요 업무</span>
                      <div className="flex flex-wrap gap-2">
                        {stage.tasks.map((task, taskIndex) => (
                          <span key={taskIndex} className="text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Measures */}
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
                안전 조치
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
                {safetyMeasures.map((measure, index) => (
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
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${measure.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{measure.icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {measure.measure}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {measure.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {measure.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-secondary-600 dark:text-secondary-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Legal Requirements */}
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
                법적 요구사항
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {legalRequirements.map((law, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${law.color} rounded-xl flex items-center justify-center shadow-medium`}
                    >
                      <span className="text-xl">{law.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        {law.law}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {law.requirement}
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {law.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expert Team */}
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
                전문가 팀
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {expertTeam.map((expert, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${expert.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <expert.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {expert.role}
                  </h3>

                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1 block">자격 요건</span>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">{expert.qualification}</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1 block">경험 사항</span>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">{expert.experience}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Process */}
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
                작업 프로세스
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {workProcess.map((step, index) => (
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                전문 석면 해체 제거 감리 서비스
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                안전하고 법규 준수적인 석면 해체 작업을 전문 감리사가 철저하게 감독합니다
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
                  감리 의뢰하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Eye className="w-5 h-5 inline mr-2" />
                  현장 점검 요청
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AsbestosRemoval;