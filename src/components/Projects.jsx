// components/Projects.jsx
// import exploreImg from "../assets/explore.jpeg";
// import jobimg from "../assets.job.jpeg";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0F172A] text-white"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-cyan-400 text-lg font-medium">
            My Work
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Featured
            <span className="text-cyan-400"> Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some of my best projects showcasing my skills and learning journey.
          </p>

        </div>



        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <div
              key={i}
              className="bg-[#1E293B] rounded-2xl overflow-hidden
              border border-gray-700
              hover:border-cyan-400
              hover:-translate-y-2
              transition duration-300 shadow-lg"
            >


              {/* Project Image */}
              <img
                src={p.image || "/project.png"}
                alt={p.title}
                className="w-full h-48 object-cover"
              />



              <div className="p-6">


                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>


                {/* Description */}
                <p className="text-gray-300 text-sm leading-6 mb-4">
                  {p.description}
                </p>



                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">

                  {p.tech?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#0F172A]
                      text-cyan-400
                      text-xs px-3 py-1
                      rounded-full"
                    >
                      {skill}
                    </span>
                  ))}

                </div>



                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center
                    bg-linear-to-r from-blue-600 to-cyan-400
                    py-2 rounded-full text-sm
                    hover:scale-105 transition"
                  >
                    GitHub
                  </a>


                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center
                    border border-cyan-400
                    text-cyan-400
                    py-2 rounded-full text-sm
                    hover:bg-cyan-400
                    hover:text-[#0F172A]
                    transition"
                  >
                    Live Demo
                  </a>

                </div>


              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}