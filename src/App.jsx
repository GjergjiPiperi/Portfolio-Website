import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-full absolute">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
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
