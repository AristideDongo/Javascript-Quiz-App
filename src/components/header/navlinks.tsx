'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the navigation bar.
const links = [
  { name: 'QUIZ THEORIQUE', 
    href: '/quiz' },
  {
    name: 'QUIZ PRATIQUE',
    href: '/game',
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-center p-4">

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'text-xl text-center items-center flex font-medium  p-2 rounded-md hover:bg-sky-100 hover:text-blue-600',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                  'text-gray-700': pathname !== link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
