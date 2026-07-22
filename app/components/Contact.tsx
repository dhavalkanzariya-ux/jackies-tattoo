export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 md:py-24"
    >
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-yellow-500 tracking-[6px] uppercase text-sm">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Book Your Tattoo
          </h2>

          <p className="text-gray-400 mt-4">
            Have an idea? Let's create your next masterpiece.
          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">



          {/* Contact Info */}

          <div
            className="
            border
            border-yellow-500/30
            rounded-3xl
            p-8
            hover:border-yellow-500
            transition
            "
          >

            <h3 className="text-3xl font-bold text-yellow-500 mb-6">
              Get In Touch
            </h3>


            <p className="text-gray-300 leading-7 mb-6">
              Ready for your next tattoo? Contact Jackie's Tattoo Studio today.
            </p>


            <div className="space-y-5 text-gray-300">


              <a
                href="tel:+91XXXXXXXXXX"
                className="block hover:text-yellow-500 transition"
              >
                📞 Phone: +91 XXXXX XXXXX
              </a>


              <p>
                📍 Location: Your Studio Address
              </p>


              <a
                href="https://instagram.com"
                target="_blank"
                className="block hover:text-yellow-500 transition"
              >
                📸 Instagram: @jackies_tattoo_piercing
              </a>


            </div>



            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="
              inline-block
              mt-8
              bg-yellow-500
              text-black
              px-8
              py-3
              rounded-full
              font-bold
              hover:bg-yellow-400
              transition
              "
            >
              WhatsApp Now
            </a>


          </div>




          {/* Form */}

          <div
            className="
            border
            border-yellow-500/30
            rounded-3xl
            p-8
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-transparent
              border
              border-gray-600
              p-4
              rounded-xl
              mb-4
              text-white
              outline-none
              focus:border-yellow-500
              "
            />


            <input
              type="text"
              placeholder="Phone Number"
              className="
              w-full
              bg-transparent
              border
              border-gray-600
              p-4
              rounded-xl
              mb-4
              text-white
              outline-none
              focus:border-yellow-500
              "
            />


            <textarea
              placeholder="Tell us about your tattoo idea"
              rows={5}
              className="
              w-full
              bg-transparent
              border
              border-gray-600
              p-4
              rounded-xl
              mb-5
              text-white
              outline-none
              focus:border-yellow-500
              "
            />


            <button
              className="
              bg-yellow-500
              text-black
              px-8
              py-3
              rounded-full
              font-bold
              hover:bg-yellow-400
              transition
              "
            >
              Send Request
            </button>


          </div>


        </div>


      </div>
    </section>
  );
}