import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // 샘플 데이터 (Firebase 연결 전까지 사용)
  const sampleNotices: Notice[] = [
    {
      id: '1',
      title: '2025년 신년 인사',
      content: '한국환경안전연구소의 새로운 한 해를 맞이하여...',
      date: '2025-01-01',
      important: true,
    },
    {
      id: '2',
      title: '시스템 점검 안내',
      content: '2025년 1월 15일 시스템 점검이 예정되어 있습니다.',
      date: '2025-01-10',
      important: false,
    },
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        // Firebase 연결 시도
        const q = query(collection(db, 'notices'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Firebase 데이터가 있으면 사용
          const noticesData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Notice[];
          setNotices(noticesData);
        } else {
          // Firebase 데이터가 없으면 샘플 데이터 사용
          setNotices(sampleNotices);
        }
      } catch (error) {
        console.error('공지사항 로딩 실패:', error);
        // 에러 시 샘플 데이터 사용
        setNotices(sampleNotices);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []); // sampleNotices는 상수이므로 의존성에서 제외

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-accent-600 mb-12">
            공지사항
          </h1>

          {loading ? (
            <div className="text-center py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 rounded-full mb-4"
              >
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
              </motion.div>
              <p className="text-secondary-600 dark:text-secondary-400">공지사항을 불러오는 중...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className={`card ${notice.important ? 'border-l-4 border-accent-500' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {notice.important && <span className="text-accent-600 mr-2">🔥</span>}
                      {notice.title}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {notice.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {notice.content}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Notices;