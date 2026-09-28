import React, { useState, useRef } from "react";
import logoPortfolio from "../assets/logoPortfolio.png";
import { IoMenu } from "react-icons/io5";
import { TbXboxX } from "react-icons/tb";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className="w-full h-20 text-white flex justify-between items-center px-4 fixed top-0 left-0 z-50">
      <div>
        <img className="w-10 md:w-16 lg:w-16" src={logoPortfolio} alt="Logo" />
      </div>
      {!isMenuOpen && (
        <div
          className="md:hidden lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <IoMenu size={30} color="white" cursor="pointer" />
        </div>
      )}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="w-full flex flex-col justify-start items-center p-5 gap-5 fixed top-0 left-0 md:flex lg:flex textsemibold text-lg bg-black/90 h-screen z-50"
        >
          <TbXboxX
            size={30}
            color="white"
            cursor="pointer"
            className="w-full flex justify-center items-center md:hidden lg:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#home"
            className="text-white hover:text-blue-500"
          >
            Home
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#about"
            className="text-white hover:text-blue-500"
          >
            About
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#skills"
            className="text-white hover:text-blue-500"
          >
            Skills
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#projects"
            className="text-white hover:text-blue-500"
          >
            Projects
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            className="text-white hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      )}
      <div className="hidden md:flex lg:flex gap-5 textsemibold text-lg">
        <a href="#home" className="text-white hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="text-white hover:text-blue-500">
          About
        </a>
        <a href="#skills" className="text-white hover:text-blue-500">
          Skills
        </a>
        <a href="#projects" className="text-white hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="text-white hover:text-blue-500">
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
