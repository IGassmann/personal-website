import Image from 'next/image';

const workCards = [
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
    url: 'https://www.linkedin.com/in/igassmann/details/experience/',
    imageSrc: '/images/work/odeon.png',
    title: 'Odeon',
    subtitle: 'Video Platform',
  },
  {
    url: 'https://github.com/lbryio/lbry-desktop',
    imageSrc: '/images/work/lbry.png',
    title: 'LBRY',
    subtitle: 'Electron App',
  },
];

export default function Work() {
  return (
    <div className="-m-2 flex flex-wrap justify-center md:mt-24">
      {workCards.map(({ imageSrc, subtitle, title, url }) => (
        <a
          href={url}
          key={title}
          className="group relative m-[12px] h-[182px] w-[322px] lg:h-[170px] lg:w-[300px]"
        >
          <Image
            src={imageSrc}
            alt={title}
            className="opacity-90"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="duration-250 relative h-full w-full rounded-xl bg-gradient-to-tr from-blue-900 to-fuchsia-900 opacity-0 transition-opacity ease-in-out group-hover:opacity-90 group-focus:opacity-90">
            <div className="absolute bottom-4 left-4">
              <h2 className="m-0 text-2xl font-medium text-cyan-500">{title}</h2>
              <p className="m-0 text-white">{subtitle}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
