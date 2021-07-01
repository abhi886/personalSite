import React from "react";
import { Link } from "react-router-dom";
import logo from "../Abhishekh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img className='logo' src={logo} alt='Abhishek' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link to='/' className='nav-link'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth='true' to='/services' className='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth='true' to='/experience' className='nav-link'>
                Working Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth='true' to='/portfolio' className='nav-link'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth='true' to='/contacts' className='nav-link'>
                Contacts
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth='true' to='/login' className='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
