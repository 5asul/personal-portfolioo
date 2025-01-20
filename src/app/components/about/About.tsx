/* eslint-disable react/no-unescaped-entities */
// app/components/camillaAbout/CamillaAbout.tsx
"use client";

import React from "react";

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center py-16 bg-gray-50 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-2xl mx-auto leading-relaxed">
        I'm a highly experienced software engineer who loves TypeScript, Node.js, and React.
        My passion is creating scalable, maintainable web apps with modern tools.
      </p>
    </section>
  );
}


