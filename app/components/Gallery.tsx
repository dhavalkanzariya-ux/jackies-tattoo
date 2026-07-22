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
      className="bg-black text-white py-20 md:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Our Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Tattoo Gallery
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Explore our custom tattoo designs created with passion,
            precision and artistic detail.
          </p>

        </div>


        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {tattoos.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-black shadow-lg"
            >

              <img
                src={image}
                alt="Jackie's Tattoo Work"
                className="
                  w-full 
                  h-[420px]
                  object-cover
                  object-center
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />


              {/* Hover Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  group-hover:bg-black/40
                  transition
                  duration-500
                  flex
                  items-end
                  p-6
                "
              >

                <h3
                  className="
                    text-yellow-500
                    font-bold
                    text-xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  Custom Tattoo Artwork
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}