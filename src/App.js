import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Router, BrowserRouter } from "react-router-dom";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import AboutSection1 from "./components/AboutSection1";
import AboutSection2 from "./components/AboutSection2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Section3 imgTitle="section 3 svg" />
      <Section4 imgTitle="section 4 svg" />
      <Section5 imgTitle="section 5 svg" />
      <Section6 imgTitle="section 6 svg" />
      <AboutSection1 />
      <AboutSection2 />
    </div>
  );
}

export default App;
