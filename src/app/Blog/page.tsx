import React from 'react';
import BlogArticle from '@/components/ui/blog';
import Footer from '@/components/ui/footer2';
import Header from '@/components/ui/header';

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg6.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <BlogArticle />
      <Footer />
    </div>
  );
}

export default Page;
