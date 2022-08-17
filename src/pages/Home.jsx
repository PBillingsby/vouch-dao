import React from 'react';
import HeroHome from '../partials/HeroHome';
import VouchImage from '../images/vouch-dao.png';

import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <img className="mx-auto" data-aos="zoom-y-out" data-aos-delay="75" style={{ width: '25rem' }} src={VouchImage} width="768" height="432" alt="Hero" />
        <HeroHome />
      </main>
      <Footer />
    </div>
  );
}

export default Home;