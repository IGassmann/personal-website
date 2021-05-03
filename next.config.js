const { createSecureHeaders } = require("next-secure-headers");
const defaultSrcCSPDirectives = ["'self'", "https://igassmann.me", "https://*.igassmann.me"]

module.exports = {
  future: { webpack5: true },
  reactStrictMode: true,
  distDir: './dist/',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./build/generateSitemap');
    }

    return config;
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: defaultSrcCSPDirectives,
            imgSrc: [...defaultSrcCSPDirectives, "data:"],
            scriptSrc: [...defaultSrcCSPDirectives, "'unsafe-eval'"],
            styleSrc: [...defaultSrcCSPDirectives, "'unsafe-inline'"],
            frameSrc: [...defaultSrcCSPDirectives, "https://*"]
          },
        },
        referrerPolicy: "no-referrer-when-downgrade",
      }),
    }];
  },
};