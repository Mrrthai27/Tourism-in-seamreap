"use client";
import Image from 'next/image';
import React from 'react';
import logo from '../app/img/logo.png'; // Update the path to your logo file
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import path from 'path';

const Header: React.FC = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`) || (path === '/' && pathname.startsWith('/Hotel'))

      ? 'text-xl font-serif font-bold leading-6 text-red-400'
      : 'text-xl font-serif font-bold leading-6 text-gray-900 hover:text-red-400';

  return (
    <header  className="bg-white">
      <nav
        className="mx-auto flex  max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-black text-2xl font-bold inline-flex items-center "
          >
            <span className="sr-only">Your Company</span>
            <Image src={logo} width={100} height={100} alt="Tourism logo" />
            TOURISM OF SIEMREAP
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={linkClass('/')}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={linkClass('/aboutus')}
          >
            About Us
          </Link>
          <Link
            href="/destination"
            className={linkClass('/destination')}
          >
            Destination
          </Link>
          <Link
            href="/contact"
            className={linkClass('/contact')}
          >
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;