import React from 'react';
import Link from 'next/link';

const Menu = ({ menu }) => (
  <nav>
    <ul className="p-0 my-xl">
      {menu.map((item) => (
        <li className="my-l sm:my-m" key={item.path}>
          <Link href={item.path}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
