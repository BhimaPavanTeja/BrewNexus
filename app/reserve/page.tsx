"use client";

import { useState } from "react";
import NavBar from '../components/NavBar/page'
import Footer from '../components/Footer/page'
import './reserve.css'

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation Submitted! We’ll confirm soon.");
  };

  return (
    <>
    <NavBar/>
    <div className="fonty">
        <div className="flex flex-col items-center text-center p-6 md:p-12 bg-[#F5E9D7]">
      <h1 className="text-4xl font-bold text-brown-800 mb-4">Reserve Your Table</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Secure your spot for a cozy coffee experience. Fill in the details below, and we’ll handle the rest!
      </p>
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg bg-[#EED6B7]  border-2 border-[#4B382A] p-6 rounded-lg drop-shadow-xl">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-3 border text-[#4B382A] outline-0 border-[#4B382A] rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 border text-[#4B382A] outline-0 border-[#4B382A] rounded-lg"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 mb-3 border text-[#4B382A] outline-0 border-[#4B382A] rounded-lg"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 mb-3 border text-[#4B382A] outline-0 border-[#4B382A] rounded-lg"
          required
        />
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-3 mb-4 border text-[#4B382A] outline-0 border-[#4B382A] rounded-lg"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1} Guest(s)</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-[#4B382A] text-[#EED6B7]  py-3 rounded-lg text-lg font-semibold hover:bg-brown-700 transition-all"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default Page;