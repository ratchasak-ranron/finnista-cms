module.exports = ({ env }) => ([
  "strapi::errors",
  'strapi::logger',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `${process.env.AWS_ALLOW_IMG_SRC}`,
            "market-assets.strapi.io"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `${process.env.AWS_ALLOW_IMG_SRC}`,
            "market-assets.strapi.io"
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
]);
