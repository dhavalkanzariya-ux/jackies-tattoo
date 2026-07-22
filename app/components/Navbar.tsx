export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <a href="#home" className="text-3xl font-bold text-yellow-500">
          JACKIE'S
        </a>

        <ul className="hidden md:flex items-center gap-8 text-white">

          <li>
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-yellow-500 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </li>

        </ul>


        <div className="flex items-center gap-3">

          <button className="hidden md:block border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
            Instagram
          </button>


          <a
            href="#contact"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>

        </div>

      </div>
    </nav>
  );
}