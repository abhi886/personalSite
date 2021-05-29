import React from 'react';
import author from "../abhishek.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5" >
                <img className="profile-img" src={author} alt="author..."/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                <p>Hi, I am Abhishekh Maharjan, 
                    a Software Engineer with a strong background that encompasses diverse aspects of Software Engineering.
                    Currently, I am living in Canberra, Autralia. I’m seeking to heighten my experience towards becoming a Full Stack Software Engineer. 
                    My programming acumen includes knowledge in React, Nodejs and JavaScript ecosystem. 
                    </p>
            </div>

            </div> 
        </div>
    )
}

export default AboutMe
