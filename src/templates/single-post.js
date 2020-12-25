// import Layout from '../components/layout'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { CardBody, CardSubtitle, Media, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import Header from "../components/header"
import RecentPosts from "../components/RecentPosts"

const SinglePost = ({ data, pageContext, node}) => {
    const post = data.markdownRemark.frontmatter
    const bgColor =  data.markdownRemark.frontmatter.color
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div>
      <Header />
       <div className="container" id="content">
         
         <SEO
            author={post.author}
            title={post.title}
            description={post.description}
        />
            
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

                <div style={{bgColor}} className="window-content">
                  <h1>{post.title}</h1>
                  <Badge color="light" pill>{post.type}</Badge>
                  <Badge href={post.linkURL} target="_blank" rel="noopener noreferrer" color="light" pill>{post.author}</Badge>
                  <Img className="card-image" fluid={post.image.childImageSharp.fluid} />
                  <div className="singlepost-text" 
                  dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html }} >
                  </div>

                  <h2 style={{fontFamily: "Fredoka One", color: "#fffb0e", WebkitTextStroke: "2px #020102"}}>Fave Products & Techniques</h2>
                    <Media className="mt-4" style={{display: "flex"}}>
                    <Media style={{width: "40%"}} left top >
                      <Carousel href={post.product1.gallery.productURL} responsive={responsive} dynamicHeight={true} autoPlay>
                        {post.product1.gallery.map((galleryImage, index) => (
                          <a style={{display: "block" }} aria-hidden="true" key={index} href={galleryImage.productURL} target="_blank" rel="noopener noreferrer">
                            <img className="product-image" src={galleryImage.image.publicURL} alt="Product" />
                          </a>
                        ))}
                      </Carousel>
                  
                      </Media>
                      <Media body>
                        <Media heading>
                          {post.product1.title}
                        </Media>
                        {post.product1.description}
                      </Media>
                    </Media>

                    <Media className="mt-4" style={{display: "flex"}}>
                      <Media style={{width: "40%"}} href={post.product2.productURL} target="_blank" rel="noopener noreferrer" left middle>
                      <Carousel  autoPlay>
                        {post.product2.gallery.map((galleryImage, index) => (
                          <a  style={{display: "block" }} aria-hidden="true" key={index} href={galleryImage.productURL} target="_blank" rel="noopener noreferrer">
                            <img src={galleryImage.image.publicURL} alt="Product" />
                          </a>
                        ))}
                      </Carousel>
                      </Media>
                      <Media body>
                      <Media heading>
                        {post.product2.title}
                      </Media>
                        {post.product2.description}
                      </Media>
                    </Media>

                    <Media className="mt-4" style={{display: "flex"}}>
                      <Media style={{width: "40%"}} href={post.product3.productURL} target="_blank" rel="noopener noreferrer" left bottom>
                      <Carousel autoPlay>
                        {post.product3.gallery.map((galleryImage, index) => (
                          <a  style={{display: "block" }} aria-hidden="true" key={index} href={galleryImage.productURL} target="_blank" rel="noopener noreferrer">
                            <img src={galleryImage.image.publicURL} alt="Product" />
                          </a>
                        ))}
                      </Carousel>
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
            <RecentPosts />
            </div>
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
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
        
    }

`
export default SinglePost