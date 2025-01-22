/* eslint-disable react/no-unescaped-entities */
// app/components/camillaHero/CamillaHero.tsx
"use client";

import React from "react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 text-center sm:p-6 md:p-8 lg:p-12 "
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl  font-extrabold mb-4 ">Hello, I am Ahmed Mubarak</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-md">
        I'm a software developer specializing in building amazing digital experiences.
      </p>
      <div className="space-x-4 sm:space-x-6 md:space-x-8">
        <a
          href="#projects"
          className="bg-white  text-blue-600 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 xxs:cursor-none xxs:px-3 xxs:py-2 xxs:text-sm rounded-md shadow font-medium hover:bg-gray-100  transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="bg-white text-blue-600 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 xxs:cursor-none xxs:px-3 xxs:py-2 xxs:text-sm rounded-md shadow font-medium hover:bg-gray-100 transition"
        >
          View My CV
        </a>
      </div>
    </section>
  );
}


