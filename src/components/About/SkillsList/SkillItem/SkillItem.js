import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './SkillItem.module.scss';

const SkillItem = ({ skill: { iconPath, name, url, }, }) => (
  <li>
    <Link href={url}>
      <a className={styles.link}>
        <Image
          src={iconPath}
          width={16}
          height={16}
          alt={name}
        />
        <span className={styles.linkText}>{name}</span>
      </a>
    </Link>
  </li>
);

export default SkillItem;