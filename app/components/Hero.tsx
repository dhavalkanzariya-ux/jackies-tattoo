export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-[90vh]
        md:h-[85vh]
        bg-cover
        bg-[center_35%]
        md:bg-center
        relative
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>


      {/* Content */}
      <div
        className="
          relative
          z-10
          text-center
          px-5
          pt-20
          md:pt-0
          text-white
          max-w-5xl
        "
      >

        <p
          className="
            text-yellow-500
            tracking-[4px]
            uppercase
            mb-4
            text-xs
            md:text-base
          "
        >
          Jackie's Tattoo & Piercing
        </p>


        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-8xl
            font-bold
            leading-[1.1]
          "
        >
          WELCOME TO
          <br />
          JACKIE'S STUDIO
        </h1>


        <p
          className="
            mt-5
            text-gray-300
            text-sm
            sm:text-base
            md:text-xl
            max-w-3xl
            mx-auto
            leading-7
          "
        >
          Premium Custom Tattoos • Realism • Minimal Tattoos • Professional Piercing
        </p>


        <div
          className="
            mt-8
            flex
            flex-col
            md:flex-row
            justify-center
            gap-4
          "
        >

          <button
            className="
              bg-yellow-500
              text-black
              px-7
              py-3
              md:px-8
              md:py-4
              rounded-full
              font-bold
              hover:bg-yellow-400
              transition
            "
          >
            Book Appointment
          </button>


          <button
            className="
              border
              border-yellow-500
              text-white
              px-7
              py-3
              md:px-8
              md:py-4
              rounded-full
              hover:bg-yellow-500
              hover:text-black
              transition
            "
          >
            View Gallery
          </button>


        </div>


      </div>


    </section>
  );
}