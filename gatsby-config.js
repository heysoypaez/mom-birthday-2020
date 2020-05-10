module.exports = {
  siteMetadata: {
    title: 'Gatsby and GraphCMS',
  },
  pathPrefix: '/gatsby-graphcms-tailwindcss-example',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `json`, // a fixed string
      },
    },
  ],
}
