import React from 'react';
import Menu from '@/layouts/DefaultLayout/Sidebar/Menu';
import SocialLinks from '@/layouts/DefaultLayout/Sidebar/SocialLinks';
import Profile from '@/components/Profile';
import { useSiteMetadata } from '@/hooks';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { profile: { socialLinks }, menu } = useSiteMetadata();

  return (
    <aside className={styles.sidebar}>
      <Profile isHeading />
      <Menu menu={menu} />
      <SocialLinks socialLinks={socialLinks} />
    </aside>
  );
};

export default Sidebar;
