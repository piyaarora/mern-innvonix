import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Event Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

      <Nav.Link><Link to="/login" style={{color:'#fff'}}>Login</Link></Nav.Link>
      <Nav.Link><Link to="/register"  style={{color:'#fff'}}>Register</Link></Nav.Link>
     </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation
