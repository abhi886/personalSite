import React from "react";
import logo from "../Abhishekh.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src= {logo} alt="Abhishek" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
        </div>
      </nav>
    )
}

export default Navbar
