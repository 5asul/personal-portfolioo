// app/components/camillaNavbar/CamillaNavbar.tsx
"use client";

import React from "react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4 shadow-sm flex justify-between xxs:cursor-none items-center">
      <div className="text-2xl sm:text-3xl md:text-4xl  xxs:px-3 xxs:py-2 xxs:text-lg font-bold">My Portfolio</div>
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="mx-2 text-lg sm:text-xl md:text-2xl">Home</a>
        <a href="#about" className="mx-2 text-lg sm:text-xl md:text-2xl">About</a>
        <a href="#projects" className="mx-2 text-lg sm:text-xl md:text-2xl">Projects</a>
        <a href="#contact" className="mx-2 text-lg sm:text-xl md:text-2xl">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
}


