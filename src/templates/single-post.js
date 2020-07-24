import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { slugify } from '../util/utilityFunctions'
import { Card, CardBody, CardSubtitle } from 'reactstrap'


const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={post.title} />
            <h1>{post.title}</h1>
            <Card>
            <CardBody>
                <CardSubtitle>
                    <span className="text-info">{post.date}</span> by {' '}
                    <span className="text-info">{post.author}</span>
                </CardSubtitle>
            </CardBody>
            <div dangerouslySetInnerHTML = {{ __html: data.markdownRemark.html }} ></div>
        </Card>
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
                tags
            }
        }
    }

`
export default SinglePost