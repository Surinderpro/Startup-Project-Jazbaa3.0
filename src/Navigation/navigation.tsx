import React, { useState } from 'react';
import Faq from '@/components/ui/faq';
import ContactUs from '@/components/ui/contact';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('faq');

  const renderPage = () => {
    switch (currentPage) {
      case 'faq':
        return <Faq />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Faq />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('faq')}>FAQ</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default Navigation;