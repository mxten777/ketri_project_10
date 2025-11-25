import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary-50 via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-secondary-50 via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;