import React from "react";
import logo from "../Abhishekh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src= {logo} alt="Abhishek" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style = {{ color: "#fff" }}/>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-95} className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-95} className="nav-link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" offset={-95} className="nav-link" href="#">Working Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" offset={-95} className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contacts" offset={-95} className="nav-link" href="#">Contacts</Link>
      </li>
    </ul>
  </div>
        </div>
      </nav>
    )
}

export default Navbar
