/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'

import '../styles/index.scss'

import Icon from '../images/icon.png';

import { Col } from 'reactstrap'

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
        <img className="icon" src={Icon} alt="" />
        <h1 className="title">{pageTitle}</h1>
        <h3 className="brand-description">Community-based stories to inspire your natural hair journey.</h3>
          <div className="row justify-content-center">
            <div>{children}</div>
          </div>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
