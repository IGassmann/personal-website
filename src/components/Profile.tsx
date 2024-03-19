import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import ProfilePicture from '../../public/images/profile-picture.jpg';
import useMediaQuery from '@/hooks/use-media-query';
import tailwindConfig from '@/../tailwind.config';
import siteConfig from '@/site.config';

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

type ProfileProps = {
  isInline?: boolean;
  isHeading?: boolean;
};

const Profile: React.VFC<ProfileProps> = ({ isInline = false, isHeading = false }) => {
  const { profile } = siteConfig;

  // @ts-ignore
  const isPageWide = useMediaQuery(`(min-width: ${fullConfig.theme.screens?.sm})`);
  const displayInline = isInline || !isPageWide;

  const TitleTag = isHeading ? 'h1' : 'span';

  return (
    <div className={`flex w-full ${displayInline ? 'flex-row' : 'flex-col'}`}>
      <Link
        href="/"
        className={`${displayInline ? 'w-[64px] mr-l' : 'w-[80px]'}`}
        >
        <Image
          src={ProfilePicture}
          className="inline-block rounded-full bg-clip-padding"
          alt={profile.name}
          />
      </Link>
      <div className={`${displayInline && 'flex-1'}`}>
        <TitleTag className={`text-h3 my-l ${displayInline && 'my-0'}`}>
          <Link href="/" className="text-primary">
            {profile.name}
          </Link>
        </TitleTag>
        <p className="text-body-text-color text-opacity-80 m-0">{profile.tagline}</p>
      </div>
    </div>
  );
};

export default Profile;
