import { projects } from '@/lib/constants/projects'
import React from 'react'

export default function ProjectsList() {
  return (
    <>
    {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-2/3 lg:w-1/3 h-64 lg:h-44   xxs:px-3 xxs:py-2 xxs:text-sm  p-6 rounded-xl shadow-2xl hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xxs:text-base font-semibold mb-2 text-blue-50">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg md:text-sm lg:text-lg xxs:text-xs mb-4 text-blue-600">
                {project.description}
              </p>
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
    </>
  )
}
