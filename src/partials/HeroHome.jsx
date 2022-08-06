import React, { useState } from 'react';

function HeroHome() {
  return (
    <section className="relative">
      <div className="mb-16 mx-auto px- sm:px-6">
        <div className="pb-12">
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-left h4 text-gray-800 mb-8 bg-clip-text" data-aos="zoom-y-out" data-aos-delay="150">Decentralized Verification for Arweave Wallets.</p>
              <p className="text-left text-lg mb-8 text-gray-600 bg-clip-text" data-aos="zoom-y-out" data-aos-delay="150">VouchDAO allows users to verify once and be trusted everywhere on the Permaweb, while allowing developers to verify them with 2 lines of code.</p>
              <p className="text-left text-lg text-gray-600 bg-clip-text" data-aos="zoom-y-out" data-aos-delay="150">VouchDAO is community owned and operated. <a className="text-[#6495ED]" href="https://twitter.com/vouchdao" target="_blank">Join us</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default HeroHome;