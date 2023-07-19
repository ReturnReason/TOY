import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {
  isMobile?: boolean;
};

function NavItem({ isMobile }: Props) {
  const { data: session, status } = useSession();
  console.log({ session }, status);

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
      {session?.user ? (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      ) : (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signIn()}>Sign in</button>
        </li>
      )}
    </ul>
  );
}

export default NavItem;
