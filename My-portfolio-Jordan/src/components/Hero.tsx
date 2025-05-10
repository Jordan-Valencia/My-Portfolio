"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FiDownload, FiArrowDown } from "react-icons/fi"

interface HeroProps {
  darkMode: boolean
}

const Hero = ({ darkMode }: HeroProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hola, soy</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Jordan Valencia
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Desarrollador Full-Stack</h2>
            <p className="text-lg mb-8 max-w-lg opacity-90">
              Especializado en crear soluciones web modernas y escalables. Con experiencia en tecnologías frontend y
              backend, puedo ayudarte a llevar tu proyecto al siguiente nivel.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium flex items-center gap-2"
              >
                Contrátame
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/files/cv-jordan-valencia.pdf"
                download
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 border ${
                  darkMode ? "border-gray-700 hover:border-gray-500" : "border-gray-300 hover:border-gray-400"
                } transition-colors`}
              >
                <FiDownload /> Descargar CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                darkMode ? "border-purple-600" : "border-blue-600"
              }`}
            >
              <img src="/images/profile.png" alt="Jordan Valencia" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <a href="#skills" className="flex flex-col items-center">
            <span className="text-sm mb-2">Descubre más</span>
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full ${
            darkMode ? "bg-purple-900" : "bg-purple-200"
          } filter blur-3xl opacity-20`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-64 h-64 rounded-full ${
            darkMode ? "bg-blue-900" : "bg-blue-200"
          } filter blur-3xl opacity-20`}
        ></div>
      </div>
    </section>
  )
}

export default Hero
