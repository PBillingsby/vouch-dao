import React, { useState } from 'react';
import { Copy } from 'tabler-icons-react';

function HeroHome() {

  const handleCopy = () => {
    navigator.clipboard.writeText(npmCommand);
  }

  const npmCommand = `npm install placeholder`
  return (
    <section className="relative">
      <div className="mb-16 mx-auto px- sm:px-6">
        <div className="pb-12">
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="h4 text-gray-800 mb-8 bg-clip-text" data-aos="zoom-y-out" data-aos-delay="150">Decentralized Verification for Arweave Wallets</p>
              <p className="text-lg text-gray-600 bg-clip-text" data-aos="zoom-y-out" data-aos-delay="150">VouchDAO allows you to vote on who can legitimately <a href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md">Vouch</a> for the identity of others on Arweave.</p>
              <p className="text-lg text-gray-600 bg-clip-text pt-4" data-aos="zoom-y-out" data-aos-delay="150"><a href="https://community.xyz/#gb6J0Kf9o07oUgG_2rKgDeFu8zlF81c3D1VbTrdfUDU">Join the Community</a> and help applications on the permaweb fight sybil resistance.</p>
              <div className="max-w-xs mx-auto pt-8" data-aos="zoom-y-out" data-aos-delay="300">
                <pre className="rounded-md flex"><code lang='javascript' style={{ backgroundColor: '#eee', padding: '1rem' }}>{npmCommand}</code><a className="pt-4 pl-2" href="#"><Copy color="#444" onClick={() => handleCopy()} /></a></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default HeroHome;