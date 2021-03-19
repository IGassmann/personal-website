import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles.menu}>
    <ul className={styles.list}>
      {menu.map((item) => (
        <li className={styles.listItem} key={item.path}>
          <Link href={item.path}>
            <a className={styles.link}>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
