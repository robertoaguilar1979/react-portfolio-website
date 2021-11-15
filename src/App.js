import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Router, BrowserRouter } from "react-router-dom";
import Section2 from "./components/Section2";
import ShopifyDivImgRight from "./components/ShopifyDivImgRight";
import ShopifyDivImgLeft from "./components/ShopifyDivImgLeft";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <ShopifyDivImgLeft image="section3.svg" imgTitle="section 3 svg" />
    </div>
  );
}

export default App;
