import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

interface ContactItem {
  id: string;
  title: string;
  content: string[];
  color: string;
}

const Footer = () => {
  const navigate = useNavigate();
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

  // 연락처 정보를 객체로 변환
  const contactMap = contactInfo.reduce((acc, item) => {
    acc[item.title] = item.content[0];
    return acc;
  }, {} as Record<string, string>);

  const handleNavigation = (path: string) => {
    navigate(path);
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">한국환경안전연구소</h3>
            <p className="text-gray-400 leading-relaxed">
              첨단 환경·안전 솔루션의 선두주자로서 고객의 건강과 안전을 최우선으로 생각합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">연구소 소개</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold mb-4">주요 서비스</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="text-gray-400 space-y-2">
              <p>📍 {contactMap['주소'] || '서울특별시 강남구 역삼동 123-45'}</p>
              <p>📞 {contactMap['전화'] || '02-555-0123'}</p>
              <p>📧 {contactMap['이메일'] || 'info@ketri.co.kr'}</p>
              <p>🕒 {contactMap['업무 시간'] || '월-금 09:00-18:00'}</p>
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
              © 2025 한국환경안전연구소. All rights reserved.
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