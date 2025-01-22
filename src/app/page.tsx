// app/page.tsx
"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Contact from "./components/contact";
import About  from "./components/about";
import  Navbar  from "./components/navbar";
import Hero from "./components/hero";
import  Projects  from "./components/projects";

export default function Page() {
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const cursorDot = document.querySelector(
      "[data-cursor-dot]"
    ) as HTMLElement;
    const cursorOutline = document.querySelector(
      "[data-cursor-outline]"
    ) as HTMLElement;

    if (!window.matchMedia("(pointer: fine)").matches) {
      if (cursorDot) cursorDot.style.display = "none";
      if (cursorOutline) cursorOutline.style.display = "none";
      return;
    }

    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );

        const target = e.target as HTMLElement;
        if (target.closest("a, button")) {
          setCursorVariant("cursor-pointer");
        } else if (target.closest("textarea, h1, h2, h3 ,p,input")) {
          setCursorVariant("cursor-text");
        } else {
          setCursorVariant("");
        }
      });
    }
  }, []);

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
