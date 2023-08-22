import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex justify-around border-b-2 p-4">
      <h1>
        <Link className="uppercase font-bold" href="/">
          reason
        </Link>
      </h1>
      <ul className="flex gap-4 justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
