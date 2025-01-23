/* eslint-disable react/no-unescaped-entities */
// app/components/camillaHero/CamillaHero.tsx
"use client";

import React from "react";


export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen xxs:relative  flex flex-col justify-center   items-center bg-gradient-to-r from-blue-500 to-indigo-200 text-white p-8 text-center xxs:p-2 sm:p-6 md:p-8 lg:p-12"
    >
      
      <div className="flex-col items-center md:absolute lg:absolute lg:top-80  xxs:absolute  xxs:top-56">
        <h1 className="text-3xl sm:text-3xl   lg:text-5xl font-extrabold mb-4 xxs:text-2xl">
          Hello, I am Ahmed Mubarak
        </h1>
        <p className="text-base m-auto p-4  sm:text-lg md:text-xl lg:text-3xl mb-8 max-w-md  xxs:text-sm">
          I'm a software developer specializing in building amazing digital
          experiences.
        </p>
        <div className="space-x-4 sm:space-x-6 md:space-x-8">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 xxs:cursor-none xxs:px-3 xxs:py-2 xxs:text-sm rounded-md shadow font-medium hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 xxs:cursor-none xxs:px-3 xxs:py-2 xxs:text-sm rounded-md shadow font-medium hover:bg-gray-100 transition"
          >
            View My CV
          </a>
        </div>
      </div>

      <a href="#about">
        <svg className=" relative xxs:top-80 xxs:left-12 animate-bounce w-24 h-24 xxs:h-16 lg:top-[430px]">
          <path fill="currentColor" d="M0 0 L10 15 L20 0" />
        </svg>
      </a>
      <a href="#about">
        <svg className=" relative xxs:top-60 lg:top-96 xxs:left-12 animate-bounce w-24 h-24 xxs:h-16 lg:h-24">
          <path fill="currentColor" d="M0 0 L10 15 L20 0" />
        </svg>
      </a>
    </section>
  );
}
