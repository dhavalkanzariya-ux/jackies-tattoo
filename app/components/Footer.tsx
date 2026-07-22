export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white py-8">

      <div className="max-w-7xl mx-auto px-6 text-center">


        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">
          JACKIE'S TATTOO
        </h2>


        <p className="mt-3 text-gray-400">
          Premium Tattoo & Piercing Studio
        </p>



        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-6 text-gray-300">


          <a
            href="https://instagram.com/jackies_tattoo_piercing"
            target="_blank"
            className="hover:text-yellow-500 transition"
          >
            📸 Instagram
          </a>


          <a
            href="https://wa.me/918000856870"
            target="_blank"
            className="hover:text-yellow-500 transition"
          >
            💬 WhatsApp
          </a>


          <a
            href="tel:+918000856870"
            className="hover:text-yellow-500 transition"
          >
            📞 Call Now
          </a>


          <a
            href="#contact"
            className="hover:text-yellow-500 transition"
          >
            Contact
          </a>


        </div>



        <div className="border-t border-yellow-500/20 mt-6 pt-5">


          <p className="text-sm text-gray-500">
            © 2026 Jackie's Tattoo & Piercing. All Rights Reserved.
          </p>


        </div>


      </div>

    </footer>
  );
}