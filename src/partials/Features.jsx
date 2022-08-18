import React, { useState, useRef, useEffect } from 'react';
import { Tool, ShieldLock, Copy, ArrowUpCircle, Check } from 'tabler-icons-react';
import VouchFlow from '../images/vouch-flow.png';

function Features({ offset }) {
  // const arweave = Arweave.init({
  //   host: "arweave.net",
  //   port: 443,
  //   protocol: "https",
  // });

  // const getCommunity = async () => {
  //   const newComm = new Community(arweave);
  //   newComm.setCommunityTx("gb6J0Kf9o07oUgG_2rKgDeFu8zlF81c3D1VbTrdfUDU")
  //   const community = await newComm.getState();
  //   setCommunity(community)
  // }

  // if (!community) {
  //   getCommunity()
  // }

  const handleCopy = () => {
    navigator.clipboard.writeText(npmCommand);
  }

  const npmCommand = `npm install vouchdao`

  const setupCommand = `
  import { isVouched } from 'vouchdao'
  await isVouched("addr")  
  `

  return (
    <section className="relative" id="features">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none content-center" aria-hidden="true"></div>
      <div className="relative mx-auto p-4 sm:px-6">
        <div className="max-w-[1480px] sm:block md:block lg:flex justify-between mx-auto">
          <div data-aos="fade-right">
            <div className="mb-8 lg:max-w-[45vw]">
              <div
                className={`flex py-6 items-center text-lg p-9 rounded border-2 transition duration-300 ease-in-out mb-3`}
              >
                <div>
                  <div className="font-bold text-3xl leading-snug tracking-tight mb-1">For users</div>
                  <div className="text-gray-600 pt-4">Verify using Vouch Twitter Service, the first trusted node today.</div>
                  <div className="text-gray-600 py-4"><a href="https://vouch-v0.hyper.io" target="_blank" style={{ color: '#6495ED' }}>Get vouched</a> with the only blue tick on the Permaweb!</div>
                </div>
                <div className="hidden md:flex lg:flex  justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <ShieldLock
                    size={26}
                    strokeWidth={2}
                    color={'black'}
                  />
                </div>
              </div>
              <div
                className={`  md:flex lg:flex md:items-center lg:items-center lg:py-6 text-lg p-5 rounded-md border-2 transition duration-300 ease-in-out mb-3`}
              >
                <div>
                  <div className="font-bold text-3xl leading-snug tracking-tight mb-1">For developers</div>
                  <div className="text-gray-600 py-4">Integrating VouchDAO takes 2 minutes and all of pain out of bots on the web.</div>
                  <div className="max-w-sm mx-auto pt-4" data-aos="zoom-y-out" data-aos-delay="300">
                    <pre className="rounded-md flex"><code lang='javascript' className="bg-[#eee] p-[1rem]">{npmCommand}</code><button className="pl-2" onClick={() => false}><Copy color="#444" onClick={() => handleCopy()} /></button></pre>
                  </div>
                  <div className="max-w-sm mx-auto py-4" data-aos="zoom-y-out" data-aos-delay="300">
                    <pre className="rounded-md text-sm"><code lang='javascript' className="bg-[#eee]">{setupCommand}</code></pre>
                  </div>
                </div>
                <div className="hidden md:flex lg:flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <Tool
                    size={26}
                    strokeWidth={2}
                    color={'black'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:max-w-[45vw] mx-auto md:mb-0 border border-gray-300 border-2 rounded-md p-1" data-aos="zoom-y-out fade-left" >
              <img src={VouchFlow} />
            </div>
          </div>
        </div>
        <div className="mt-2 pb-6 transition duration-300 ease-in-out" data-aos="zoom-y-in" data-aos-delay="150">
          {offset > 100 && <a href="#">
            <ArrowUpCircle
              size={48}
              strokeWidth={2}
              color={'#94a3b8'}
              className="mx-auto"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            />
          </a>
          }
        </div>
      </div>
    </section >
  );
}

export default Features;
