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
    <section id="projects" className="py-16 min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-gray-100 p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


