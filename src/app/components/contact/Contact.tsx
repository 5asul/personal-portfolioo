"use client";

import React, { useState } from "react";

export function Contact() {
  const [forlgata, setForlgata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(forlgata),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-indigo-200  xxs:px-3 xxs:py-2 xxs:text-sm justify-center items-center bg-gray-50 text-gray-800 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6  text-blue-600">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg px-4 sm:px-6 lg:px-8 "
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-left text-sm text-blue-50 sm:text-base lg:text-lg font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={forlgata.name}
            onChange={(e) => setForlgata({ ...forlgata, name: e.target.value })}
            className="w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg "
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-blue-50 text-left text-sm sm:text-base lg:text-lg font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={forlgata.email}
            onChange={(e) =>
              setForlgata({ ...forlgata, email: e.target.value })
            }
            className="w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-blue-50 text-left text-sm sm:text-base lg:text-lg font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={forlgata.message}
            onChange={(e) =>
              setForlgata({ ...forlgata, message: e.target.value })
            }
            className="w-full px-3 py-2 bg-blue-50 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 lg:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
