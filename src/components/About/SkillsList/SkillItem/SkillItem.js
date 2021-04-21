import Image from 'next/image';
import React from 'react';
import styles from './SkillItem.module.scss';

const SkillItem = ({ skill: { iconPath, name, url, }, }) => (
  <li>
    <a href={url} className={styles.link}>
      <Image
        src={iconPath}
        width={16}
        height={16}
        alt={name}
      />
      <span className={styles.linkText}>{name}</span>
    </a>
  </li>
);

export default SkillItem;