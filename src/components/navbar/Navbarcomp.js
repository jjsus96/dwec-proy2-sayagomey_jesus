import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default class Navbarcomp extends Component {
  render() {
    return <div>
      <Navbar className='menu' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Jesús Sayago Mey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#formation">Formación</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Recuperaciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#tema1">Tema 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tema3">Tema 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
    </div>;
  }
}
