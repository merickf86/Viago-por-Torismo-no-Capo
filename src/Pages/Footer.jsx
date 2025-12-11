// src/components/Footer.jsx
import React from "react";
import { Instagram, Pinterest, Facebook, Whatsapp } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
