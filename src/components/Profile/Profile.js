import { useMediaQuery, useSiteMetadata } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Profile.module.scss';

const Profile = ({ isInline }) => {
  const {
    subtitle,
    profilePicture,
    layoutBreakpointSmall,
    profile: profileStyle,
    inline,
    text,
    title,
    profilePictureLink
  } = styles;

  const isPageWide = useMediaQuery(`(min-width: ${layoutBreakpointSmall})`)
  const { profile } = useSiteMetadata();


  const imageSize = isInline ? 64 : 80;

  return (
    <div className={`${profileStyle} ${isInline || !isPageWide ? inline : ''}`}>
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
      <div className={`${text} ${isInline || !isPageWide ? inline : ''}`}>
        <h1 className={`${title} ${isInline || !isPageWide ? inline : ''}`}>
          <Link href="/">
            <a>{profile.name}</a>
          </Link>
        </h1>
        <p className={`${subtitle} ${isInline || !isPageWide ? inline : ''}`}>{profile.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
