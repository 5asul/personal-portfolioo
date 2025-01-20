// app/page.tsx
"use client";

import React from "react";

import { Contact } from "./components/contact/Contact";

import { About } from "./components/about/About";

import { Navbar } from "./components/navbar/Navbar";
import  {Hero}  from "./components/hero/Hero";
import {Projects} from "./components/projects/Projects";


export default function Page() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
