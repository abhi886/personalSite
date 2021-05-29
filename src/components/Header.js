import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>HI. I AM ABHISHEKH MAHARJAN</h1>
                <Typed
                className="typed-text"
                strings={["Software Engineer","Full Stack Software Developer", "Web Developer"]}
                typeSpeed={20}
                backSpeed={40}
                loop
                />
                <a href="#" className="btn-main-offer"> CONTACT ME !</a>
            </div>
            
        </div>
    )
}

export default Header;
