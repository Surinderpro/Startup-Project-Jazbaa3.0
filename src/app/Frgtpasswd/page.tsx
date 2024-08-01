import React from 'react';
import ForgotPasswordForm from '@/components/ui/Forgetpasswd';
import Footer from '@/components/ui/footer2';

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ForgotPasswordForm />
      <Footer />
    </div>
  );
}

export default Page;
