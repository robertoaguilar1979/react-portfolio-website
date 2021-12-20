import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section2 from "./components/Section2";
import Shopify from "./pages/Shopify";
import About from "./pages/About";
import Tools from "./components/Tools";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Section2 />
                <Shopify />
                <About />
                <Tools />
                <Contact />
              </>
            }
          />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Tools />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
