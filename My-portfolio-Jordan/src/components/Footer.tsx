"use client"

import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

interface FooterProps {
  darkMode: boolean
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-bold text-xl">
              Jordan Valencia
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/Jordan-Valencia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jordan-valencia-dev-7944a9331/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="mailto:jordanvalenciadev@gmail.com"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <MdEmail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center text-sm opacity-70"
        >
          &copy; {new Date().getFullYear()} Jordan Valencia. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
