// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import Contact from "./pages/Contact.jsx";
import { Instagram, Pinterest, Facebook, Whatsapp } from "lucide-react";

export default function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <nav className="p-4 bg-blue-700 text-white flex gap-6 items-center shadow-lg justify-center md:justify-start">
        <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 text-lg">
          <span className="text-xl">🏠</span> Home
        </Link>

        <Link to="/tours" className="flex items-center gap-2 hover:text-yellow-300 text-lg">
          <span className="text-xl">🗺️</span> Tours
        </Link>

        <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300 text-lg">
          <span className="text-xl">📞</span> Contact
        </Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27813756172"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
          {/* Brand / Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Viagos por Turismo no Capo</h2>
            <p className="text-gray-200 mt-1">Explore Cape Town with guided tours & adventures.</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6">
            <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Instagram size={28} />
            </a>
            <a href="https://pinterest.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Pinterest size={28} />
            </a>
            <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Facebook size={28} />
            </a>
            <a href="https://wa.me/27813756172" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Whatsapp size={28} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-200 mt-6 text-sm">
          &copy; {new Date().getFullYear()} Viagos por Turismo no Capo. All rights reserved.
        </div>
      </footer>
    </Router>
  );
}
