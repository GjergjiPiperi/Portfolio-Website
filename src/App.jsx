import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="absolute w-full h-full">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
