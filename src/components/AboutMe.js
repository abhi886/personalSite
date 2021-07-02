import React from "react";
import author from "../abhishek.jpg";

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='aboutme-container'>
        <div className='row'>
          <div className='col-lg-6 col-xm-12'>
            <div className='photo-wrap mb-5'>
              <img className='profile-img' src={author} alt='author...' />
            </div>
          </div>
          <div className='col-lg-6 col-xm-12'>
            <h1 className='about-heading'>About Me</h1>
            <p>
              Hi, I am Abhishekh Maharjan, a Software Engineer with a strong
              background that encompasses diverse aspects of Software
              Engineering. Currently, I am living in Canberra, Australia. I’m
              seeking to heighten my experience towards becoming a Full Stack
              Software Engineer. My programming acumen includes: <br />
              🌱 My current set of toolbox: <br />
              React.js, Node.js, Express.js, MongoDB, npm, MySQL, HTML5 & CSS3,
              Docker, Babel, Git, Github, postman, Visual Studio Code <br />
              🌱 My future plans in learning: <br />
              React Native, GatsbyJS, GraphQL, AWS Lambda, AWS Amplify, Google
              Cloud Platform, Kubernetes, Webpack <br />
              🌱 I have also worked using the following set of toolbox-
              <br /> Php, Code Ignitor, Laravel, Wordpress, Woocoommerce,
              jquery, XAMPP, CPanel, Sublime Text Edidor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
