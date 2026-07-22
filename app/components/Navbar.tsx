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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-yellow-500"
        >
          JACKIE'S
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-white hover:text-yellow-500 transition"
            >
              {item.name}
            </a>
          ))}

        </div>



        {/* Desktop Button */}
        <div className="hidden md:flex gap-3">

          <a
            href="https://instagram.com/jackies_tattoo_piercing"
            target="_blank"
            className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full"
          >
            Instagram
          </a>


          <a
            href="#contact"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold"
          >
            Book Now
          </a>

        </div>




        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-yellow-500 text-4xl cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>


      </div>



      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          bg-black
          border-t
          border-yellow-500/20
          px-6
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-[500px] py-5" : "max-h-0"}
        `}
      >

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


        <a
          href="https://instagram.com/jackies_tattoo_piercing"
          target="_blank"
          className="block text-yellow-500 py-3"
        >
          📸 Instagram
        </a>


        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="block bg-yellow-500 text-black text-center py-3 rounded-full font-bold mt-3"
        >
          Book Now
        </a>


      </div>


    </nav>
  );
}