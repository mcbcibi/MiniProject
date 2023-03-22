import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Signin from "../src/Pages/Signin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/product" element={<Product />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/signin" element={<Signin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
