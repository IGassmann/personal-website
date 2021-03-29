import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useMediaQuery, useSiteMetadata } from '@/hooks';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Profile = ({ isInline }) => {
  const { profile } = useSiteMetadata();
  const isPageWide = useMediaQuery(`(min-width: ${styles.layoutBreakpointSmall})`)

  const inlineClass = { inline: isInline || !isPageWide };
  const imageSize = isInline ? 64 : 80;

  return (
    <div className={cx('profile', inlineClass)}>
      <Link href="/">
        <a className={cx('profilePictureLink', inlineClass)}>
          <Image
            src={profile.picture}
            className={cx('profilePicture', inlineClass)}
            width={imageSize}
            height={imageSize}
            alt={profile.name}
          />
        </a>
      </Link>
      <div className={cx('text', inlineClass)}>
        <h1 className={cx('title', inlineClass)}>
          <Link href="/">
            <a>{profile.name}</a>
          </Link>
        </h1>
        <p className={cx('subtitle', inlineClass)}>{profile.tagline}</p>
      </div>
    </div>
  );
};

export default Profile;
