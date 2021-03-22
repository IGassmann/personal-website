import React from 'react';
import Icon from '@/components/Icon';
import { getContactHref } from '@/lib/getContactHref';
import { getIcon } from '@/lib/getIcon';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ socialLinks }) => (
  <div>
    <ul className={styles.iconList}>
      {Object.keys(socialLinks).map((name) => (
        <li className={styles.listItem} key={name}>
          <a
            className={styles.link}
            href={getContactHref(name, socialLinks[name])}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon icon={getIcon(name)} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
