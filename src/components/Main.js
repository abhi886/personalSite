import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Particles from "react-particles-js";
import Blog from "./Blog";
// import AboutMe from "./components/AboutMe";
// import Services from "./Services";
// import Experience from "./components/Experience";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
// import Contacts from "./components/Contacts";
// import Footer from "./Footer";

function Main() {
  return (
    <>
      <Particles
        className='particles-canvas'
        parans={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />

      <Header />
      <Blog />
      {/* <AboutMe /> */}
      {/* <Services /> */}
      {/*   <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Main;
