require('dotenv').config({
  path: `.env.local`, // Carga .env.development o .env.production según NODE_ENV
});


console.log(process.env);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Drupal Headless Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: process.env.GATSBY_DRUPAL_BASE_URL,
        apiBase: process.env.GATSBY_API_BASE,
      },
    },
  ]
};