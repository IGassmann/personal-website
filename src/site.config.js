const siteOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export default {
  defaultTitle: 'Igor Gassmann',
  titleTemplate: '%s - Igor Gassmann',
  description: 'Developing 👨‍💻 and deploying 📦 at startups 🚀 since 2017.',
  profile: {
    name: 'Igor Gassmann',
    picture: '/profile-picture.jpg',
    bio: 'Developing 👨‍💻 and deploying 📦 at startups 🚀 since 2017.',
    socialLinks: {
      email: 'igor@igassmann.me',
      rss: '/rss',
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
    url: siteOrigin,
    site_name: 'Igor Gassmann',
    images: [
      {
        url: `${siteOrigin}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ]
  },
};
