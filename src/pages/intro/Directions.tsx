import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, Train, Bus, Navigation, AlertCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface ContactItem {
  id: string;
  title: string;
  content: string[];
  color: string;
}

const Directions = () => {
  const [contactInfo, setContactInfo] = useState<ContactItem[]>([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const q = collection(db, 'contact');
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const contactData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as ContactItem[];
          setContactInfo(contactData);
        } else {
          setContactInfo([]);
        }
      } catch (error) {
        console.error('연락처 정보 로딩 실패:', error);
        setContactInfo([]);
      }
    };

    fetchContactInfo();
  }, []);

  // 아이콘 매핑
  const getIcon = (title: string) => {
    switch (title) {
      case '주소': return MapPin;
      case '전화': return Phone;
      case '이메일': return Mail;
      case '업무 시간': return Clock;
      default: return MapPin;
    }
  };

  const contactInfoWithIcons = contactInfo.map(item => ({
    ...item,
    icon: getIcon(item.title),
  }));

  const transportOptions = [
    {
      icon: Train,
      title: '지하철',
      color: 'from-blue-400 to-blue-600',
      routes: [
        { line: '2호선', station: '강남역', exit: '3번 출구', walk: '도보 5분' },
        { line: '9호선', station: '신논현역', exit: '4번 출구', walk: '도보 7분' },
      ],
    },
    {
      icon: Bus,
      title: '버스',
      color: 'from-green-400 to-green-600',
      routes: [
        { stop: '강남역 정류장', numbers: ['123', '456', '789'] },
        { stop: '신논현역 정류장', numbers: ['147', '258', '369'] },
      ],
    },
    {
      icon: Car,
      title: '자가용',
      color: 'from-orange-400 to-orange-600',
      info: [
        '네비게이션: "한국환경안전연구소" 검색',
        '주소 검색: "서울 강남구 테헤란로 123"',
        '건물 지하주차장 이용 가능',
      ],
    },
  ];

  const parkingInfo = [
    { label: '기본 요금', value: '30분당 1,000원' },
    { label: '무료 시간', value: '최대 2시간' },
    { label: '할인 혜택', value: '방문객 50% 할인' },
  ];

  const visitNotes = [
    '방문 전 전화로 예약을 부탁드립니다',
    '신분증 지참을 권장합니다',
    '주말 및 공휴일은 휴무입니다',
    '긴급 상황 시 24시간 연락 가능합니다',
    '주차권은 1층 리셉션에서 받아주세요',
    '엘리베이터 이용 시 10층에서 내리세요',
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
              <Navigation className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent mb-6 leading-tight"
            >
              오시는 길
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              한국환경안전연구소를 방문하시는 방법을 안내해 드립니다
            </motion.p>
          </motion.div>

          {/* Contact Information */}
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
                주소 및 연락처
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                편리한 방문과 빠른 상담을 위해 다양한 연락 방법을 제공합니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfoWithIcons.map((info, index) => (
                  <motion.div
                    key={info.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl mb-6 shadow-medium`}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {info.title}
                    </h3>

                    <div className="space-y-2">
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-secondary-600 dark:text-secondary-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Transportation */}
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
                교통편 안내
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                다양한 교통수단으로 편리하게 방문하실 수 있습니다
              </motion.p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {transportOptions.map((transport, index) => (
                <motion.div
                  key={transport.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${transport.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <transport.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {transport.title}
                  </h3>

                  <div className="space-y-4">
                    {transport.routes ? (
                      transport.routes.map((route, routeIndex) => (
                        <div key={routeIndex} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          {'line' in route && (
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded">
                                {route.line}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {route.station} {route.exit}
                              </span>
                            </div>
                          )}
                          {'stop' in route && (
                            <div className="mb-2">
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {route.stop}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {route.numbers.map((num: string, numIndex: number) => (
                                  <span key={numIndex} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded">
                                    {num}번
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {'walk' in route && (
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              {route.walk}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      transport.info?.map((info, infoIndex) => (
                        <div key={infoIndex} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          {info}
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Parking Information */}
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
                주차 안내
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                편리한 주차 서비스로 방문객 여러분을 맞이합니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {parkingInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {info.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {info.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      주차 유의사항
                    </h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• 방문 시 리셉션에서 주차권을 받아주세요</li>
                      <li>• 장애인 주차구역은 지정된 장소만 이용 가능합니다</li>
                      <li>• 주차 요금은 현금 및 카드 모두 가능합니다</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visit Notes */}
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
                방문 시 유의사항
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
              >
                쾌적하고 원활한 방문이 되도록 도움말을 준비했습니다
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {visitNotes.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/50"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map Section */}
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
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                실시간 위치 안내
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                정확한 위치 확인과 길찾기를 위해 실시간 지도를 제공합니다.
                현재 위치 기반으로 최적의 경로를 안내해 드립니다.
              </p>

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600"
                >
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                      인터랙티브 지도
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                      Google Maps 또는 Kakao Map API 연동 예정
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4 inline mr-2" />
                    길찾기 시작
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  >
                    주소 복사
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Directions;