"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Gallery", link: "#gallery" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-yellow-500 tracking-wider"
        >
          JACKIE'S
        </a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">

          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-yellow-500 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>


        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="https://instagram.com"
            target="_blank"
            className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Instagram
          </a>


          <a
            href="#contact"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-500 text-3xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-3">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-white py-3 hover:text-yellow-500"
            >
              {item.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}