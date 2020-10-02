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
            <Nav vertical >
              <NavItem>
                <NavLink href="/">
                <img style={{width: "50px", imageRendering: "pixelated"}} alt="" src={Icon}/>
                <span>Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" id="PopoverLegacy" type="button">
                <img alt="" src={About}/>
                <span 
                // className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick} 
                >WTC.txt</span>
                </NavLink>
                <UncontrolledPopover trigger="legacy" placement="right" target="PopoverLegacy">
                    <PopoverHeader>Legacy Trigger</PopoverHeader>
                    <PopoverBody>
                      Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
                </UncontrolledPopover>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer"href="https://www.instagram.com/whathecurl">
                <img alt="" src={Instagram}/>
                <span>Instagram</span>
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
