import React from 'react';
import netflix from "../images/netflix.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    //Netflix
    const openPopupboxNetflix = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, impedit.</p>
        <b>GitHub:</b>  <a className="hyperlink" onClick ={() => window.open("https://github.com/abhi886/hisab-Kitab")}>https://github.com/abhi886/hisab-Kitab</a>
        </>)
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable:true,
            text: "Netflix clone project."

        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
       <div id="portfolio" className="portfolio-wraper">
           <div className="container">
               <h1 className="text-uppercase text-center py-5">Portfolio</h1>
               <div className="image-box-wrapper row justify-content-center">
                   <div className="portfolio-image-box" onClick = {openPopupboxNetflix}>
                   <img className="portfolio-image" src={netflix} alt="Netflix clone project"/>
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                   </div>

               {/* - */}
               <div className="portfolio-image-box">
                   <img className="portfolio-image" src={netflix} alt="Netflix clone project"/>
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                   </div>
                                  {/* - */}
               <div className="portfolio-image-box">
                   <img className="portfolio-image" src={netflix} alt="Netflix clone project"/>
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                   </div>
                                  {/* - */}
               <div className="portfolio-image-box">
                   <img className="portfolio-image" src={netflix} alt="Netflix clone project"/>
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                   </div>
                                  {/* - */}
                                  </div>
           </div>
           <PopupboxContainer {...popupboxConfigNetflix} />
       </div>

    )
}

export default Portfolio
