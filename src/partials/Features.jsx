import React, { useState, useEffect } from 'react';
import { Tool, ShieldLock, Copy, ArrowUpCircle, CircleCheck, CircleX } from 'tabler-icons-react';
import VouchFlow from '../images/vouch-flow.png';
import { WarpFactory } from 'warp-contracts/web';
import { isVouched } from "vouchdao"
const warp = WarpFactory.forMainnet();
let contractState;

function Features({ offset }) {
  useEffect(() => {
    getContract()
  }, [contractState])

  const getContract = async () => {
    const contract = warp.contract("_z0ch80z_daDUFqC9jHjfOL8nekJcok4ZRkE_UesYsk").connect('use_wallet');
    const { cachedValue } = await contract.readState();
    console.log(cachedValue)
    contractState = cachedValue;
  }
  const [vouched, setVouched] = useState("");
  const [searched, setSearched] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(npmCommand);
  }

  const checkVouch = (address) => {
    if (address.length === 43) {
      const isVouched = isVouched(address)
      if (isVouched) {
        setVouched(true)
        setSearched(true)
      }
      else {
        setVouched(false)
        setSearched(true)
      }
    }
    else {
      setSearched(false)
      setVouched()
    }
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
            <div className="lg:max-w-[45vw] mx-auto h-full lg:max-w-[45vw] p-1 border border-gray-300 border-2 rounded-md">
              <div
                className={`flex py-6  items-center text-lg p-9 rounded transition duration-300 ease-in-out mb-3`}
              >
                <div>
                  <div className="font-bold text-3xl leading-snug tracking-tight mb-1">For users</div>
                  <div className="text-gray-600 pt-4">Verify using Vouch Twitter Service, the first trusted node today.</div>
                  <div className="text-gray-600 py-4"><a href="https://vouch-twitter.arweave.dev" target="_blank" style={{ color: '#6495ED' }}>Get vouched</a> with the only blue tick on the Permaweb!</div>
                  <div className="align-center">
                    <p className="font-bold text-2xl text-gray-800 bg-clip-text">Vouch Check</p>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                          {!vouched && !searched ?
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            : searched && vouched ?
                              <CircleCheck
                                size={24}
                                strokeWidth={2}
                                color={'#40bf51'}
                                label="Vouched"
                              />
                              :
                              <CircleX
                                size={24}
                                strokeWidth={2}
                                color={'#bf4040'}
                              />
                          }
                        </button>
                      </span>
                      <input type="search" onChange={(e) => checkVouch(e.target.value)} name="q" className="w-4/5 py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
                    </div>
                    <div className='flex h-[1rem] text-center'>
                      {searched !== false &&
                        <div>{searched && vouched ?
                          <p className="text-[#40bf51]">Vouched!</p> :
                          <p className="text-red-600">Not Vouched</p>
                        }</div>
                      }
                    </div>
                  </div>
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
                className="md:flex lg:flex md:items-center lg:items-center lg:py-6 text-lg p-5 rounded-md transition duration-300 ease-in-out mb-3"
              >
                <div>
                  <div className="font-bold text-3xl leading-snug tracking-tight mb-1">For developers</div>
                  <div className="text-gray-600 py-4">Integrating VouchDAO takes 2 minutes and all of pain out of bots on the web.</div>
                  <div className="max-w-sm mx-auto pt-4" data-aos="zoom-y-out" data-aos-delay="300">
                    <pre className="rounded-md flex"><code lang='javascript' className="bg-[#eee] p-[1rem] text-sm">{npmCommand}</code><button className="pl-2" onClick={() => false}><Copy color="#444" onClick={() => handleCopy()} /></button></pre>
                  </div>
                  <div className="max-w-sm mx-auto py-4" data-aos="zoom-y-out" data-aos-delay="300">
                    <pre className="rounded-md text-xs"><code lang='javascript' className="bg-[#eee]">{setupCommand}</code></pre>
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
            </div >
          </div >
          <div>
            <div className="lg:max-w-[45vw] mx-auto h-full md:mb-0 border border-gray-300 border-2 rounded-md p-1" data-aos="zoom-y-out fade-left" >
              <img src={VouchFlow} className="h-full" />
            </div>
          </div>
        </div >
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
      </div >
    </section >
  );
}

export default Features;
