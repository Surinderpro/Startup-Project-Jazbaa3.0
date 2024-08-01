import React from 'react';
import { PlaceholdersAndVanishInputDemo } from "@/components/placehlder";
import { InfiniteMovingCardsDemo } from '@/components/movingcards';
import Header from '@/components/ui/header';
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
        alignItems: 'center',
      }}
    >
      <Header />
      <PlaceholdersAndVanishInputDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </div>
  );
}

export default Page;
