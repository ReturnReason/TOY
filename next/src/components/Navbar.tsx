'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {};

  return (
    <nav className='relative z-10 w-full bg-slate-500 text-white'>
      <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
        <div className='flex items-center text-2xl h-14'>
          <Link href='/'>Logo</Link>
        </div>
        <div className='text-2xl sm:hidden'>
          {showMenu ? (
            <button onClick={handleMenu}>닫기</button>
          ) : (
            <button onClick={handleMenu}>열기</button>
          )}
        </div>
        <div className='hidden sm:block'>
          <NavItem />
        </div>
        <div className='block sm:hidden'>{showMenu && <NavItem isMobile />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
