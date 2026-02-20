import { motion } from "framer-motion"
import StarBackground from "./StarBackground"
import MoonBackground from "./MoonBackground"

function App() {
  return (
     <div className="relative min-h-screen text-white">
      <StarBackground />
      <MoonBackground />
  {/* All your sections below */}
    <div className="relative z-10 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold tracking-wide">Anto</h1>
          <div className="space-x-8 hidden md:block">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        <motion.img
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="https://via.placeholder.com/160"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-extrabold mb-6"
        >
          Hi, I'm Anto Charles V👋
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 max-w-2xl"
        >
          Frontend Developer building modern, scalable and beautiful web
          applications using React and Tailwind CSS.
        </motion.p>

        
        <motion.a
           href="#projects"
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           className="mt-10 inline-block px-8 py-3 bg-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
           View My Work
        </motion.a>
        </section>
        

      {/* About Section */}
      <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate frontend developer focused on creating
            engaging user experiences. I love turning ideas into
            interactive and performant web applications.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-16">
          Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project"
                className="w-full"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Project {project}
                </h4>
                <p className="text-gray-400 text-sm">
                  A modern responsive application built with React and Tailwind.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 text-center">
        <h3 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h3>

        <p className="text-gray-400 mb-8">
          Have a project in mind? Let's connect.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Me
        </motion.button>
      </section>

    </div>
    </div>
    )
}

export default App