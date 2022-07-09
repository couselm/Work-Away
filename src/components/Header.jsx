import React from "react";
import LaptopMac from "@mui/icons-material/LaptopMac";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function Header() {
  return (
    <header>
<Navbar bg="success" variant="dark" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="/" className="mb-0 h1"><LaptopMac />  WorkAway</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/create">Create</Nav.Link>
        <Nav.Link href="/create">Explore</Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  );
}

export default Header;
