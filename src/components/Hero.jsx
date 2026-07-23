 function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center 
      bg-[#0F172A] px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 
      rounded-full blur-3xl top-20"></div>

      <div className="relative z-10">

        {/* Small Intro */}
        <p className="text-cyan-400 text-lg mb-4 font-medium">
          👋 Welcome to my portfolio
        </p>


        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-500 to-cyan-400 
          bg-clip-text text-transparent">
            Shreya Gupta
          </span>
        </h1>


        {/* Role */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-5">
          Full Stack Developer
          <span className="text-cyan-400"> | </span>
          UI Engineer
        </h2>


        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
          I build modern, responsive and scalable web applications
          using React, Java and modern web technologies.
          Passionate about creating clean UI experiences and solving
          real-world problems through code.
        </p>


        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">

          <a
            href="#projects"
            className="bg-linear-to-r from-blue-600 to-cyan-400
            text-white px-8 py-3 rounded-full font-medium
            shadow-lg hover:scale-105 transition duration-300"
          >
            View Projects 🚀
          </a>


          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400
            px-8 py-3 rounded-full font-medium
            hover:bg-cyan-400 hover:text-[#0F172A]
            transition duration-300"
          >
            Contact Me
          </a>

        </div>


        {/* Tech Stack */}
        <div className="mt-10 text-gray-400 text-sm">
          <p>Currently working with:</p>

          <div className="flex justify-center gap-4 mt-3 flex-wrap">
            <span className="bg-[#1E293B] px-4 py-2 rounded-full">
              React.js
            </span>

            <span className="bg-[#1E293B] px-4 py-2 rounded-full">
              Java
            </span>

            <span className="bg-[#1E293B] px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-[#1E293B] px-4 py-2 rounded-full">
              Tailwind
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;