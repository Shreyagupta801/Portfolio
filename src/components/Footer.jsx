export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-14 px-6 relative overflow-hidden">


      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 
      w-72 h-72 bg-cyan-400/10 
      blur-3xl rounded-full">
      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 relative z-10">


        {/* Brand */}
        <div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Shreya
            <span className="text-cyan-400">.dev</span>
          </h2>


          <p className="text-gray-400 leading-7 text-sm">
            Full Stack Developer passionate about creating
            modern, responsive and scalable web applications
            with clean user experiences.
          </p>


        </div>



        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>


          <ul className="space-y-3 text-sm">

            {[
              ["Home","#home"],
              ["About","#about"],
              ["Projects","#projects"],
              ["Contact","#contact"]
            ].map(([name,link])=>(
              <li key={name}>
                <a
                  href={link}
                  className="hover:text-cyan-400 transition"
                >
                  {name}
                </a>
              </li>
            ))}

          </ul>

        </div>




        {/* Technologies */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Tech Stack
          </h3>


          <div className="flex flex-wrap gap-2">

            {[
              "React",
              "JavaScript",
              "Java",
              "Tailwind",
              "Git"
            ].map((tech)=>(
              <span
                key={tech}
                className="bg-[#1E293B]
                border border-gray-700
                px-3 py-1 rounded-full
                text-sm hover:border-cyan-400
                transition"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>




        {/* Connect */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Let's Connect
          </h3>


          <p className="text-sm text-gray-400 mb-4">
            Have a project idea? Let's work together 🚀
          </p>


          <div className="flex gap-4 mb-5">

            <a
              href="https://github.com/Shreyagupta801"
              className="bg-[#1E293B] px-4 py-2 rounded-lg
              hover:text-cyan-400 transition"
            >
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/shreya-gupta-3a59a0336"
              className="bg-[#1E293B] px-4 py-2 rounded-lg
              hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

          </div>



          <a
            href="mailto:guptad48561@gmail.com"
            className="
            inline-block
            bg-linear-to-r from-blue-600 to-cyan-400
            text-white px-6 py-3 rounded-full
            font-medium
            hover:scale-105 transition"
          >
            Hire Me 🚀
          </a>


        </div>


      </div>




      {/* Bottom */}
      <div className="
      max-w-6xl mx-auto
      border-t border-gray-700
      mt-12 pt-6
      text-center text-sm">


        <p>
          © {new Date().getFullYear()} 
          <span className="text-cyan-400">
            {" "}Shreya Gupta
          </span>
          . All rights reserved.
        </p>


        <p className="mt-2 text-gray-500">
          Designed & Developed with ❤️ using React + Tailwind CSS
        </p>


      </div>


    </footer>
  );
}