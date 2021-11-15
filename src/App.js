import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Router, BrowserRouter } from "react-router-dom";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section3 from "./components/Section3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Section3 image="section3.svg" imgTitle="section 3 svg" />
      <Section4 />
    </div>
  );
}

export default App;
