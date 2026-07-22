export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        <div>
          <p className="text-yellow-500 tracking-[6px] uppercase mb-3">
            About The Artist
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            JACKIE'S
            <br />
            TATTOO STUDIO
          </h2>

          <p className="text-gray-400 leading-7">
            A premium tattoo and piercing studio focused on custom artwork,
            realism tattoos, minimal designs and meaningful creations.
            Every tattoo is designed with passion, precision and a story
            behind it.
          </p>

          <p className="text-gray-400 leading-7 mt-4">
            We believe every tattoo is a piece of art that stays with you
            forever.
          </p>

          <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
            Know More
          </button>
        </div>

        <div className="border border-yellow-500/30 p-6 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
            Why Choose Us?
          </h3>

          <ul className="mt-5 space-y-3 text-gray-300">
            <li>✓ Custom Tattoo Designs</li>
            <li>✓ Professional Artist</li>
            <li>✓ Hygienic Studio</li>
            <li>✓ Premium Tattoo Experience</li>
          </ul>
        </div>

      </div>
    </section>
  );
}