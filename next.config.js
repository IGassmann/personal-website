const { createSecureHeaders } = require("next-secure-headers");
const defaultSrcCSPDirectives = ["'self'", "https://igassmann.me", "https://*.igassmann.me"]

module.exports = {
  reactStrictMode: true,
  distDir: './dist/',
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