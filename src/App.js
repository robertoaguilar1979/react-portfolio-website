import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Section2 from "./components/Section2";
import Shopify from "./pages/Shopify";
import About from "./pages/About";
import Tools from "./components/Tools";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Shopify />
      <About />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
