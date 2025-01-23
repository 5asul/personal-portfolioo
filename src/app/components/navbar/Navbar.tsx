"use client";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import React, { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky relative top-0 z-50 bg-white p-4 xxs:p-1 shadow-lg flex justify-between   items-center">
      <div className="px-2  lg:w-40 lg:w-48 xxs:w-16">
        <a href="#home">
        <Image src={logo} alt="logo" width={70} />
        </a>
      </div>
      <div className="text-2xl absolute lg:left-24 xxs:left-7 sm:text-3xl lg:m-0 lg:m-0 xxs:mx-9 xxs:text-lg  lg:ml-0  text-blue-600 font-bold">
        My Portfolio
      </div>
      <div className="hidden lg:flex space-x-6 mr-7 text-blue-600    ">
        <a
          href="#home"
          className="text-lg sm:text-xl lg:text-2xl hover:text-blue-500 transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg sm:text-xl lg:text-2xl hover:text-blue-500 transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-lg sm:text-xl lg:text-2xl hover:text-blue-500 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-lg sm:text-xl lg:text-2xl hover:text-blue-500 transition"
        >
          Contact
        </a>
      </div>
      <div className="lg:hidden xxs:ml-9 absolute xxs:right-4 ">
        <button
          onClick={toggleMenu}
          className="text-2xl   focus:outline-none  text-blue-600"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className=" absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center lg:hidden">
          <a
            href="#home"
            className="py-2 text-lg hover:text-blue-500 transition"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2 text-lg hover:text-blue-500 transition"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="py-2 text-lg hover:text-blue-500 transition"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="py-2 text-lg hover:text-blue-500 transition"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
