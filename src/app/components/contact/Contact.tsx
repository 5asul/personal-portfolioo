"use client";

import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-16 min-h-screen flex flex-col  xxs:px-3 xxs:py-2 xxs:text-sm justify-center items-center bg-gray-50 text-gray-800 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg px-4 sm:px-6 md:px-8 ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-sm sm:text-base md:text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base md:text-lg "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-sm sm:text-base md:text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base md:text-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-left text-sm sm:text-base md:text-lg font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base md:text-lg"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 md:py-4 rounded-md font-medium text-sm sm:text-base md:text-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}