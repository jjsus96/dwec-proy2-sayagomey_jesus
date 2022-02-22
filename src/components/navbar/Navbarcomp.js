import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Navbarcomp extends Component {
  render() {
    return <div>
      <Navbar className='menu' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to={"/Portfolio"}>Jesús Sayago Mey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Portfolio#home">Inicio</Nav.Link>
            <Nav.Link href="/Portfolio#formation">Formación</Nav.Link>
            <Nav.Link href="/Portfolio#project">Proyectos</Nav.Link>
            <Nav.Link href="/Portfolio#contact">Contacto</Nav.Link>
            <Nav.Link href="/Portfolio#clima">Clima</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Recuperaciones" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Tema1"}>Tema 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/Tema3"}>Tema 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
    </div>;
  }
}
