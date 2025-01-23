// app/components/camillaProjects/CamillaProjects.tsx
"use client";

import React from "react";

const projects = [
  {
    title: "React Project",
    description: "A front-end project using only React components",
    link: "https://dojo-blog-liard-eight.vercel.app/"
  },
  {
    title: "Task Management Project",
    description: " Full-stack  build using node.js and express.js in backend side , react in front-end ",
    link: "https://task-management-system-front.vercel.app/"
  },
  {
    title: "Ticket Management Project",
    description: "full-stack with focusing on front side build using Next.js and subabase (postgrea)",
    link: "https://dojo-helpdesk-phi.vercel.app/"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 min-h-screen  relative flex flex-col justify-center bg-gradient-to-r from-blue-500 to-indigo-200  items-center  bg-white text-gray-800 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xxs:text-2xl xxs:z-10 absolute lg:top-44 xxs:top-20  text-white font-bold  mb-20">My Projects</h2>
      <div className="flex flex-col  h-4 lg:flex-row  md:bottom-[300px] lg:flex-wrap xxs:mx-5 absolute lg:top-72  xxs:bottom-80 justify-center items-center lg:gap-8 gap-4">
        {projects.map((project, index) => (
          <div
        key={index}
        className="w-full sm:w-2/3 lg:w-1/3 h-64 lg:h-44   xxs:px-3 xxs:py-2 xxs:text-sm  p-6 rounded-xl shadow-2xl hover:shadow-lg transition flex flex-col justify-between"
        
          >
        <div>
          <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xxs:text-base font-semibold mb-2 text-blue-50">{project.title}</h3>
          <p className="text-base sm:text-lg md:text-sm lg:text-lg xxs:text-xs mb-4 text-blue-600">{project.description}</p>
        </div>
        <a
          href={project.link}
          className="inline-block xxs:text-xs lg:text-xl bg-blue-500 xxs:cursor-none xxs:px-3 xxs:py-2 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
          </div>
        ))}
      </div>
      <a href="#contact">
        <svg className="absolute xxs:bottom-0 animate-bounce w-24 h-24  xxs:h-14 fill-blue-600">
          <path
        
        d="M0 0 L10 15 L20 0"
          />
        </svg>
      </a>
    </section>
  );
}




