import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Menu: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: '#0B0B0F', color: 'white', fontSize: 'bold'}} expand="lg" fixed="top" data-bs-theme="dark">
      <Navbar.Brand as={Link} to="/home">
        <img style={{width: 100, marginLeft: 50}} src={Logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle style={{marginRight: 50}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{marginRight: 50, marginLeft: 50, padding: 10, }} id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
          <Nav.Link as={Link} to="/carrinho">Carrinho</Nav.Link>
        </Nav>
        <Nav style={{gap: 20,}}>
          <Button style={{color: 'white', borderColor: '#933FFE', }} variant="outline-primary" as={Link} to="/login">Sign In</Button>
          <Button style={{color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE' }} variant="primary" className="ml-2" as={Link} to="/register">Registro</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;