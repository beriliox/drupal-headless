require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // Carga el archivo según el entorno (ejemplo: .env.development o .env.production)
});

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
        options: {
          baseUrl: process.env.GATSBY_DRUPAL_BASE_URL,
          apiBase: process.env.GATSBY_API_BASE,
        },
      },
    },
  ]
};