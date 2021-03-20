import React from 'react';
import Profile from '../Profile';
import SocialLinks from './SocialLinks';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '@/hooks';

const Sidebar = () => {
  const { profile: { socialLinks }, menu } = useSiteMetadata();

  return (
    <aside className={styles.sidebar}>
      <Profile />
      <Menu menu={menu} />
      <SocialLinks socialLinks={socialLinks} />
    </aside>
  );
};

export default Sidebar;
