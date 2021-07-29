import React from "react";
import rollingNexus from "../images/rollingNexus.png";
import rollingPlans from "../images/rollingplans.png";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Rolling Nexus
  const openPopupboxRollingNexus = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={rollingNexus}
          alt='Rolling Nexus'
        />
        <p>A Professional Networking Site.</p>
        <b>URL:</b>{" "}
        <a
          className='hyperlink'
          onClick={() => window.open("https://rollingnexus.com/")}
        >
          https://rollingnexus.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Rolling Plans
  const openPopupboxRollingPlans = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={rollingPlans}
          alt='Rolling Plans'
        />
        <p>An Electronic Recruitment system</p>
        <b>URL:</b>{" "}
        <a
          className='hyperlink'
          onClick={() => window.open("https://rollingplans.com.np/")}
        >
          https://rollingplans.com.np/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigRollingNexus = {
    titleBar: {
      enable: true,
      text: "Rolling Nexus",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const popupboxConfigRollingplans = {
    titleBar: {
      enable: true,
      text: "Rolling Plans",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <>
      <div id='portfolio' className='portfolio-wraper'>
        <div className='container'>
          <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
          <div className='image-box-wrapper row justify-content-center'>
            <div
              className='col-sm-3 portfolio-image-box'
              onClick={openPopupboxRollingNexus}
            >
              <img
                className='portfolio-image'
                src={rollingNexus}
                alt='Rolling Nexus Project'
              />
              <div className='overflow'></div>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
              <div className='portfolio-tools-cont'>
                <ul class='portfolio-tools'>
                  <li>php</li>
                  <li>CSS (Bootstrap)</li>
                  <li>jQuery</li>
                  <li>mySql</li>
                </ul>
              </div>
            </div>

            {/* - */}
            <div
              className='col-sm-3 portfolio-image-box'
              onClick={openPopupboxRollingPlans}
            >
              <img
                className='portfolio-image'
                src={rollingPlans}
                alt='Rolling Plans Project'
              />
              <div className='overflow'></div>
              <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
              <div className='portfolio-tools-cont'>
                <ul class='portfolio-tools'>
                  <li>php</li>
                  <li>CSS (Bootstrap)</li>
                  <li>jQuery</li>
                  <li>mySql</li>
                </ul>
              </div>
            </div>
            {/* - */}
            {/* <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={netflix}
              alt='Netflix clone project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div> */}
            {/* - */}
            {/* <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={netflix}
              alt='Netflix clone project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div> */}
            {/* - */}
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigRollingNexus} />{" "}
        <PopupboxContainer {...popupboxConfigRollingplans} />
      </div>
    </>
  );
};

export default Portfolio;
