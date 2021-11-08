import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@/hooks/use-media-query';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config'
import siteConfig from '@/site.config'

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig)

type ProfileProps = {
  isInline?: boolean
  isHeading?: boolean
}

const Profile: React.VFC<ProfileProps> = ({ isInline, isHeading }) => {
  const { profile } = siteConfig;

  // @ts-ignore
  const isPageWide = useMediaQuery(`(min-width: ${fullConfig.theme.screens?.sm})`)
  isInline = isInline || !isPageWide

  const imageSize = isInline ? 64 : 80;

  const TitleTag = isHeading ? 'h1' : 'span'

  return (
    <div className={`flex flex-col w-full ${isInline ? 'flex-row' : ''}`}>
      <Link href="/">
        <a className={`w-[64px] ${isInline ? 'mr-l' : ''}`}>
          <Image
            src={profile.picture}
            className="inline-block rounded-full bg-clip-padding sm:w-[80px]"
            width={imageSize}
            height={imageSize}
            alt={profile.name}
          />
        </a>
      </Link>
      <div className={isInline ? 'flex-1' : ''}>
        <TitleTag className={`text-h3 my-l ${isInline ? 'my-0' : ''}`}>
          <Link href="/">
            <a className="text-primary">{profile.name}</a>
          </Link>
        </TitleTag>
        <p className="text-body-text-color text-opacity-80 m-0">{profile.tagline}</p>
      </div>
    </div>
  );
};

export default Profile;
