import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      list-app
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
)

export default Header
