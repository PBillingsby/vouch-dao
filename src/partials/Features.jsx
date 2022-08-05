import React, { useState, useRef, useEffect } from 'react';
import { Gavel, ShieldLock } from 'tabler-icons-react';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none content-center" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto p-4 sm:px-6">
        <div>
          <div className="flex p-4">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 pt-20 lg:pr-12 xl:pr-16 mb-8">
                <p className="h2 mb-3">VouchDAO</p>
                <p className="text-xl text-gray-600">Sybil resistance is a necessary component of most applications on the permaweb.</p>
              </div>
            </div>
            <div className="pt-6 mx-auto max-w-lg md:max-w-none md:w-full mx-auto min-h-[70vh] mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="md:mb-0 mt-16">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Placeholder Text</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi lectus, blandit ac imperdiet gravida, lacinia non elit. Integer nec posuere arcu.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Gavel
                      size={26}
                      strokeWidth={2}
                      color={'black'}
                    />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Placeholder Text</div>
                    <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi lectus, blandit ac imperdiet gravida, lacinia non elit. Integer nec posuere arcu.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <ShieldLock
                      size={26}
                      strokeWidth={2}
                      color={'black'}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
