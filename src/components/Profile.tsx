import Image from 'next/image';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';

import useMediaQuery from '@/hooks/use-media-query';
import siteConfig from '@/site.config';
import ProfilePicture from '../../public/images/profile-picture.jpg';
import tailwindConfig from '../../tailwind.config';

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

type ProfileProps = {
  isInline?: boolean;
  isHeading?: boolean;
};

export default function Profile({ isInline = false, isHeading = false }: ProfileProps) {
  const { profile } = siteConfig;

  // @ts-ignore
  const isPageWide = useMediaQuery(`(min-width: ${fullConfig.theme.screens?.sm})`);
  const displayInline = isInline || !isPageWide;

  const TitleTag = isHeading ? 'h1' : 'span';

  return (
    <div className={`flex w-full ${displayInline ? 'flex-row' : 'flex-col'}`}>
      <Link
        href="/"
        className={`${
          displayInline
            ? 'mr-4 w-16 text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500'
            : 'w-20 text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500'
        }`}
      >
        <Image
          src={ProfilePicture}
          className="inline-block rounded-full bg-clip-padding"
          alt={profile.name}
        />
      </Link>
      <div className={`${displayInline && 'flex-1'}`}>
        <TitleTag className={`my-4 text-2xl ${displayInline && 'my-0'}`}>
          <Link href="/" className="text-cyan-500">
            {profile.name}
          </Link>
        </TitleTag>
        <p className="m-0 text-white text-opacity-80">{profile.tagline}</p>
      </div>
    </div>
  );
}
