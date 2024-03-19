import React from 'react';
import Link from 'next/link';

type MenuProps = {
  menu: { label: string; path: string }[];
};

const Menu: React.VFC<MenuProps> = ({ menu }) => (
  <nav>
    <ul className="p-0 my-xl">
      {menu.map((item) => (
        <li className="my-l sm:my-m" key={item.path}>
          <Link href={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
