/* eslint-disable react/no-unescaped-entities */
// app/components/camillaAbout/CamillaAbout.tsx
"use client";

import React from "react";

export function About() {
  return (
    <section id="about" className=" min-h-screen relative  flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-200 text-white p-8 text-center xxs:p-2 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl  text-blue-50 font-bold mb-6">About Me</h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mx-auto  text-blue-100 max-w-3xl px-4 sm:px-6 md:px-8">
        I'm a highly experienced software engineer who loves TypeScript, Node.js, and React.
        My passion is creating scalable, maintainable web apps with modern tools.
      </p>
      <a href="#projects">
        <svg className="absolute xxs:bottom-2  animate-bounce w-24 h-24 fill-blue-600">
          <path
        
        d="M0 0 L10 15 L20 0"
          />
        </svg>
      </a>
    </section>
  );
}