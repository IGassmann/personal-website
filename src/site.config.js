const siteOrigin = process.env.NODE_ENV === 'production' ?
  `https://igassmann.me` :
  'http://localhost:3000';

export default {
  defaultTitle: 'Igor Gassmann',
  titleTemplate: '%s - Igor Gassmann',
  description: 'Developing 👨‍💻 and deploying 📦 at startups 🚀 since 2017.',
  profile: {
    name: 'Igor Gassmann',
    picture: '/images/profile-picture.jpg',
    tagline: 'Developing 👨‍💻 and deploying 📦 at startups 🚀 since 2017.',
    socialLinks: {
      email: 'igor@igassmann.me',
      rss: '/rss.xml',
      twitter: 'i_gassmann',
      github: 'IGassmann',
      linkedin: 'igassmann',
    }
  },
  postsPerPage: 4,
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Work',
      path: '/work'
    },
  ],
  origin: siteOrigin,
  openGraph: {
    type: 'website',
    url: siteOrigin,
    site_name: 'Igor Gassmann',
    title: 'Igor Gassmann',
    images: [
      {
        url: `${siteOrigin}/og-image.png`,
        width: 1200,
        height: 630,
      },
      {
        url: `${siteOrigin}/square-og-image.png`,
        width: 630,
        height: 630,
      },
      {
        url: `${siteOrigin}/twitter-image.png`,
        width: 1200,
        height: 600,
      },
    ]
  },
  twitter: {
    handle: '@i_gassmann',
    site: '@i_gassmann',
    cardType: 'summary_large_image',
  },
  syndicationFeed: {
    title: "Igor Gassmann's Blog",
    description: 'Blog posts of a curious engineer.'
  }
};
