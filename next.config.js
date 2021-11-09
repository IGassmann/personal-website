// @ts-check

const { createSecureHeaders } = require('next-secure-headers')
const defaultSrcCSPDirectives = ["'self'", 'https://igassmann.me', 'https://*.igassmann.me']

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  distDir: './dist/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: defaultSrcCSPDirectives,
              imgSrc: [...defaultSrcCSPDirectives, 'data:'],
              scriptSrc: [...defaultSrcCSPDirectives, "'unsafe-eval'"],
              styleSrc: [...defaultSrcCSPDirectives, "'unsafe-inline'"],
              frameSrc: [...defaultSrcCSPDirectives, 'https://*'],
            },
          },
          referrerPolicy: 'no-referrer-when-downgrade',
        }),
      },
    ]
  },
}

module.exports = nextConfig
