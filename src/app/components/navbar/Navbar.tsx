// app/components/camillaNavbar/CamillaNavbar.tsx
"use client";

import React from "react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="text-4xl font-bold">My Portfolio</div>
      <div>
        <a href="#home" className="mx-2 text-2xl">Home</a>
        <a href="#about" className="mx-2 text-2xl">About</a>
        <a href="#projects" className="mx-2 text-2xl">Projects</a>
        <a href="#contact" className="mx-2 text-2xl">Contact</a>
      </div>
    </nav>
  );
}


