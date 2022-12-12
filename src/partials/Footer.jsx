import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="flex pb-4">
        <ul className="text-sm flex flex-row gap-12 mx-auto">
          <li className="mb-2">
            <a href="https://community.xyz/#_z0ch80z_daDUFqC9jHjfOL8nekJcok4ZRkE_UesYsk" target="_blank">Community</a>
          </li>
          <li className="mb-2">
            <a href="https://sonar.warp.cc/?#/app/contract/_z0ch80z_daDUFqC9jHjfOL8nekJcok4ZRkE_UesYsk" target="_blank">Contract</a>
          </li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <a href="https://arweave.net" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
          <div className="text-sm text-gray-600 mr-4">Arweave {new Date().getFullYear()}</div>
        </a>
      </div>
    </footer >
  );
}

export default Footer;
