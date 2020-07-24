import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <StaticQuery query={IndexQuery} render={data => {
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
            tags={node.frontmatter.tags}
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
          author
          tags
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
