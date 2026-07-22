export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white max-w-5xl">

        <p className="text-yellow-500 tracking-[5px] uppercase mb-5 text-sm md:text-base">
          Jackie's Tattoo & Piercing
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          WELCOME TO
          <br />
          JACKIE'S STUDIO
        </h1>

        <p className="mt-6 text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-8">
          Premium Custom Tattoos • Realism • Minimal Tattoos • Professional Piercing
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
            Book Appointment
          </button>

          <button className="border border-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
            View Gallery
          </button>

        </div>

      </div>
    </section>
  );
}