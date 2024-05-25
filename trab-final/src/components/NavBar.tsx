import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/home">Meu Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/link">Link</Nav.Link>
          <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
          <Nav.Link as={Link} to="/carrinho">Carrinho</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" as={Link} to="/login">Login</Button>
          <Button variant="primary" className="ml-2" as={Link} to="/register">Registro</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;