import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Router, BrowserRouter } from "react-router-dom";
import Section2 from "./components/Section2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
    </div>
  );
}

export default App;
