export default function Gallery() {
  const tattoos = [
    "/images/tattoo1.png",
    "/images/tattoo2.png",
    "/images/tattoo3.png",
    "/images/tattoo4.png",
  ];

  return (
    <section
      id="gallery"
      className="bg-black text-white py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8 md:mb-12">
          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Tattoo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {tattoos.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-yellow-500/20"
            >
              <img
                src={image}
                alt="Jackie's Tattoo Work"
                className="w-full h-80 md:h-[420px] object-cover object-center hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}