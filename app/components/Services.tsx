export default function Services() {
  const services = [
    {
      icon: "✒️",
      title: "Custom Tattoo",
      desc: "Unique tattoo designs created specially according to your idea and personal story.",
    },
    {
      icon: "🎨",
      title: "Realism Tattoo",
      desc: "Highly detailed realistic artwork with professional finishing and depth.",
    },
    {
      icon: "✨",
      title: "Minimal Tattoo",
      desc: "Simple, clean and meaningful tattoo designs with elegant details.",
    },
    {
      icon: "💎",
      title: "Professional Piercing",
      desc: "Safe and hygienic piercing experience with proper aftercare guidance.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-12 md:py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            What We Do
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Professional tattoo and piercing services crafted with
            creativity, precision and passion.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
                group
                bg-black
                border
                border-yellow-500/30
                rounded-3xl
                p-8
                transition
                duration-500
                hover:-translate-y-3
                hover:border-yellow-500
                hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]
              "
            >

              <div
                className="
                  text-5xl
                  mb-6
                  group-hover:scale-110
                  transition
                  duration-300
                "
              >
                {service.icon}
              </div>


              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                {service.title}
              </h3>


              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}