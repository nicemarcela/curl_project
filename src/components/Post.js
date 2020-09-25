import React from 'react'
import { Link } from 'gatsby'
import {  CardBody, CardText, CardSubtitle, CardTitle } from 'reactstrap'
import Img from 'gatsby-image'

const Post = 
 ({ title, 
    author, 
    slug, 
    date, 
    body, 
    fluid, 
    product1, 
    product2, 
    product3, 
    linkURL
 }) => {
    return (
        <div>
            <CardBody>
                <div className="window draggable window-2">
                        <header className="window-header">
                        <CardSubtitle>
                            <span className="text-info">{date}</span> by {' '}
                            <a href={linkURL} target="_blank" rel="noopener noreferrer" className="text-info">{author}</a>
                        </CardSubtitle>
                            <nav className="window-controls">
                            
                            {/* <a href='#1' id="close-button" className="window-control-close">
                                <svg>
                                <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                                </svg>
                            </a> */}
                            </nav>
                        </header>
                <div className='dragbar-right' id="resize-right"></div>
                <div className='dragbar-left' id="resize-left"></div>
                <div className='dragbar-bottom' id="resize-bottom"></div>
                <div className="window-content">
                <CardTitle>
                <Link to={slug}>
                    {title}
                </Link>
                </CardTitle>
                
                <Link to={slug}>
                    <Img className="card-image" fluid={fluid} />
                </Link>
            {/* <h1 id='headline'>What The Curl</h1> */}
                
                <CardText>
                    {body}
                {product1}
                {product2}
                {product3}

                </CardText>
               
                <Link to={slug} className="btn btn-outline-primary float-right">Read more</Link>
                </div>
                </div>
            </CardBody>
            
        </div>
    )
}

export default Post