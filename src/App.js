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
      <ShopifyDivImgLeft
        body="The great news here is that it’s now easier than ever to Build and Launch a an awesome website using Shopify."
        image="section3.svg"
      />
      <ShopifyDivImgRight
        title="what is shopify?"
        body="Shopify is specially made for businesses to sell their products/services online. "
        image="section4.svg"
      />
      <ShopifyDivImgLeft />
      <ShopifyDivImgRight />
    </div>
  );
}

export default App;
