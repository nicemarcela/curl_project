import { Link } from 'gatsby'
import React from 'react'

import Icon from '../images/icon.png'


const Footer = () => (
  <div className="container" style={{maxWidth:'100%'}}>
    <div className="site-footer row justify-content-center">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-lg-left">
            <img className="icon m-lg-0" src={Icon} alt="" />
            <p className="card-subtitle">Community-based stories to inspire your natural-hair journey. 🌱</p>
        </div>

        <div className="col-12 col-lg-4 text-lg-right">
            <h1 className="text-lg-right" id="explore">Explore</h1>
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
  </div>
)

export default Footer