import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { auth, db } from '../firebase/config';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { LogIn, LogOut, Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface ContactItem {
  id: string;
  title: string;
  content: string[];
  color: string;
}

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'contacts' | 'notices'>('contacts');

  // Data states
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);

  // Form states
  const [editingContact, setEditingContact] = useState<ContactItem | null>(null);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [newContact, setNewContact] = useState<Partial<ContactItem>>({ title: '', content: [''], color: '' });
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({ title: '', content: '', date: '', important: false });

  const fetchContacts = async () => {
    try {
      const q = collection(db, 'contact');
      const querySnapshot = await getDocs(q);
      const contactsData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || '',
          content: Array.isArray(data.content) ? data.content : (data.content ? [data.content] : ['']),
          color: data.color || '',
        };
      }) as ContactItem[];
      setContacts(contactsData);
    } catch (error) {
      console.error('연락처 로딩 실패:', error);
      alert('연락처 데이터를 불러오는데 실패했습니다. Firestore 설정을 확인해주세요.');
    }
  };

  const fetchNotices = async () => {
    try {
      const q = query(collection(db, 'notices'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const noticesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Notice[];
      setNotices(noticesData);
    } catch (error) {
      console.error('공지사항 로딩 실패:', error);
      alert('공지사항 데이터를 불러오는데 실패했습니다. Firestore 설정을 확인해주세요.');
    }
  };

  useEffect(() => {
    console.log('Admin 컴포넌트 마운트됨, Firebase 초기화 확인');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth 상태 변경:', user ? '로그인됨' : '로그아웃됨');
      setUser(user);
      setLoading(false);
      setError(null);
    }, (error) => {
      console.error('Auth 상태 변경 오류:', error);
      setLoading(false);
      setError(`Firebase 인증 오류: ${error.message}`);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user) {
      fetchContacts();
      fetchNotices();
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const handleSaveContact = async () => {
    if (!editingContact) return;

    try {
      const docRef = doc(db, 'contact', editingContact.id);
      await updateDoc(docRef, {
        title: editingContact.title,
        content: editingContact.content,
        color: editingContact.color,
      });
      setEditingContact(null);
      fetchContacts();
    } catch (error) {
      console.error('연락처 수정 실패:', error);
    }
  };

  const handleSaveNotice = async () => {
    if (!editingNotice) return;

    try {
      const docRef = doc(db, 'notices', editingNotice.id);
      await updateDoc(docRef, {
        title: editingNotice.title,
        content: editingNotice.content,
        date: editingNotice.date,
        important: editingNotice.important,
      });
      setEditingNotice(null);
      fetchNotices();
    } catch (error) {
      console.error('공지사항 수정 실패:', error);
    }
  };

  const handleAddContact = async () => {
    if (!newContact.title || !newContact.content || !newContact.color) return;

    try {
      await addDoc(collection(db, 'contact'), {
        title: newContact.title,
        content: newContact.content,
        color: newContact.color,
      });
      setNewContact({ title: '', content: [''], color: '' });
      fetchContacts();
    } catch (error) {
      console.error('연락처 추가 실패:', error);
    }
  };

  const handleAddNotice = async () => {
    if (!newNotice.title || !newNotice.content || !newNotice.date) return;

    try {
      await addDoc(collection(db, 'notices'), {
        title: newNotice.title,
        content: newNotice.content,
        date: newNotice.date,
        important: newNotice.important || false,
      });
      setNewNotice({ title: '', content: '', date: '', important: false });
      fetchNotices();
    } catch (error) {
      console.error('공지사항 추가 실패:', error);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteDoc(doc(db, 'contact', id));
      fetchContacts();
    } catch (error) {
      console.error('연락처 삭제 실패:', error);
    }
  };

  const handleDeleteNotice = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteDoc(doc(db, 'notices', id));
      fetchNotices();
    } catch (error) {
      console.error('공지사항 삭제 실패:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Firebase 연결 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            연결 오류
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            <p>Firebase 설정을 확인해주세요:</p>
            <ul className="mt-2 text-left">
              <li>• Firebase 프로젝트가 존재하는지 확인</li>
              <li>• Authentication이 활성화되었는지 확인</li>
              <li>• Firestore가 활성화되었는지 확인</li>
              <li>• 환경변수가 올바르게 설정되었는지 확인</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              관리자 로그인
            </h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                로그인
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              관리자 패널
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-white dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'contacts'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              연락처 관리
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'notices'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              공지사항 관리
            </button>
          </div>

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Add New Contact */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  새 연락처 추가
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="제목"
                    value={newContact.title}
                    onChange={(e) => setNewContact({ ...newContact, title: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="내용 (쉼표로 구분)"
                    value={Array.isArray(newContact.content) ? newContact.content.join(', ') : newContact.content || ''}
                    onChange={(e) => setNewContact({ ...newContact, content: e.target.value.split(', ') })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="색상 (예: from-blue-400 to-blue-600)"
                    value={newContact.color}
                    onChange={(e) => setNewContact({ ...newContact, color: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button
                  onClick={handleAddContact}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  추가
                </button>
              </div>

              {/* Contacts List */}
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    {editingContact?.id === contact.id ? (
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <input
                            type="text"
                            value={editingContact.title}
                            onChange={(e) => setEditingContact({ ...editingContact, title: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                          <input
                            type="text"
                            value={Array.isArray(editingContact.content) ? editingContact.content.join(', ') : editingContact.content || ''}
                            onChange={(e) => setEditingContact({ ...editingContact, content: e.target.value.split(', ') })}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                          <input
                            type="text"
                            value={editingContact.color}
                            onChange={(e) => setEditingContact({ ...editingContact, color: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveContact}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                          >
                            <Save className="w-4 h-4" />
                            저장
                          </button>
                          <button
                            onClick={() => setEditingContact(null)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2"
                          >
                            <X className="w-4 h-4" />
                            취소
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {contact.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {Array.isArray(contact.content) ? contact.content.join(', ') : contact.content || ''}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            색상: {contact.color}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingContact(contact)}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteContact(contact.id)}
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Notices Tab */}
          {activeTab === 'notices' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Add New Notice */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  새 공지사항 추가
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="제목"
                    value={newNotice.title}
                    onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="date"
                    value={newNotice.date}
                    onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <textarea
                  placeholder="내용"
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4"
                />
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={newNotice.important || false}
                      onChange={(e) => setNewNotice({ ...newNotice, important: e.target.checked })}
                      className="rounded"
                    />
                    중요 공지
                  </label>
                  <button
                    onClick={handleAddNotice}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    추가
                  </button>
                </div>
              </div>

              {/* Notices List */}
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    {editingNotice?.id === notice.id ? (
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={editingNotice.title}
                            onChange={(e) => setEditingNotice({ ...editingNotice, title: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                          <input
                            type="date"
                            value={editingNotice.date}
                            onChange={(e) => setEditingNotice({ ...editingNotice, date: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        <textarea
                          value={editingNotice.content}
                          onChange={(e) => setEditingNotice({ ...editingNotice, content: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <div className="flex items-center justify-between">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={editingNotice.important}
                              onChange={(e) => setEditingNotice({ ...editingNotice, important: e.target.checked })}
                              className="rounded"
                            />
                            중요 공지
                          </label>
                          <div className="flex gap-2">
                            <button
                              onClick={handleSaveNotice}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                            >
                              <Save className="w-4 h-4" />
                              저장
                            </button>
                            <button
                              onClick={() => setEditingNotice(null)}
                              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2"
                            >
                              <X className="w-4 h-4" />
                              취소
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                              {notice.important && <span className="text-red-500 mr-2">🔥</span>}
                              {notice.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {notice.date}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {notice.content}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => setEditingNotice(notice)}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNotice(notice.id)}
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Admin;