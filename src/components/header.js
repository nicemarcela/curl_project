import PropTypes from "prop-types"
import React from "react"
import About from "../images/about.png"
import Instagram from "../images/insta.png"
import Icon from "../images/icon.png"

import {
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledPopover, 
  PopoverHeader, 
  PopoverBody
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
        <div className="nav-bar">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink href="/">
                <img style={{width: "50px", imageRendering: "pixelated"}} alt="" src={Icon}/>
                <span className="d-block mt-2">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" id="PopoverLegacy" type="button">
                <img alt="" src={About}/>
                <span className="d-block mt-2">WTC.txt</span>
                </NavLink>
                <UncontrolledPopover trigger="legacy" placement="right" target="PopoverLegacy">
                    <PopoverHeader  style={{fontFamily: "Chicago"}}>About Us</PopoverHeader>
                    <PopoverBody style={{fontFamily: "Roboto Mono,monospace"}}>
                      We wander the world to display the best curl inspo on your screen. <br />
                      Built by the community for the community, based on the opinion and tests of real people that have the same hair type as you. 
                      <br /> So, take a look around, inspire yourself, click what you love, read what you want, and only buy what you need.
                      <br />
                      <br /> We're slowly building our community and would love to listen your feedback, say hello here: hello.whathecurl@gmail.com</PopoverBody>
                </UncontrolledPopover>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer"href="https://www.instagram.com/whathecurl">
                <img className="mb-2" alt="" src={Instagram}/>
                <span className="d-block mt-2">Instagram</span>
                </NavLink>
              </NavItem>
            </Nav>
        </div>

    );
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
