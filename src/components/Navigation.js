import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../images/Abhishekh.png";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src={logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'>
          {" "}
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about-me'>About Me</Nav.Link>
            <Nav.Link href='#services'>Services</Nav.Link>
            <Nav.Link href='#Experiene'>Experience</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='#contacts'>Contact</Nav.Link>
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
