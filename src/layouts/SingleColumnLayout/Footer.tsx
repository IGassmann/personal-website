import React from 'react';
import Profile from '@/components/Profile';

const Footer: React.VFC = () => (
  <footer className="max-w-[640px] border-t border-primary mx-auto pt-xxl">
    <Profile isInline/>
  </footer>
);

export default Footer;
