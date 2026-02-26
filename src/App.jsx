import { motion } from "framer-motion"
import StarBackground from "./StarBackground"
import MoonBackground from "./MoonBackground"
import smartbillImage from "./assets/smartbill.png"

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <StarBackground />
      <MoonBackground />

      <div className="relative z-10 scroll-smooth">

        {/* ================= NAVBAR ================= */}
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

        {/* ================= HERO ================= */}
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
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Hi, I'm Anto Charles V 👋
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            AI & Full Stack Developer building intelligent, scalable and
            high-performance web applications using React, Python and
            Machine Learning.
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

        {/* ================= ABOUT ================= */}
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
              I'm a Computer Science student passionate about Artificial
              Intelligence, Machine Learning, and Full Stack Development.
              I enjoy building real-world solutions that combine clean UI
              with powerful backend intelligence.
            </p>
          </motion.div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SmartBill Project */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={smartbillImage}
                alt="SmartBill Dashboard"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-blue-400">
                  SmartBill – Electricity Bill Management App
                </h4>

                <p className="text-gray-400 text-sm mb-4">
                  AI-powered electricity bill management system that helps
                  users calculate, monitor, and optimize power consumption
                  with predictive analytics and intelligent insights.
                </p>

                <p className="text-gray-300 text-sm mb-4">
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  Python / Streamlit / SQL / Machine Learning
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://smartbill-anto.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-500 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Vacanto/smartbill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 border border-white/20 rounded-full text-sm hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* OpenCV Project */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://via.placeholder.com/400x250"
                alt="OpenCV Project"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-blue-400">
                  Proactive Risk Assessment using OpenCV
                </h4>

                <p className="text-gray-400 text-sm mb-4">
                  Computer vision system that detects safety risks in
                  real-time using OpenCV image processing and object
                  detection techniques.
                </p>

                <p className="text-gray-300 text-sm mb-4">
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  Python / OpenCV / Machine Learning
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Vacanto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 border border-white/20 rounded-full text-sm hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a
                href="mailto:charlesanto235@gmail.com"
                className="text-blue-500 hover:underline"
              >
                charlesanto235@gmail.com
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/anto-charles-v-9686a3261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <a
                href="https://github.com/Vacanto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App