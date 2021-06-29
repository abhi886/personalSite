import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div>
      <div id='services' className='services'>
        <h1 className='py-5'> My services </h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faDesktop}
                    size='2x'
                  />
                </div>
                <h3>Single Page Application</h3>
                <p> Let me create a single page application for your ....</p>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFileCode}
                    size='2x'
                  />
                </div>
                <h3> Static Content Oriented Websites</h3>
                <p>
                  {" "}
                  Static content is any content that can be delivered to an end
                  user without having to be generated ....{" "}
                </p>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFacebookF}
                    size='2x'
                  />
                </div>
                <h3>Dynamic Websites</h3>
                <p>
                  {" "}
                  A dynamic website is a site that contains dynamic pages such
                  as templates, contents,{" "}
                </p>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon className='icon' icon={faGoogle} size='2x' />
                </div>
                <h3>API</h3>
                <p> Node JS with Express.JS and Mongodb ....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
