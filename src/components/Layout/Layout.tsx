import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Header />
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;