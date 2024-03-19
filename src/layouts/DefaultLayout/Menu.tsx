import React from 'react';
import Link from 'next/link';

type MenuProps = {
  menu: { label: string; path: string }[];
};

export default function Menu({ menu }: MenuProps) {
  return <nav>
    <ul className="p-0 my-xl">
      {menu.map((item) => (
        <li className="my-l sm:my-m" key={item.path}>
          <Link href={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>;
}
