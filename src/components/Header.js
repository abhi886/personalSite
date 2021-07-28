import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faBlog } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>HI. I AM ABHISHEKH MAHARJAN</h1>
        <Typed
          className='typed-text'
          strings={[
            "Software Engineer",
            "Full Stack Software Developer",
            "Web Developer",
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
        />
        <Link to='#' className='btn-main-offer'>
          {" "}
          CONTACT ME !
        </Link>
        <div className='social'>
          <ul className=''>
            <li>
              <Link to='/#'>
                <FaGithub size={30} />
              </Link>
            </li>
            <li>
              <Link to='/#'>
                <FaLinkedinIn size={30} />
              </Link>
            </li>
            <li>
              <Link to='/#'>
                <FaFacebookF size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
