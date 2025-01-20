// app/components/camillaContact/CamillaContact.tsx
"use client";

import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // If you want a serverless function, you can post to an API route
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      // Handle success or error
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-16 min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}


