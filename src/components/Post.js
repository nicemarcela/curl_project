import React from 'react'
import { Link } from 'gatsby'
import { Card, CardBody, CardText, CardSubtitle, CardTitle } from 'reactstrap'

const Post = ({ title, author, slug, date, body, tags }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={slug}>
                        {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by {' '}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
               
                <Link to={slug} className="btn btn-outline-primary float-right">Read more</Link>
            </CardBody>
        </Card>
    )
}

export default Post