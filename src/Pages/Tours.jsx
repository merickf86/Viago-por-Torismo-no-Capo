// src/pages/Tours.jsx
import React from "react";
import { Mountain, MapPin, Camera, Ship } from "lucide-react";

const tours = [
  {
    name: "Table Mountain Adventure",
    icon: <Mountain size={24} className="text-blue-600" />,
    description: "Hike or cable car up Table Mountain for breathtaking views of Cape Town.",
  },
  {
    name: "Cape Point Scenic Tour",
    icon: <MapPin size={24} className="text-blue-600" />,
    description: "Visit the southern tip of Africa and enjoy dramatic ocean scenery.",
  },
  {
    name: "Winelands Experience",
    icon: <Camera size={24} className="text-blue-600" />,
    description: "Taste world-class wines and enjoy stunning vineyard landscapes.",
  },
  {
    name: "Robben Island & City Tour",
    icon: <Ship size={24} className="text-blue-600" />,
    description: "Learn history and explore Robben Island and Cape Town city highlights.",
  },
];

export default function Tours() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Tours</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore all available guided tours in Cape Town and make your adventure unforgettable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour, index) => (
          <div key={index} className="flex items-start gap-4">
            {tour.icon}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{tour.name}</h2>
              <p className="text-gray-600">{tour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

