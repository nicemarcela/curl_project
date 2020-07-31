import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle } from 'reactstrap'
import { DiscussionEmbed } from 'disqus-react'

const SinglePost = ({ data, pageContext}) => {
    const post = data.markdownRemark.frontmatter
    
    const baseUrl = 'https://gatsbytutorial.co.uk/'

    const disqusShortname = 'https-gatsbytutorial-co-uk'
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }

    return (
        <Layout pageTitle={post.title}>
            <SEO title={post.title} />
            <Card>
            <CardBody>
                <CardSubtitle>
                    <span className="text-info">{post.date}</span> by {' '}
                    <span className="text-info">{post.author}</span>
                </CardSubtitle>
            </CardBody>
            <div dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html }} ></div>
        </Card>

        <h3 className="text-center">Share this post</h3>
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
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                author
                date(formatString:"MMM Do YYYY")
            }
        }
    }

`
export default SinglePost