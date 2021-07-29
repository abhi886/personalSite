import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Abhishekh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";

class Navbar extends Component {
  handleSelect = () => {
    console.log("Clicked");
  };
  state = {};
  render() {
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
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink exact to='/' className='nav-link'>
                  Home <span className='sr-only'>(current)</span>
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink to='/about' className='nav-link'>
                  About Me
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink smooth='true' to='/services' className='nav-link'>
                  Services
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink smooth='true' to='/experience' className='nav-link'>
                  Working Experience
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink smooth='true' to='/portfolio' className='nav-link'>
                  Portfolio
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink smooth='true' to='/contacts' className='nav-link'>
                  Contacts
                </NavLink>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                <NavLink smooth='true' to='/login' className='nav-link'>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
