import React from 'react'
import { Link } from 'gatsby'
import { CardText, CardSubtitle, CardTitle, CardDeck, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
// import Layout from "../components/layout"

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
    instaURL,
    instagrammer,
    type,
    tags,
 }) => {
    return (
    <layout>
        <CardDeck>
        <div className="card-body px-0">
            <div className="window window-2">     
                <header className="window-header">
                    <ul>{tags.map(tag => (
                        <li key={tag}>
                            <Link to={`/tag/${slugify(tag)}`}>
                            <Badge color="badge badge-light mb-1 text-center" pill>
                                {tag}
                            </Badge>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <CardSubtitle>
                        <span className="card-subtitle">{date}</span> by {' '}
                        <a href={linkURL} target="_blank" rel="noopener noreferrer" className="text-info">{author} 
                        </a>
                    </CardSubtitle>
                    <nav className="window-controls"></nav>
                </header>
            <div className='dragbar-right' id="resize-right"></div>
            <div className='dragbar-left' id="resize-left"></div>
            <div className='dragbar-bottom' id="resize-bottom"></div>
            <div  className="window-content p-4">
            
            <CardTitle>
                <Link to={`/${slug}/`}>
                <h2>{title}</h2>
                </Link>
            </CardTitle>
            
            
            <Link to={`/${slug}/`}>
                <Img className="card-image my-4 w-100" fluid={fluid} />
            </Link>
        {/* <h1 id='headline'>What The Curl</h1> */}
            <Link to={`/${slug}/`}>
                <CardText className="mx-0 mb-4">
                    {body}
                    {product1}
                    {product2}
                    {product3}
                </CardText>
            </Link>

            <Link to={`/${slug}/`} className="float-right item window1">
            <button className="double-shadow highlighted">
            More
            </button>
            </Link>
        

            </div>
            </div>
        </div>
        </CardDeck>
    </layout>
    )
}

export default Post