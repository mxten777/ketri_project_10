import { motion } from 'framer-motion';

const Privacy = () => {
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
            개인정보처리방침
          </h1>

          <div className="card">
            <div className="prose dark:prose-invert max-w-none">
              <h2>1. 개인정보의 수집 및 이용 목적</h2>
              <p>
                한국환경안전연구소(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다.
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등
                필요한 조치를 이행할 예정입니다.
              </p>

              <h2>2. 개인정보의 처리 및 보유 기간</h2>
              <p>
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에
                동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>

              <h2>3. 개인정보의 제3자 제공</h2>
              <p>
                회사는 정보주체의 개인정보를 제1조(개인정보의 수집 및 이용 목적)에서 명시한 범위 내에서만
                처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만
                개인정보를 제3자에게 제공합니다.
              </p>

              <h2>4. 개인정보처리의 위탁</h2>
              <p>
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>

              <h2>5. 정보주체의 권리·의무 및 행사방법</h2>
              <p>
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ul>
                <li>개인정보 열람요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제요구</li>
                <li>처리정지 요구</li>
              </ul>

              <h2>6. 개인정보의 안전성 확보조치</h2>
              <p>
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ul>
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화</li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ul>

              <h2>7. 개인정보 보호책임자</h2>
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>개인정보 보호책임자:</strong> 김철수 대표이사</p>
                <p><strong>연락처:</strong> privacy@ketri.co.kr</p>
                <p><strong>전화:</strong> 02-123-4567</p>
              </div>

              <h2>8. 개인정보 처리방침 변경</h2>
              <p>
                이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.
                법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터
                공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Privacy;