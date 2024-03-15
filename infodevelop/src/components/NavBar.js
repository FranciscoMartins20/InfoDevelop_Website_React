import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import '../css/NavBar.css';
import image from '../images/Logotipo_infodevelop.bmp';

const NavBar = () => {
  return (
    
    <Navbar className="navbar-custom fixed-top" variant="dark" expand="lg" sticky='top'>
      <Navbar.Brand href="/">
        <Image src={image} alt="Logo da InfoDevelop" className='navbar-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about" className="nav-link-button"><Button variant="outline-light">Sobre Nós</Button></Nav.Link>
          <Nav.Link href="/service" className="nav-link-button"><Button variant="outline-light">Serviços</Button></Nav.Link>
          <Nav.Link href="/contact" className="nav-link-button"><Button variant="outline-light">Contactos</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
