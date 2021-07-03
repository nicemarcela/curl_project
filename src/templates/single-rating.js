// import Layout from '../components/layout'
import React from 'react';
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { CardBody, CardSubtitle, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import Header from "../components/header"
import RecentPosts from "../components/RecentPosts"
import MailChimpForm from "../components/MailChimpForm"
import Footer from "../components/Footer"

const SingleRating = ({ data, pageContext, node}) => {
    const post = data.markdownRemark.frontmatter
    return (
      <div>
      <Header />
      <div className="container px-0" id="content">
         
         <SEO
            author={post.author}
            title={post.title}
            description={post.description}
        />
            
            <CardBody pagetitle={post.title} className="p-0 mb-4">
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

                <div className="window-content p-3">
                  <h1>{post.title}</h1>
                  <div className="text-center">
                    <Badge color="light mb-2 text-center mr-2" pill>{post.type}</Badge>
                    <Badge href={post.instaURL} target="_blank" rel="noopener noreferrer" color="light" pill>{post.instagrammer}</Badge>
                  </div>
              
                  <Img className="card-image my-4 w-100" fluid={post.image.childImageSharp.fluid} />
                  <div className="singlepost-text" 
                  dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html }} >
                  </div>
                  <MailChimpForm />
                </div>
                </div>
            </CardBody>
            <RecentPosts />
            </div>
            < Footer/>
            </div>
    )
}

export const postQuery = graphql`
    query ratingPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                linkURL
                instaURL
                title
                type
                author
                instagrammer
                date(formatString:"MMM Do YYYY")
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
export default SingleRating