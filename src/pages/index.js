import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout pageTitle="What the Curl">
    <SEO title="Home" />
    <StaticQuery 
    query={IndexQuery} 
    render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
            key={node.id}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            body={node.excerpt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </div>
      )
    }}
    />
  </Layout>
)

const IndexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString:"MMM Do YYYY")
          product1 {
            title
            description
            image {
              publicURL
            }
          }
          product2 {
            title
            description
            image {
              publicURL
            }
          }
          product3 {
            title
            description
            image {
              publicURL
            }
          }
          author
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
