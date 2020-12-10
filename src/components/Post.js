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
    linkURL,
    type,
    color
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
                            </nav>
                        </header>
                <div className='dragbar-right' id="resize-right"></div>
                <div className='dragbar-left' id="resize-left"></div>
                <div className='dragbar-bottom' id="resize-bottom"></div>
                <div  className="window-content">
                <span style={{color}}>
                
                <CardTitle>
                    <Link to={`/${slug}/`}>
                       <h2>{title}</h2>
                    </Link>
                </CardTitle>
                
                <Link to={`/${slug}/`}>
                    <Img className="card-image" fluid={fluid} />
                </Link>
            {/* <h1 id='headline'>What The Curl</h1> */}
                
                <CardText>
                    {body}
                    {product1}
                    {product2}
                    {product3}
                    
                </CardText>
                
                <Link to={`/${slug}/`} className="float-right item window1">
                <button className="double-shadow highlighted">
                Read More
                </button>
                </Link>
                
                </span>
                </div>
                </div>
                
            </CardBody>
            
        </div>
    )
}

export default Post