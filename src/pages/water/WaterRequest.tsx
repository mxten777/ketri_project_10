import { motion } from 'framer-motion';
import { FileText, Droplets, Microscope, CheckCircle, Phone, Mail, MessageCircle, Clock, CreditCard, Shield, Users, Download, AlertCircle } from 'lucide-react';

const WaterRequest = () => {
  const processSteps = [
    {
      step: '01',
      title: '의뢰 접수',
      desc: '온라인/방문 접수',
      icon: FileText,
      color: 'from-primary-400 to-primary-600',
      details: '검사 의뢰서 제출 및 기본 정보 확인',
    },
    {
      step: '02',
      title: '시료 채취',
      desc: '전문 요원 방문',
      icon: Droplets,
      color: 'from-blue-400 to-blue-600',
      details: '현장 방문하여 안전한 시료 채취',
    },
    {
      step: '03',
      title: '분석 실시',
      desc: '정밀 분석 진행',
      icon: Microscope,
      color: 'from-green-400 to-green-600',
      details: '최신 장비로 체계적인 분석 수행',
    },
    {
      step: '04',
      title: '결과 보고',
      desc: '성적서 발급',
      icon: CheckCircle,
      color: 'from-purple-400 to-purple-600',
      details: '공식 검사 성적서 및 보고서 제공',
    },
  ];

  const onlineSteps = [
    {
      step: 1,
      title: '홈페이지 접속',
      desc: '한국환경안전연구소 홈페이지 방문',
      icon: '🌐',
    },
    {
      step: 2,
      title: '의뢰서 작성',
      desc: '온라인 양식으로 검사 정보 입력',
      icon: '📝',
    },
    {
      step: 3,
      title: '서류 첨부',
      desc: '필요 서류 스캔하여 업로드',
      icon: '📎',
    },
    {
      step: 4,
      title: '결제 및 접수',
      desc: '수수료 결제 후 접수 완료',
      icon: '💳',
    },
    {
      step: 5,
      title: '일정 협의',
      desc: '시료 채취 일정 조율',
      icon: '📅',
    },
    {
      step: 6,
      title: '진행 상황 확인',
      desc: '실시간 진행 상태 모니터링',
      icon: '📊',
    },
  ];

  const visitSteps = [
    {
      step: 1,
      title: '사전 예약',
      desc: '전화 또는 온라인으로 방문 예약',
      icon: '📞',
    },
    {
      step: 2,
      title: '방문 접수',
      desc: '연구소 방문하여 의뢰서 수령',
      icon: '🏢',
    },
    {
      step: 3,
      title: '서류 작성',
      desc: '현장에서 의뢰서 작성 및 서류 제출',
      icon: '✍️',
    },
    {
      step: 4,
      title: '수수료 납부',
      desc: '계좌이체 또는 현금으로 결제',
      icon: '💰',
    },
    {
      step: 5,
      title: '접수증 수령',
      desc: '접수증 및 검사 일정표 발급',
      icon: '📄',
    },
    {
      step: 6,
      title: '채취 준비',
      desc: '시료 채취 일정 및 준비사항 안내',
      icon: '🔧',
    },
  ];

  const preparationItems = [
    {
      title: '채취 지점 지정',
      desc: '수도꼭지 및 샘플링 포인트 사전 지정',
      icon: '📍',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '배관 청소',
      desc: '24시간 이상 사용하지 않은 배관은 사전 청소',
      icon: '🧽',
      color: 'from-green-400 to-green-600',
    },
    {
      title: '안전 공간 확보',
      desc: '채취 요원이 안전하게 작업할 수 있는 공간',
      icon: '🛡️',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: '시간 협의',
      desc: '채취에 소요되는 시간(30분~1시간) 사전 협의',
      icon: '⏰',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const samplingNotes = [
    {
      title: '수돗물 사전 배출',
      desc: '채취 전 5-10분간 수돗물을 흘려보냄',
      icon: '🚰',
    },
    {
      title: '용기 라벨링',
      desc: '채취 용기에 정확한 정보 기록',
      icon: '🏷️',
    },
    {
      title: '냉장 보관',
      desc: '채취 즉시 냉장 상태로 보관 및 운반',
      icon: '❄️',
    },
    {
      title: '사진 촬영',
      desc: '채취 과정 및 현장 상황 사진 기록',
      icon: '📸',
    },
  ];

  const analysisProcess = [
    {
      step: 1,
      title: '시료 수령 및 검수',
      desc: '24시간 이내 시료 상태 및 무결성 확인',
      time: '1일',
    },
    {
      step: 2,
      title: '전처리 및 준비',
      desc: '분석에 적합한 형태로 시료 가공',
      time: '1-2일',
    },
    {
      step: 3,
      title: '정밀 분석 실시',
      desc: '최신 분석 장비로 체계적 검사 수행',
      time: '3-7일',
    },
    {
      step: 4,
      title: '데이터 검증',
      desc: '결과값 교차 검증 및 정확성 확인',
      time: '1일',
    },
    {
      step: 5,
      title: '보고서 작성',
      desc: '전문가 해석과 함께 결과 보고서 작성',
      time: '2-3일',
    },
    {
      step: 6,
      title: '최종 승인 및 발급',
      desc: '품질 검토 후 공식 성적서 발급',
      time: '1일',
    },
  ];

  const requiredDocuments = [
    {
      title: '검사 의뢰서',
      desc: '소정 양식의 검사 의뢰서 (온라인/오프라인)',
      required: true,
      icon: '📋',
    },
    {
      title: '사업자등록증',
      desc: '법인/개인 사업자의 등록증 사본',
      required: true,
      icon: '🏢',
    },
    {
      title: '시설 배치도',
      desc: '급수도 개요도 및 시설 배치도',
      required: true,
      icon: '🗺️',
    },
    {
      title: '최근 검사 성적서',
      desc: '기존 검사 결과 (있는 경우)',
      required: false,
      icon: '📊',
    },
    {
      title: '인감증명서',
      desc: '법인 인감증명서 또는 사용인감계',
      required: true,
      icon: '🖊️',
    },
    {
      title: '신분증 사본',
      desc: '대표자 또는 담당자 신분증',
      required: true,
      icon: '🆔',
    },
  ];

  const pricingPlans = [
    {
      type: '기본 검사',
      items: '일반 수질 항목 (세균, 중금속, 물리적 특성)',
      price: '50,000원 ~ 100,000원',
      period: '5-7일',
      color: 'from-green-400 to-green-600',
      icon: '🔬',
    },
    {
      type: '확장 검사',
      items: '기본 항목 + 유기물질, 잔류소독제 등 특별 항목',
      price: '150,000원 ~ 300,000원',
      period: '7-10일',
      color: 'from-blue-400 to-blue-600',
      icon: '🧪',
    },
    {
      type: '특별 검사',
      items: '맞춤 항목 분석 및 긴급 검사',
      price: '별도 견적',
      period: '협의',
      color: 'from-purple-400 to-purple-600',
      icon: '⭐',
    },
  ];

  const contactMethods = [
    {
      title: '전화 상담',
      desc: '직접 통화로 상세한 상담',
      contact: '02-123-4567',
      hours: '평일 09:00-18:00',
      icon: Phone,
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: '이메일 문의',
      desc: '24시간 접수, 영업일 내 답변',
      contact: 'water@ketri.co.kr',
      hours: '24시간 접수',
      icon: Mail,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '온라인 채팅',
      desc: '실시간 채팅 상담',
      contact: '홈페이지 채팅',
      hours: '평일 09:00-18:00',
      icon: MessageCircle,
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
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              검사의뢰 신청절차
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              먹는물 수질 검사 의뢰를 위한 체계적이고 간편한 단계별 안내
            </motion.p>
          </motion.div>

          {/* Process Overview */}
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
                검사 의뢰 절차 개요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              >
                4단계 체계적 프로세스로 신뢰할 수 있는 검사 결과를 제공합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                      {step.desc}
                    </p>
                    <p className="text-sm text-secondary-500 dark:text-secondary-500">
                      {step.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Step 1: Request Submission */}
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
                1단계: 검사 의뢰 접수
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                편리한 온라인 접수와 방문 접수 중 선택하여 신청하세요
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Online Application */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6 shadow-medium"
                >
                  <Download className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  온라인 접수 방법
                </h3>

                <div className="space-y-4">
                  {onlineSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 bg-primary-50/50 dark:bg-primary-900/20 rounded-xl"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{step.icon}</span>
                          <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  온라인 접수하기
                </motion.button>
              </motion.div>

              {/* Visit Application */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 shadow-medium"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  방문 접수 방법
                </h3>

                <div className="space-y-4">
                  {visitSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{step.icon}</span>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  방문 예약하기
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Step 2: Sample Collection Preparation */}
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
                2단계: 시료 채취 준비
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                안전하고 정확한 시료 채취를 위한 사전 준비사항입니다
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Preparation Items */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"
                >
                  채취 요원 방문 전 준비사항
                </motion.h3>

                <div className="space-y-4">
                  {preparationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-medium`}
                      >
                        <span className="text-xl">{item.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sampling Notes */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"
                >
                  채취 시 유의사항
                </motion.h3>

                <div className="space-y-4">
                  {samplingNotes.map((note, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border border-orange-200 dark:border-orange-800"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center shadow-medium"
                      >
                        <span className="text-xl">{note.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                          {note.title}
                        </h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          {note.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Analysis and Reporting */}
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
                3단계: 분석 및 결과 보고
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                체계적인 분석 프로세스로 신뢰할 수 있는 결과를 제공합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analysisProcess.map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                        <Clock className="w-4 h-4" />
                        {process.time}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {process.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reporting Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-6 shadow-medium"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  결과 보고 방식
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700 dark:text-purple-300">이메일 발송 (PDF 형식)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <FileText className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700 dark:text-purple-300">우편 발송 (공식 문서)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700 dark:text-purple-300">방문 수령 (연구소 직접)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <span className="text-purple-700 dark:text-purple-300">온라인 조회 시스템</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 shadow-medium"
                >
                  <AlertCircle className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">
                  긴급 결과 통보
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 dark:text-red-300">전화 통보 (이상치 발견시)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 dark:text-red-300">SMS 알림 (결과 완료시)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 dark:text-red-300">긴급 이메일 (우선 처리)</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Required Documents and Pricing */}
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
                필요 서류 및 수수료
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                검사 진행을 위한 필수 서류와 투명한 가격 정책
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Required Documents */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-6 shadow-medium"
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  필수 제출 서류
                </h3>

                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`flex items-start gap-4 p-4 rounded-xl border ${
                        doc.required
                          ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <span className="text-2xl">{doc.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {doc.title}
                          </h4>
                          {doc.required && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                              필수
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {doc.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing Plans */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 shadow-medium"
                >
                  <CreditCard className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  수수료 안내
                </h3>

                <div className="space-y-6">
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{plan.icon}</span>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {plan.type}
                        </h4>
                      </div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                        {plan.items}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {plan.price}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-secondary-500">
                          <Clock className="w-4 h-4" />
                          {plan.period}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
                >
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>참고:</strong> 수시 검사는 기본 요금 + 20%가 적용됩니다.
                    대량 검사 및 특별 분석의 경우 별도 견적을 요청하세요.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact and Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 max-w-5xl mx-auto"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-glow"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                문의 및 지원
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                검사 의뢰 과정에서 궁금한 점이 있으시면 언제든지 연락주세요.
                전문 상담원이 친절하고 자세한 안내를 드리겠습니다.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl mb-4 shadow-medium`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {method.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                      {method.desc}
                    </p>
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {method.contact}
                    </div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-500 mt-1">
                      {method.hours}
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
                  <Download className="w-5 h-5 inline mr-2" />
                  의뢰서 양식 다운로드
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  상담 예약하기
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WaterRequest;