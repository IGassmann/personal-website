// @flow
import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            href={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
