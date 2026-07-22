export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white py-10">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-3xl font-bold text-yellow-500">
          JACKIE'S TATTOO
        </h2>

        <p className="mt-4 text-gray-400">
          Premium Tattoo & Piercing Studio
        </p>

        <div className="flex justify-center gap-8 mt-6 text-gray-300">
          <span className="hover:text-yellow-500 cursor-pointer">
            Instagram
          </span>

          <span className="hover:text-yellow-500 cursor-pointer">
            WhatsApp
          </span>

          <span className="hover:text-yellow-500 cursor-pointer">
            Contact
          </span>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 Jackie's Tattoo & Piercing. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}