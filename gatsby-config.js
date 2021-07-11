require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `What The Curl`,
    description: `Community-based stories to inspire your natural hair journey.🌱`,
    author: `@nicemarcela`,
  },
  
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-instagram`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
      },
  },

  // {
  //   resolve: `gatsby-plugin-feed`,
  //   options: {
  //     query: `
  //       {
  //         site {
  //           siteMetadata {
  //             title
  //             description
  //             siteUrl
  //             site_url: siteUrl
  //           }
  //         }
  //       }
  //     `,
  //     feeds: [
  //       {
  //         serialize: ({ query: { site, allMarkdownRemark } }) => {
  //           return allMarkdownRemark.edges.map(edge => {
  //             return Object.assign({}, edge.node.frontmatter, {
  //               description: edge.node.excerpt,
  //               date: edge.node.frontmatter.date,
  //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
  //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
  //               custom_elements: [{ "content:encoded": edge.node.html }],
  //             })
  //           })
  //         },
  //         query: `
  //           {
  //             allMarkdownRemark(
  //               sort: { order: DESC, fields: [frontmatter___date] },
  //             ) {
  //               edges {
  //                 node {
  //                   excerpt
  //                   html
  //                   fields { slug }
  //                   frontmatter {
  //                     title
  //                     date
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         `,
  //         output: "/rss.xml",
  //         title: "Your Site's RSS Feed",
  //         // optional configuration to insert feed reference in pages:
  //         // if `string` is used, it will be used to create RegExp and then test if pathname of
  //         // current page satisfied this regular expression;
  //         // if not provided or `undefined`, all pages will have feed reference inserted
  //         match: "^/blog/",
  //       },
  //     ],
  //   },
  // },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ratings`,
        path: `${__dirname}/src/pages/ratings`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
            backgroundColor: 'none',
            disableBgImage: true
            }
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: true,
              dataAttributes: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MGS238GPKZ", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
