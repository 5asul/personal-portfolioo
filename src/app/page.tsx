// app/page.tsx
"use client";

import React, { useState } from "react";
import Contact from "./components/contact";
import About  from "./components/about";
import  Navbar  from "./components/navbar";
import Hero from "./components/hero";
import  Projects  from "./components/projects";
import { useCustomCursor } from "@/lib/hooks/useCustomCursor";

export default function Page() {
  const [cursorVariant, setCursorVariant] = useState("default");

  useCustomCursor(setCursorVariant);

  return (
    <main className={`bg-white text-black xxs:cursor-none cursor-none ${cursorVariant}`}>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <Contact />
    </main>
  );
}
