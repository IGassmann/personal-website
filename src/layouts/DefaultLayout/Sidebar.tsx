import Profile from '@/components/Profile';
import Menu from '@/layouts/DefaultLayout/Menu';
import SocialLinks from '@/layouts/DefaultLayout/SocialLinks';
import siteConfig from '@/site.config';

export default function Sidebar() {
  const {
    profile: { socialLinks },
    menu,
  } = siteConfig;

  return (
    <aside className="relative mb-12 md:border-r md:border-fuchsia-600 md:pr-5 ">
      <Profile isHeading />
      <Menu menu={menu} />
      <SocialLinks socialLinks={socialLinks} />
    </aside>
  );
}
