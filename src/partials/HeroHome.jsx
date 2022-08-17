import React, { useState } from 'react';
import { ArrowDownCircle } from 'tabler-icons-react';
import FeaturesHome from '../partials/Features';

function HeroHome() {
  const [offset, setOffset] = useState(0);
  window.addEventListener("scroll",
    () => setOffset(window.pageYOffset)
  )

  return (
    <section className="relative p-4">
      <div className="mb-16 mx-auto px- sm:px-6">
        <div className="pb-2">
          <div className="text-center">
            <div className="max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="150">
              <p className="text-left h4 text-gray-800 mb-4 bg-clip-text">Decentralized Verification for Arweave Wallets.</p>
              <p className="text-left text-lg mb-4 text-gray-600 bg-clip-text">VouchDAO allows users to verify once and be trusted everywhere on the Permaweb, while allowing developers to verify them with 2 lines of code.</p>
              <p className="text-left text-lg mb-4 text-gray-600 bg-clip-text">It all starts with the new Vouch data protocol, defined by <a className="text-[#6495ED]" href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md" target="_blank">ANS-109</a>. ANS-109 allows anyone on the permaweb to "vouch" for the identity & humanity of any other address. Anyone can run a Vouch server, providing attestations on Arweave about user identities.</p>
              <p className="text-left text-lg mb-4 text-gray-600 bg-clip-text">VouchDAO is a decentralized verification layer on top of the Vouch standard. It is a community that votes together on which vouching services are trustworthy.</p>
              <p className="text-left text-lg text-gray-600 bg-clip-text">Community owned and operated. <a className="text-[#6495ED]" href="https://twitter.com/vouchdao" target="_blank">Join us</a>.</p>
            </div>
            <div className="mt-10 h-6 transition duration-300 ease-in-out" data-aos="zoom-y-in" data-aos-delay="150">
              {offset < 350 &&
                <>
                  <a href="#features">
                    <ArrowDownCircle
                      size={48}
                      strokeWidth={2}
                      color={'#94a3b8'}
                      className="mx-auto"
                      onClick={() => setOffset(500)}
                    />
                  </a>
                </>
              }
            </div>
          </div>
        </div>
      </div>
      <FeaturesHome offset={offset} />

    </section >
  );
}

export default HeroHome;