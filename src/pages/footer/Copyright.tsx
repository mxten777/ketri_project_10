import { motion } from 'framer-motion';

const Copyright = () => {
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
            저작권정책
          </h1>

          <div className="card">
            <div className="prose dark:prose-invert max-w-none">
              <h2>저작권 일반</h2>
              <p>
                한국환경안전연구소(이하 "회사")가 제공하는 모든 자료는 저작권법에 의하여 보호받는 저작물입니다.
                회사의 자료를 이용하고자 하는 경우에는 저작권법 등 관련 법령을 준수하여야 합니다.
              </p>

              <h2>저작권의 귀속</h2>
              <p>
                회사가 제공하는 서비스 및 자료의 저작권은 회사에 귀속됩니다.
                단, 회사가 제공하는 서비스를 이용하여 회원이 올린 자료의 저작권은 해당 회원에게 귀속됩니다.
              </p>

              <h2>저작권의 이용</h2>
              <p>
                회사의 자료를 개인적으로 이용하는 경우에는 출처를 밝히고 비상업적으로 이용하는 것을 원칙으로 합니다.
                상업적 이용을 원하는 경우에는 별도의 협의를 통해 허가를 받아야 합니다.
              </p>

              <h2>저작권 침해 신고</h2>
              <p>
                저작권 침해가 의심되는 자료를 발견하셨을 경우 아래 연락처로 신고해 주시기 바랍니다.
              </p>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <p><strong>저작권 담당자:</strong> 법무팀장</p>
                <p><strong>이메일:</strong> copyright@ketri.co.kr</p>
                <p><strong>전화:</strong> 02-123-4567</p>
              </div>

              <h2>면책 조항</h2>
              <p>
                회사는 회원이 게재한 자료에 대하여 신뢰도, 정확성 등을 보증하지 않습니다.
                또한 회사는 회원 간 또는 회원과 제3자 간의 자료 이용으로 인한 분쟁에 관여하지 않습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Copyright;