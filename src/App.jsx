import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";   // ✅ import

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
// import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </HelmetProvider>
  );
}

export default App;
