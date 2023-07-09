import Link from 'next/link';
import React from 'react';

type Props = {
  isMobile?: boolean;
};

function NavItem({ isMobile }: Props) {
  return (
    <ul
      className={`font-medium justify-center flex gap-4 w-full items-center ${
        isMobile && 'flex-col h-full'
      }`}
    >
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/admin'>Admin</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/admin'>User</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>Sign out</button>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>Sign in</button>
      </li>
    </ul>
  );
}

export default NavItem;
