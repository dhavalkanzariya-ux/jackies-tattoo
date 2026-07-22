export default function Services() {
  const services = [
    {
      title: "Custom Tattoo",
      desc: "Unique tattoo designs created specially according to your idea and story.",
    },
    {
      title: "Realism Tattoo",
      desc: "Detailed realistic artwork with professional finishing and depth.",
    },
    {
      title: "Minimal Tattoo",
      desc: "Simple, clean and meaningful minimal tattoo designs.",
    },
    {
      title: "Professional Piercing",
      desc: "Safe and hygienic piercing experience with proper care.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-12 md:py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8 md:mb-10">

          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What We Do
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service, index) => (

            <div
              key={index}
              className="border border-yellow-500/30 rounded-2xl p-6 hover:bg-yellow-500 hover:text-black transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>


              <p className="text-gray-400 leading-6">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}