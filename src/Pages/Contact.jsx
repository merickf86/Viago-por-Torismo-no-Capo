// src/pages/Contact.jsx
import React from "react";
import BookingForm from "../components/BookingForm.jsx";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-6 max-w-5xl mx-auto my-12">
      {/* Contact Info */}
      <section className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or want to book your next adventure? Reach out to us!
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 text-gray-700 mb-12">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-blue-600" /> Cape Town, South Africa
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-blue-600" /> info@viagoscapo.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-blue-600" /> +27 81 375 6172
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
}
