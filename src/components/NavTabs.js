import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
// import { Document} from 'react-pdf'

// import resume from "../images/samantha-scibetta-resume2021-redacted.pdf"
import pop from "../images/lolipop.png";

function NavTabs() {

  return (
    <div>
      <img src={pop} className="pop" alt="circle line design" />
      <Navbar className="navbar-dark" fixed="top" bg="#2f4f4f" expand="lg">
        <Navbar.Brand>Sam Scibetta's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/graphic">Graphic Design</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/web">Web Development</NavLink>
            </NavItem>


            {/* <NavItem>
              <button type="button" className="view-btn">
                <Document
                  file={resume} target="_blank">Download Resume
                </Document></button>
            </NavItem> */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavTabs;

