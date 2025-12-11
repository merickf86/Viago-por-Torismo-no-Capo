// src/pages/Home.jsx
import React from "react";
import { Mountain, MapPin, Camera } from "lucide-react";

export default function Home() {
  const popularTours = [
    { name: "Table Mountain Adventure", icon: <Mountain size={24} className="text-blue-600" /> },
    { name: "Cape Point Scenic Tour", icon: <MapPin size={24} className="text-blue-600" /> },
    { name: "Winelands Experience", icon: <Camera size={24} className="text-blue-600" /> },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* HERO SECTION */}
      <section className="text-center py-16 bg-blue-50 rounded-xl mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Explore Cape Town with Us</h1>
        <p className="text-gray-600 mb-6">
