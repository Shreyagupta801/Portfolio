 import profile from "../assets/for_portfolio.jpeg";
 function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#0F172A] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* Profile Image */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400 
            blur-3xl opacity-20 rounded-full"></div>

            <img
              src= {profile}
              alt = "Shreya Gupta"
            
              className="relative w-72 h-72 object-cover 
              rounded-full border-4 border-cyan-400 
              shadow-xl"
            />

          </div>

        </div>



        {/* About Content */}
        <div>

          <p className="text-cyan-400 text-lg font-medium mb-2">
            About Me
          </p>


          <h2 className="text-4xl font-bold mb-5">
            Passionate 
            <span className="text-cyan-400">
              {" "}Full Stack Developer
            </span>
          </h2>


          <p className="text-gray-300 leading-8 mb-5">
            I'm Shreya Gupta, a passionate developer who loves
            creating modern, responsive and user-friendly web
            applications. I enjoy turning ideas into real-world
            digital experiences using clean and efficient code.
          </p>


          <p className="text-gray-300 leading-8 mb-6">
            Currently, I am focusing on improving my skills in
            React, Java, Data Structures and modern web
            technologies while building practical projects.
          </p>


          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#1E293B] p-4 rounded-xl
            border border-gray-700 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 font-bold text-xl">
                10+
              </h3>
              <p className="text-gray-300 text-sm">
                Projects Built
              </p>
            </div>


            <div className="bg-[#1E293B] p-4 rounded-xl
            border border-gray-700 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 font-bold text-xl">
                React
              </h3>
              <p className="text-gray-300 text-sm">
                Frontend Development
              </p>
            </div>

          </div>


          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-8 
            bg-linear-to-r from-blue-600 to-cyan-400
            px-7 py-3 rounded-full font-medium
            hover:scale-105 transition"
          >
            Let's Connect 🚀
          </a>


        </div>

      </div>

    </section>
  );
}

export default About;