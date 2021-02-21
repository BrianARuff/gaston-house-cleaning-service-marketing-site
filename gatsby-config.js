module.exports = {
  siteMetadata: {
    title: `Gastonia House Cleaning`,
    description: `The best home cleaning service in the Charlotte Metropolitan area.`,
    author: `Brian Ruff`,
    region: `Gastonia`,
    rel: "canonical",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/broom-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/broom-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `src/images/broom-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `src/images/broom-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `src/images/broom-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `src/images/broom-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `src/images/broom-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `src/images/broom-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `src/images/broom-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `src/images/broom-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `any maskable`
          }
        ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
