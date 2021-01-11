module.exports = {
  siteMetadata: {
    title: `WordPress Gatsby Starter`,
    author: `Justin W Hall`,
    description: `A Gatsby WordPress Starter with special love for Netlify`,
    siteUrl: `https://gatsby-wordpress-netlify-production.netlify.com`,
    social: {
      twitter: `justinwhall`,
    },
    postPrefix: "/blog",
    pagePrefix: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // The base url to your WP site.
        baseUrl: "fortis.wordofmouthagency.com.au",
        // baseUrl: "gatsbynetliflydemo.justinwhall.com",
        // baseUrl: "data.justinwhall.com",
        // baseUrl: "wpgatsby.wtf",
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: "http",
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {
          htaccess_user: "wn5rha_admin",
          htaccess_pass: "QnhrsUDwU5xfEqsB525NNU",
          htaccess_sendImmediately: false,
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        excludedRoutes: ["/*/*/comments", "/yoast/**", "/oembed/*"],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
