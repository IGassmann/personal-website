import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Work.module.scss';

const About = () => {
  return (
    <div className={styles.work}>
      <Link href='https://odeon.tv/'>
        <a className={styles.workCard}>
          <Image src='/images/work/odeon.png' layout='fill' alt='Odeon' className={styles.image}
          />
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <h2>Odeon</h2>
              <p>Video Platform</p>
            </div>
          </div>
        </a>
      </Link>
      <Link href='https://www.athem.fr/'>
        <a className={styles.workCard}>
          <Image src='/images/work/athem.png' layout='fill' alt='Athem' className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <h2>Athem</h2>
              <p>Creative Website</p>
            </div>
          </div>
        </a>
      </Link>
      <Link href='https://original.works/'>
        <a className={styles.workCard}>
          <Image src='/images/work/original-works.png' layout='fill' alt='Original Works' className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <h2>Original Works</h2>
              <p>Marketing Website</p>
            </div>
          </div>
        </a>
      </Link>
      <Link href='https://github.com/lbryio/lbry-desktop'>
        <a className={styles.workCard}>
          <Image src='/images/work/lbry.png' layout='fill' alt='LBRY' className={styles.image}/>
          <div className={styles.overlay}>
            <div className={styles.overlayText}>
              <h2>LBRY</h2>
              <p>Electron App</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default About;