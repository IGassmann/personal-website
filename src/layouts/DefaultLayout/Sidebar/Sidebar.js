import React from 'react';
import Menu from '@/layouts/DefaultLayout/Sidebar/Menu';
import SocialLinks from '@/layouts/DefaultLayout/Sidebar/SocialLinks';
import Profile from '@/components/Profile';
import { useSiteMetadata } from '@/hooks';

const Sidebar = () => {
  const { profile: { socialLinks }, menu } = useSiteMetadata();

  return (
    <aside className="relative mb-xxxl sm:pr-[20px] sm:border-r sm:border-secondary ">
      <Profile isHeading />
      <Menu menu={menu} />
      <SocialLinks socialLinks={socialLinks} />
    </aside>
  );
};

export default Sidebar;
