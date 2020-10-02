import React from 'react'
// import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { CardBody, CardSubtitle, Media, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import Header from "../components/header"

const SinglePost = ({ data, pageContext}) => {
    const post = data.markdownRemark.frontmatter
    
    // const baseUrl = 'https://whathecurl.com'



    return (
      <div>
      <Header />
       <div className="container" id="content">
         {/* <Layout pageTitle={post.title}> */}
            
            <SEO title={post.title} />
            
            <CardBody pagetitle={post.title}>
            <div className="window draggable window-singlepost">
                <header className="window-header">
                <CardSubtitle>
                    <span>{post.date}</span> by {' '}
                    <a href={post.linkURL} target="_blank" rel="noopener noreferrer" className="text-info">{post.author}</a>
                </CardSubtitle>
                <a href='/' id="close-button" className="window-control-close">
                    <svg>
                      <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </a>
                </header>
                <div className='dragbar-right' id="resize-right"></div>
                <div className='dragbar-left' id="resize-left"></div>
                <div className='dragbar-bottom' id="resize-bottom"></div>

                <div className="window-content">
                  <h1>{post.title}</h1>
                  <Badge color="light" pill>{post.type}</Badge>
                  <Badge href={post.linkURL} target="_blank" rel="noopener noreferrer" color="light" pill>{post.author}</Badge>
                  <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                  <div className="singlepost-text" 
                  dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html }} >
                  </div>
                    <Media className="mt-4">
                      <Media href={post.product1.productURL} target="_blank" rel="noopener noreferrer" left top >
                        <img style={{width: "100px"}} src={post.product1.image.publicURL} alt="Product" />
                      </Media>
                      <Media body>
                        <Media heading>
                          {post.product1.title}
                        </Media>
                        {post.product1.description}
                      </Media>
                    </Media>

                    <Media className="mt-4">
                      <Media href={post.product2.productURL} target="_blank" rel="noopener noreferrer" left middle>
                        <img style={{width: "100px"}} src={post.product2.image.publicURL} alt="Product" />
                      </Media>
                      <Media body>
                        <Media heading>
                        {post.product2.title}
                        </Media>
                        {post.product2.description}
                      </Media>
                    </Media>

                    <Media className="mt-4">
                      <Media href={post.product3.productURL} target="_blank" rel="noopener noreferrer" left bottom>
                        <img style={{width: "100px"}} src={post.product3.image.publicURL} alt="Product" />
                      </Media>
                      <Media body>
                        <Media heading>
                          {post.product3.title}
                        </Media>
                        {post.product3.description}
                      </Media>
                    </Media>
                </div>
                </div>
            </CardBody>
            {/* </Layout> */}
            </div>
       
        {/* <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                'https://www.facebook.com/sharer/sharer.php?u=' +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x" />
            </a>
          </li>
          <li>
            <a
              href={
                'https://twitter.com/share?url=' +
                baseUrl +
                pageContext.slug +
                '&text=' +
                post.title +
                '&via' +
                'twitterHandle'
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
        </ul>
      </div> */}
      </div>
      
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                linkURL
                title
                type
                author
                backgroundColor
                date(formatString:"MMM Do YYYY")
                product1 {
                  title
                  description
                  image {
                    publicURL
                  }
                  productURL
                }
                product2 {
                  title
                  description
                  image {
                    publicURL
                  }
                  productURL
                }
                product3 {
                  title
                  description
                  image {
                    publicURL
                  }
                  productURL
                }
                image {
                  childImageSharp {
                    fluid(maxWidth: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
    }

`
export default SinglePost