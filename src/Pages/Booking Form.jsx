// src/components/BookingForm.jsx
import React, { useState } from "react";
import { User, Mail, Phone, Map, Calendar, MessageCircle } from "lucide-react";

export default function BookingForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      event.target.reset();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <div className="booking-form p-6 max-w-4xl mx-auto my-12 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book a Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <User size={18} /> Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Mail size={18} /> Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Phone size={18} /> Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+27 82 000 0000"
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Tour Selection */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Map size={18} /> Select Your Tour
          </label>
          <select
            name="tour"
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option>Table Mountain Adventure</option>
            <option>Cape Point Scenic Tour</option>
            <option>Winelands Experience</option>
            <option>Robben Island & City Tour</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Calendar size={18} /> Preferred Date
          </label>
          <input
            type="date"
            name="date"
            required
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <MessageCircle size={18} /> Special Requests
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us more about your group or requests"
            className="border p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Submit Booking
        </button>

        {/* Status Messages */}
        {status === "SUCCESS" && (
          <p className="text-green-600 font-semibold mt-2 text-center">
            Your booking request has been sent!
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 font-semibold mt-2 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
