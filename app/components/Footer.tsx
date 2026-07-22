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



        <div className="flex justify-center gap-6 mt-6 text-gray-300">


          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-500 transition"
          >
            Instagram
          </a>


          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="hover:text-yellow-500 transition"
          >
            WhatsApp
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