import { Link } from 'gatsby'
import React from 'react'

import Icon from '../images/icon.png'


const Footer = () => (
  <div className="site-footer">
    <div className="first-col">
        <img className="icon" src={Icon} alt="" />
        <p className="card-subtitle">Community-based stories to inspire your natural-hair journey. 🌱</p>
    </div>

    <div className="second-col">
        <h1 id="explore">Explore</h1>
        <ul className="social-links-list">
            <li>
            <Link to="/submit">
                <p className="card-subtitle">Submit Your Story</p>
            </Link>
            </li>
        </ul>

        <ul className="social-links-list">
            <li>
            <a
            href="https://www.instagram.com/whathecurl"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            > 
                <p className="card-subtitle">Follow us on Instagram</p>
            </a>
            </li>
        </ul>
        
    </div>
  </div>
)

export default Footer