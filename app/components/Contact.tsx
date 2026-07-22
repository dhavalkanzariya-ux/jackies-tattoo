export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 md:py-24 md:px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10 md:mb-12">
          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Book Your Tattoo
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">


          {/* Contact Details */}

          <div className="border border-yellow-500/30 rounded-2xl p-6 md:p-8">

            <h3 className="text-3xl font-bold text-yellow-500 mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-300 leading-7 mb-5">
              Ready for your next tattoo? Contact Jackie's Tattoo Studio today.
            </p>

            <div className="space-y-4 text-gray-300">

              <p>
                📞 Phone: +91 XXXXX XXXXX
              </p>

              <p>
                📍 Location: Your Studio Address
              </p>

              <p>
                📸 Instagram: @jackies_tattoo_piercing
              </p>

            </div>

          </div>



          {/* Contact Form */}

          <div className="border border-yellow-500/30 rounded-2xl p-6 md:p-8">

            <input
              type="text"
              className="w-full bg-transparent border border-gray-600 p-4 rounded-lg mb-4 text-white outline-none focus:border-yellow-500"
              placeholder="Your Name"
            />


            <input
              type="text"
              className="w-full bg-transparent border border-gray-600 p-4 rounded-lg mb-4 text-white outline-none focus:border-yellow-500"
              placeholder="Phone Number"
            />


            <textarea
              className="w-full bg-transparent border border-gray-600 p-4 rounded-lg mb-5 text-white outline-none focus:border-yellow-500"
              placeholder="Tell us about your tattoo idea"
              rows={4}
            />


            <button
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Send Request
            </button>

          </div>


        </div>

      </div>
    </section>
  );
}