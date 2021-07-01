import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import LoginForm from "./components/loginForm";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/services' exact component={Services} />
        <Route path='/about' exact component={AboutMe} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contacts' exact component={Contacts} />
        <Route path='/login' exact component={LoginForm} />

        {/* <Route path='/movies/:id' component={MovieForm} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
