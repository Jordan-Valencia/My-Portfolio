"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { BsMoonStars, BsSun } from "react-icons/bs"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2 backdrop-blur-md bg-opacity-80 " + (darkMode ? "bg-gray-900" : "bg-white") : "py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Jordan Valencia
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks darkMode={darkMode} />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full"
            >
              {darkMode ? <BsSun className="text-yellow-300" /> : <BsMoonStars className="text-gray-700" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full"
            >
              {darkMode ? <BsSun className="text-yellow-300" /> : <BsMoonStars className="text-gray-700" />}
            </motion.button>
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <motion.a
              variants={itemVariants}
              href="#home"
              className="block py-2 hover:text-purple-500 transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#skills"
              className="block py-2 hover:text-purple-500 transition-colors"
              onClick={toggleMenu}
            >
              Habilidades
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#projects"
              className="block py-2 hover:text-purple-500 transition-colors"
              onClick={toggleMenu}
            >
              Proyectos
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#contact"
              className="block py-2 hover:text-purple-500 transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

const NavLinks = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="#home"
        className={`hover:text-purple-500 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Inicio
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="#skills"
        className={`hover:text-purple-500 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Habilidades
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="#projects"
        className={`hover:text-purple-500 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Proyectos
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="#contact"
        className={`hover:text-purple-500 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        Contacto
      </motion.a>
    </>
  )
}

export default Header
