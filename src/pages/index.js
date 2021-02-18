import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'
import MailChimpForm from "../components/MailChimpForm"
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => { 
  const postsPerPage = 5;
  let numberOfPages
  return (
  <Layout pageTitle="What the Curl">
    <SEO title="Home" />
    <StaticQuery 
    query={IndexQuery} 
    render={data => {
      numberOfPages = Math.ceil(
        data.allMarkdownRemark.totalCount / postsPerPage
      )
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
            linkURL={node.frontmatter.linkURL}
            type={node.frontmatter.type}
            color= {node.frontmatter.color}
            />
            
          ))}
          <PaginationLinks
          currentPage={1}
          numberOfPages={numberOfPages}
          />
        </div>
      )
    }}
    />
    <MailChimpForm />
  </Layout>
  )
 }

const IndexQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
    limit: 5 
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          linkURL
          title
          type
          color
          date(formatString:"MMM Do YYYY")
          product1 {
            title
            description
            gallery {
              image {
                publicURL 
              }
              productURL
            }
            
          }
          product2 {
            title
            description
            gallery {
              image {
                publicURL
                
              }
              productURL
            }
            
          }
          product3 {
            title
            description
            gallery {
              image {
                publicURL
              }
              productURL
            }
            
          }
          author
          image {
            childImageSharp {
              fluid {
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
