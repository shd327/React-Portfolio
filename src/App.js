import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
//  <Portfolio />

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
{
  /* // <Portfolio /> */
}
function App() {
  return (
    <>
      {/* <Router> */}
      <NavBar />
      {/* <Routes> */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
