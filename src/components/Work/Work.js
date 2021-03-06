import React from 'react';
import Image from 'next/image';

const workCards = [
  {
    url: 'https://odeon.tv/',
    imageSrc: '/images/work/odeon.png',
    title: 'Odeon',
    subtitle: 'Video Platform',
  },
  {
    url: 'https://www.athem.fr/',
    imageSrc: '/images/work/athem.png',
    title: 'Athem',
    subtitle: 'Creative Website',
  },
  {
    url: 'https://original.works/',
    imageSrc: '/images/work/original-works.png',
    title: 'Original Works',
    subtitle: 'Marketing Website',
  },
  {
    url: 'https://github.com/lbryio/lbry-desktop',
    imageSrc: '/images/work/lbry.png',
    title: 'LBRY',
    subtitle: 'Electron App',
  },
]

const Work = () => (
    <div className="flex flex-wrap justify-center -m-m sm:mt-[96px]">
      {workCards.map(({ imageSrc, subtitle, title, url }, index) => (
        <a href={url} key={index} className="group relative w-[322px] h-[182px] m-[12px] md:w-[300px] md:h-[170px]">
            <Image src={imageSrc} layout="fill" objectFit="cover" alt={title} className="opacity-90"/>
            <div
              className="relative h-full w-full rounded-[12px] bg-gradient-to-tr from-primary-dark via-red-500 to-secondary-dark opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-90 group-focus:opacity-90">
              <div className="absolute left-[16px] bottom-[16px]">
                <h2 className="m-0">{title}</h2>
                <p className="m-0 text-body-text-color">{subtitle}</p>
              </div>
            </div>
          </a>
      ))}
    </div>
  );

export default Work;