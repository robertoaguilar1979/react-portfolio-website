import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Router, BrowserRouter } from "react-router-dom";
import Section2 from "./components/Section2";
import Shopify from "./pages/Shopify";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Shopify />
      <About />
    </div>
  );
}

export default App;
