import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container"; // import { NavLink, Link } from "react-router-dom";
// import logo from "../Abhishekh.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
