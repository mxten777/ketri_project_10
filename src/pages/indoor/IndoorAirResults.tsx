import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, FileText, Download, Calendar, Building, User, CheckCircle, AlertCircle, Clock, Shield, Eye, Mail, Phone } from 'lucide-react';

interface ResultItem {
  id: string;
  customer: string;
  facility: string;
  date: string;
  status: string;
  items: string[];
  result: string;
  downloadUrl: string | null;
}

const IndoorAirResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('certificate');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);

  // 샘플 데이터
  const sampleResults = [
    {
      id: 'IAQ-2024-00123',
      customer: '서울시청',
      facility: '본관 1층 사무실',
      date: '2024-11-20',
      status: 'completed',
      items: ['PM-10', 'CO₂', 'HCHO', 'TVOC'],
      result: '합격',
      downloadUrl: '#',
    },
    {
      id: 'IAQ-2024-00122',
      customer: '강남구청',
      facility: '민원실',
      date: '2024-11-18',
      status: 'completed',
      items: ['PM-10', 'PM-2.5', 'CO', 'CO₂'],
      result: '합격',
      downloadUrl: '#',
    },
    {
      id: 'IAQ-2024-00121',
      customer: '롯데백화점',
      facility: '강남점 식당가',
      date: '2024-11-15',
      status: 'processing',
      items: ['PM-10', 'CO₂', 'TVOC', '라돈'],
      result: '진행중',
      downloadUrl: null,
    },
  ];

  const recentSearches = [
    { id: 'IAQ-2024-00123', customer: '서울시청', date: '2024-11-20' },
    { id: 'IAQ-2024-00115', customer: '삼성전자', date: '2024-11-10' },
    { id: 'IAQ-2024-00108', customer: '현대자동차', date: '2024-11-05' },
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);

    // 시뮬레이션된 검색 로직
    setTimeout(() => {
      const filteredResults = sampleResults.filter(result =>
        result.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getStatusBadge = (status: string, result: string) => {
    if (status === 'processing') {
      return { text: '진행중', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' };
    }
    if (result === '합격') {
      return { text: '합격', color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' };
    }
    return { text: '불합격', color: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' };
  };

  const certificateFeatures = [
    {
      icon: Shield,
      title: '공식 인증',
      desc: '국가공인 검사기관 인증',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FileText,
      title: '상세 보고서',
      desc: '항목별 측정값 및 분석 결과',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Download,
      title: '간편 다운로드',
      desc: 'PDF 형식으로 즉시 다운로드',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Clock,
      title: '신속 발급',
      desc: '측정 후 7일 이내 발급',
      color: 'from-orange-400 to-orange-600',
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
              성적서 조회
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            >
              실내공기질 측정 성적서를 쉽고 빠르게 조회하세요
            </motion.p>
          </motion.div>

          {/* Certificate Features */}
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
                성적서 특징
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {certificateFeatures.map((feature, index) => (
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 shadow-medium`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-secondary-600 dark:text-secondary-400">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search Section */}
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
                성적서 검색
              </motion.h2>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {/* Search Type Selection */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchType('certificate')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      searchType === 'certificate'
                        ? 'bg-primary-500 text-white shadow-medium'
                        : 'bg-white/50 dark:bg-gray-800/50 text-secondary-600 dark:text-secondary-400 hover:bg-white/70 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <FileText className="w-5 h-5 inline mr-2" />
                    성적서 번호
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchType('customer')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      searchType === 'customer'
                        ? 'bg-primary-500 text-white shadow-medium'
                        : 'bg-white/50 dark:bg-gray-800/50 text-secondary-600 dark:text-secondary-400 hover:bg-white/70 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <User className="w-5 h-5 inline mr-2" />
                    고객명
                  </motion.button>
                </div>

                {/* Search Input */}
                <div className="relative">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white/20 dark:border-gray-700/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 placeholder-secondary-400"
                      placeholder={
                        searchType === 'certificate'
                          ? '성적서 번호를 입력하세요 (예: IAQ-2024-00123)'
                          : '고객명을 입력하세요 (예: 서울시청)'
                      }
                    />
                  </motion.div>
                </div>

                {/* Search Button */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    disabled={isSearching || !searchTerm.trim()}
                    className="px-12 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline mr-2"
                        />
                        검색 중...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 inline mr-2" />
                        성적서 검색
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Recent Searches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              >
                최근 조회 내역
              </motion.h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentSearches.map((search, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-large border border-gray-100 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                  onClick={() => setSearchTerm(search.id)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-medium"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        {search.customer}
                      </p>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {search.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                    <Calendar className="w-4 h-4" />
                    {search.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search Results */}
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
                검색 결과
              </motion.h2>
            </div>

            {results.length === 0 && !isSearching ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full mb-6 shadow-glow"
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  성적서를 검색해보세요
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 max-w-md mx-auto">
                  성적서 번호나 고객명을 입력하여 측정 결과를 확인하세요
                </p>
              </motion.div>
            ) : results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result, index) => {
                  const badge = getStatusBadge(result.status, result.result);
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-medium"
                            >
                              <FileText className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {result.id}
                              </h3>
                              <p className="text-secondary-600 dark:text-secondary-400">
                                {result.customer}
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4 text-primary-500" />
                              <span className="text-sm text-secondary-600 dark:text-secondary-400">
                                {result.facility}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary-500" />
                              <span className="text-sm text-secondary-600 dark:text-secondary-400">
                                {result.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary-500" />
                              <span className="text-sm text-secondary-600 dark:text-secondary-400">
                                {result.items.join(', ')}
                              </span>
                            </div>
                            <div>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                                {badge.text}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          {result.downloadUrl ? (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                            >
                              <Download className="w-4 h-4 inline mr-2" />
                              PDF 다운로드
                            </motion.button>
                          ) : (
                            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-secondary-600 dark:text-secondary-400 font-semibold rounded-xl flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              준비중
                            </div>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                          >
                            <Eye className="w-4 h-4 inline mr-2" />
                            상세보기
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : isSearching ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6 shadow-glow"
                >
                  <Search className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  성적서를 검색하고 있습니다
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  잠시만 기다려주세요...
                </p>
              </motion.div>
            ) : null}
          </motion.div>

          {/* Customer Support */}
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
                <Phone className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                고객 지원
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                성적서 조회나 관련 문의사항이 있으시면 언제든지 연락주세요
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary-500" />
                    실내공기질 성적서 담당
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-500" />
                      <span className="text-secondary-700 dark:text-secondary-300">02-123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary-500" />
                      <span className="text-secondary-700 dark:text-secondary-300">indoor@ketri.co.kr</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-500" />
                    운영 시간
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">평일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">09:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">토요일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">09:00 - 13:00</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <span className="font-medium text-secondary-700 dark:text-secondary-300 min-w-[60px]">일요일:</span>
                      <span className="text-secondary-600 dark:text-secondary-400">휴무</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary-700 dark:text-primary-300 font-semibold mb-2">
                      성적서 조회 시 다음 정보를 준비해주세요:
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      성적서 번호, 고객명, 측정 일자, 시설명 중 하나 이상의 정보
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  전화 상담하기
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  이메일 문의하기
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndoorAirResults;