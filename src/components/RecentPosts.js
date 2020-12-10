import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,

} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const RecentPosts = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          You may also like...
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div style={{display: "-webkit-inline-box"}}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card className="window recent-post-card" key={node.id}>
                  
                  <Link to={`/${node.fields.slug}/`}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <div className='dragbar-right' id="resize-right"></div>
                <div className='dragbar-left' id="resize-left"></div>
                <div className='dragbar-bottom' id="resize-bottom"></div>
                  <CardBody>
                    <h5 className="recent-post-card-title">
                      <Link to={`/${node.fields.slug}/`}>
                        {node.frontmatter.title}
                      </Link>
                    </h5>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

export const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default RecentPosts