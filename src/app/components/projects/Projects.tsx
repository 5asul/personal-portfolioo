// app/components/camillaProjects/CamillaProjects.tsx
"use client";

import React from "react";
import ProjectsList from "./ProjectsList";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 min-h-screen  relative flex flex-col justify-center bg-gradient-to-r from-blue-500 to-indigo-200  items-center  bg-white text-gray-800 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xxs:text-2xl xxs:z-10 absolute lg:top-44 xxs:top-20  text-white font-bold  mb-20">
        My Projects
      </h2>
      <div className="flex flex-col  h-4 lg:flex-row  md:bottom-[300px] lg:flex-wrap xxs:mx-5 absolute lg:top-72  xxs:bottom-80 justify-center items-center lg:gap-8 gap-4">
        <ProjectsList />
      </div>
      <a href="#contact">
        <svg className="absolute xxs:bottom-0 animate-bounce w-24 h-24  xxs:h-14 fill-blue-600">
          <path d="M0 0 L10 15 L20 0" />
        </svg>
      </a>
    </section>
  );
}
