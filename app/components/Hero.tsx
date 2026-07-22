export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center px-6 text-white">

        <p className="text-yellow-500 tracking-[5px] uppercase mb-5 text-sm md:text-base">
          Jackie's Tattoo & Piercing
        </p>

        <h1 className="text-4xl md:text-8xl font-bold leading-tight">
          ART THAT
          <br />
          LASTS FOREVER
        </h1>

        <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Custom Tattoos • Realism • Minimal Designs • Professional Piercing
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <button className="bg-yellow-500 text-black px-7 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
            Book Appointment
          </button>

          <button className="border border-yellow-500 px-7 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
            View Gallery
          </button>

        </div>

      </div>
    </section>
  );
}