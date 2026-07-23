import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-[#0F172A]/80 backdrop-blur-lg 
    border-b border-gray-700 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 
      flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-white">Shreya</span>
          <span className="text-cyan-400">.dev</span>
        </h1>


        {/* Desktop Links */}
        <ul className="hidden md:flex gap-12">

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 
                hover:text-cyan-400 
                transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>


        {/* Resume Button */}
       
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block bg-linear-to-r from-blue-600 to-cyan-400 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300"
>
  Resume
</a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-3xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden 
        bg-[#0F172A] px-6 pb-6">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 
              text-gray-300 
              hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}