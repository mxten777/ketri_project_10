import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    {
      title: '연구소 소개',
      path: '/intro',
      subItems: [
        { name: '인사말', path: '/intro/greeting' },
        { name: '연혁', path: '/intro/history' },
        { name: '조직도', path: '/intro/organization' },
        { name: 'CI소개', path: '/intro/ci' },
        { name: '인증서', path: '/intro/certificates' },
        { name: '주요장비현황', path: '/intro/equipment' },
        { name: '오시는길', path: '/intro/directions' },
      ],
    },
    {
      title: '산업보건컨설팅',
      path: '/consulting',
      subItems: [
        { name: '작업환경측정', path: '/consulting/work-environment' },
        { name: '위험성평가', path: '/consulting/risk-assessment' },
        { name: '근골격계유해요인조사', path: '/consulting/musculoskeletal' },
        { name: '화학물질관리', path: '/consulting/chemical-management' },
        { name: '산업보건컨설팅 실적', path: '/consulting/results' },
      ],
    },
    {
      title: '먹는물 검사',
      path: '/water',
      subItems: [
        { name: '업무소개', path: '/water/intro' },
        { name: '수질검사대상 및 범위', path: '/water/scope' },
        { name: '수질검사주기 및 수수료', path: '/water/schedule' },
        { name: '검사의뢰 신청절차', path: '/water/request' },
      ],
    },
    {
      title: '혈액투석용수',
      path: '/dialysis',
      subItems: [
        { name: '업무소개', path: '/dialysis/intro' },
        { name: '검사의뢰절차', path: '/dialysis/request' },
        { name: '검사주기 및 관련기준', path: '/dialysis/schedule' },
        { name: '수질기준 및 실험방법', path: '/dialysis/standards' },
        { name: '채수방법 및 시료채수위치', path: '/dialysis/sampling' },
      ],
    },
    {
      title: '실내공기질측정',
      path: '/indoor',
      subItems: [
        { name: '실내공기질 측정 견적 요청', path: '/indoor/quote' },
        { name: '실내공기질 성적서 조회', path: '/indoor/results' },
      ],
    },
    {
      title: '석면조사분석',
      path: '/asbestos',
      subItems: [
        { name: '석면농도측정', path: '/asbestos/density' },
        { name: '석면비산정도측정', path: '/asbestos/dispersion' },
        { name: '석면해체제거감리', path: '/asbestos/removal' },
        { name: '석면건축물 위해성평가', path: '/asbestos/risk' },
        { name: '석면건축물 공기질측정', path: '/asbestos/air' },
      ],
    },
    {
      title: '공지사항',
      path: '/notices',
      subItems: [],
    },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo_horizontal.png" 
              alt="KETRI 로고" 
              className="h-10 w-auto dark:brightness-0 dark:invert transition-all duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`nav-link whitespace-nowrap ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
                {item.subItems.length > 0 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-gray-700">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
                    <div className="relative z-10">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
              aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-500 dark:text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-600 dark:text-gray-300" />
                )}
              </motion.div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              {/* Mobile Menu */}
              <motion.nav
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-xl z-50 lg:hidden overflow-y-auto"
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">메뉴</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="py-4">
                  {menuItems.map((item) => (
                    <div key={item.path} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.subItems.length > 0 && (
                        <div className="ml-4 space-y-1 pb-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block py-2 px-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;