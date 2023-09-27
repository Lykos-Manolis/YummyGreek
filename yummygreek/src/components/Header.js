import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container>
        {/* Name-Brand */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Eo_circle_orange_white_letter-y.svg/2048px-Eo_circle_orange_white_letter-y.svg.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="YummyGreek"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand>Brand text</Navbar.Brand>
        {/* Collapsable Navbar Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/order">
              <Nav.Link>Your Order</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/details">
              <Nav.Link>Details</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
