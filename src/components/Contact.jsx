export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0F172A] text-white"
    >

      <div className="max-w-5xl mx-auto text-center">


        {/* Heading */}
        <p className="text-cyan-400 text-lg font-medium mb-2">
          Contact Me
        </p>

        <h2 className="text-4xl font-bold mb-5">
          Let's Build Something
          <span className="text-cyan-400"> Amazing</span>
        </h2>


        <p className="text-gray-300 max-w-2xl mx-auto leading-7 mb-10">
          I'm always open to discussing new projects, creative ideas,
          and opportunities. Feel free to reach out and let's connect!
        </p>



        {/* Contact Card */}
        <div className="max-w-xl mx-auto 
        bg-[#1E293B] rounded-2xl p-8
        border border-gray-700
        hover:border-cyan-400 transition">


          <div className="mb-6">

            <h3 className="text-xl font-semibold mb-2">
              Email Me 📩
            </h3>

            <p className="text-gray-300">
              guptad48561@gmail.com
            </p>

          </div>



          {/* Button */}
          <a
            href="mailto:guptad48561@gmail.com"
            className="inline-block
            bg-linear-to-r from-blue-600 to-cyan-400
            px-8 py-3 rounded-full
            font-medium
            hover:scale-105 transition"
          >
            Say Hello 🚀
          </a>


          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              GitHub
            </a>


            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

          </div>


        </div>


      </div>

    </section>
  );
}