import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development promotions</h1>
                <Typed
                className="typed-text"
                strings={["Software Engineering","Web Design", "Web Development", "And more"]}
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
