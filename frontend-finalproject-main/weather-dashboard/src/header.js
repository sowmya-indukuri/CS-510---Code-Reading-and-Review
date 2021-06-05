import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from 'reactstrap'
import logo from './logo.png'
import './headerstyle.css'
import './App.css'

//This function is called from homepage where it contains
//the major route logic and navbar code.

//This handles toggling events between about page and dashboard page
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handletoggle = () => {
    setIsOpen(!isOpen)
  }
  // Setting the font color for header
  const headStyle = {
    color: 'white',
  }

  const headerstyle = {
    color: 'white',
  }

  return (
    //Main div for navbar inside header
    <div className="container-fluid pad">
      <Navbar bg="light" variant="light" expand="sm">
        <NavbarBrand style={headStyle} href="/frontend-finalproject/">
          <img src={logo} width="40" height="35" alt="weather icon" />
          <span className="wtitle">&nbsp;Weather Dashboard</span>
        </NavbarBrand>
        <NavbarToggler
          className="toggle"
          onClick={handletoggle}
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
        >
          <div className="animated-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>

        <Collapse id="basic-navbar-nav" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="font-weight-normal"
                href="/frontend-finalproject/#/About"
                style={headerstyle}
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Header
