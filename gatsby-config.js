require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `CoreyKogan.dev`,
    description: `Corey Kogan's Portfolio and Blog`,
    author: `@coreykogan`,
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
        name: `corey-kogan-dev`,
        short_name: `coreykogan.dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "STRAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        url: "https://admin.coreykogan.dev/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `orange`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ 
        }
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
  ],
}
