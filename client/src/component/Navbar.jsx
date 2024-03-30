import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {

  const location = useLocation();

  return (
      <Navbar collapseOnSelect expand={'lg'} bg="light" data-bs-theme="light" className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Logo
          </Navbar.Brand>
          {
            location.pathname === '/' ?
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto gap-1 gap-lg-5">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#team">Team</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
            :
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <Button>Back to Home</Button>
              </Nav.Link>
            </Nav>
          }
        </Container>
      </Navbar>
  )
}

export default Header
