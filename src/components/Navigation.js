import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../images/Abhishekh.png";
// import Nav from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container"; // import { NavLink, Link } from "react-router-dom";
// import logo from "../Abhishekh.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect bg='dark' expand='sm'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src={logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>Home</Nav.Link>
            <Nav.Link href='#pricing'>About Me</Nav.Link>
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
