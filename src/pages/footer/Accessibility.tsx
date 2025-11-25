import { motion } from 'framer-motion';

const Accessibility = () => {
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
          <h1 className="text-4xl font-bold text-center text-primary-800 dark:text-primary-200 mb-12">
            웹접근성
          </h1>

          <div className="card">
            <div className="prose dark:prose-invert max-w-none">
              <h2>웹 접근성 등급</h2>
              <p>
                한국환경안전연구소 홈페이지는 웹 접근성 품질마크 인증을 받았습니다.
              </p>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg mb-6">
                <h3 className="text-green-800 dark:text-green-200 font-semibold mb-2">
                  ✅ WCAG 2.1 AA 등급 인증
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  모든 사용자가 쉽게 접근하고 이용할 수 있도록 최선을 다하고 있습니다.
                </p>
              </div>

              <h2>주요 접근성 기능</h2>
              <ul>
                <li>키보드만으로 모든 기능 사용 가능</li>
                <li>화면 낭독기 지원</li>
                <li>고대비 모드 지원</li>
                <li>텍스트 확대/축소 기능</li>
                <li>명확한 색상 대비</li>
                <li>대체 텍스트 제공</li>
              </ul>

              <h2>접근성 관련 문의</h2>
              <p>
                웹 접근성에 대한 문의사항이 있으시면 아래 연락처로 연락주시기 바랍니다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p><strong>담당자:</strong> 웹접근성 관리자</p>
                <p><strong>이메일:</strong> accessibility@ketri.co.kr</p>
                <p><strong>전화:</strong> 02-123-4567</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accessibility;