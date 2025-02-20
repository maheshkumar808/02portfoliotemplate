import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="w-full ">
      <div className="w-full justify-center flex  bg-gray-950  gap-2 py-3">
        <Link href="#top">
          <div className=" rounded-lg py-2 px-4 hover:bg-gray-900 text-lg">
            Top
          </div>
        </Link>
        <Link href="#work">
          <div className=" rounded-lg py-2 px-4 hover:bg-gray-900 text-lg">
            Work
          </div>
        </Link>
        <Link href="#portfolio">
          <div className=" rounded-lg py-2 px-4 hover:bg-gray-900 text-lg">
            Portfolio
          </div>
        </Link>
        <div className=" rounded-lg py-2 px-4 hover:bg-gray-900 text-lg">
          Contact
        </div>
      </div>
    </section>
  );
};

export default Header;
