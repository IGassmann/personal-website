import { useMediaQuery, useSiteMetadata } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Profile.module.scss';

const Profile = ({ isIndex, isInline }) => {
  const {
    subtitle,
    profilePicture,
    layoutBreakpointSmall,
    profile: profileStyle,
    inline,
    title,
    profilePictureLink
  } = styles;

  const isPageWide = useMediaQuery(`(min-width: ${layoutBreakpointSmall})`)
  const { profile } = useSiteMetadata();

  const TitleHeaderTag = isIndex ? 'h1' : 'h2';

  const imageSize = isInline ? 64 : 80;

  return (
    <div className={profileStyle}>
      <Link href="/">
        <a className={`${profilePictureLink} ${isInline || !isPageWide ? inline : ''}`}>
          <Image
            src={profile.picture}
            className={`${profilePicture} ${isInline || !isPageWide ? inline : ''}`}
            width={imageSize}
            height={imageSize}
            alt={profile.name}
          />
        </a>
      </Link>
      <TitleHeaderTag className={`${title} ${isInline || !isPageWide ? inline : ''}`}>
        <Link href="/">
          <a>{profile.name}</a>
        </Link>
      </TitleHeaderTag>
      <p className={`${subtitle} ${isInline || !isPageWide ? inline : ''}`}>{profile.bio}</p>
    </div>
  );
};

export default Profile;
