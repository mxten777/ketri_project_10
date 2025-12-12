import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/logo_horizontal_trans.png" 
                alt="KETRI 로고" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              첨단 환경·안전 솔루션의 선두주자로서 고객의 건강과 안전을 최우선으로 생각합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">연구소 소개</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation('/intro/greeting')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  인사말
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/intro/history')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  연혁
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/intro/organization')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  조직도
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/intro/directions')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  오시는길
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">연락처</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation('/consulting/work-environment')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  산업보건컨설팅
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/water/intro')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  먹는물 검사
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/dialysis/intro')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  혈액투석용수
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/indoor/quote')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  실내공기질측정
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/asbestos/density')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  석면조사분석
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">연락처</h4>
            <div className="text-gray-400 space-y-2 text-sm">
              <p className="flex items-start">
                <span className="mr-2 flex-shrink-0">📍</span>
                <a 
                  href="https://map.naver.com/p/search/충북 청주시 서원구 남이면 양촌3길 7-30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="break-keep hover:text-primary-400 transition-colors"
                >
                  충북 청주시 서원구 남이면 양촌3길 7-30
                </a>
              </p>
              <p className="break-keep">
                <a href="tel:043-237-7624" className="hover:text-primary-400 transition-colors">
                  📞 TEL: 043.237.7624~5
                </a>
              </p>
              <p className="break-keep">
                <a href="tel:043-237-7626" className="hover:text-primary-400 transition-colors">
                  📠 FAX: 043.237.7626
                </a>
              </p>
              <p className="break-all">🏢 사업자등록번호: 317-81-01323</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              COPYRIGHT(C) 2012 KETRI ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleNavigation('/privacy')}
                className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
              >
                개인정보처리방침
              </button>
              <button
                onClick={() => handleNavigation('/accessibility')}
                className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
              >
                웹접근성
              </button>
              <button
                onClick={() => handleNavigation('/copyright')}
                className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
              >
                저작권정책
              </button>
              <button
                onClick={() => handleNavigation('/intro/directions')}
                className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
              >
                오시는길
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;