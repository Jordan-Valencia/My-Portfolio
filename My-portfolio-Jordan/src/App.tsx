"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const mainRef = useRef<HTMLDivElement>(null)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

  return (
    <div
      ref={mainRef}
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: darkMode
            ? "radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 1) 0%, rgba(10, 10, 10, 1) 100%)"
            : "radial-gradient(circle at 50% 50%, rgba(240, 240, 240, 1) 0%, rgba(255, 255, 255, 1) 100%)",
          opacity,
        }}
      />

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
