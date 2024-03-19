import Menu from '@/layouts/DefaultLayout/Menu';
import SocialLinks from '@/layouts/DefaultLayout/SocialLinks';
import Profile from '@/components/Profile';
import siteConfig from '@/site.config';

export default function Sidebar() {
  const {
    profile: { socialLinks },
    menu,
  } = siteConfig;

  return (
    <aside className="relative mb-xxxl sm:pr-[20px] sm:border-r sm:border-secondary ">
      <Profile isHeading />
      <Menu menu={menu} />
      <SocialLinks socialLinks={socialLinks} />
    </aside>
  );
}
