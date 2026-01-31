import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur">
      {/* Navbar container */}
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          Gaurav.site
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-blue-600/20">
          <div className="flex flex-col px-5 py-4 gap-4">
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
