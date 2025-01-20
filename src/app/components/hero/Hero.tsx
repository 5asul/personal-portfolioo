/* eslint-disable react/no-unescaped-entities */
// app/components/camillaHero/CamillaHero.tsx
"use client";

import React from "react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 text-center"
    >
      <h1 className="text-5xl font-extrabold mb-4">Hello, I am Ahmed Mubarak</h1>
      <p className="text-lg mb-8 max-w-md">
        I'm a software developer specializing in building amazing digital experiences.
      </p>
      <div className="space-x-8">
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-md shadow font-medium hover:bg-gray-100 transition"
      >
        View My Work
      </a>
      <a
        href="/resume.pdf"target="_blank"
          rel="noopener noreferrer"
        className="bg-white text-blue-600   px-6 py-3 rounded-md shadow font-medium hover:bg-gray-100 transition"
      >
        View My CV
      </a>
      </div>
    </section>
  );
}


