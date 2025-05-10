"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiNodejsSmall,
  DiDocker,
  DiMysql,
  DiPostgresql,
  DiGit,
} from "react-icons/di"
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiAstro,
  SiCloudflare,
  SiAmazonwebservices,
} from "react-icons/si"

interface SkillsProps {
  darkMode: boolean
}

const Skills = ({ darkMode }: SkillsProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const frontEndSkills = [
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <DiReact className="text-sky-500 text-3xl" /> },
    { name: "Angular", icon: <DiAngularSimple className="text-red-500 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    { name: "Astro", icon: <SiAstro className="text-white" /> },
  ]

  const backEndSkills = [
    { name: "Node.js", icon: <DiNodejsSmall className="text-green-600 text-3xl" /> },
    { name: "Express", icon: <SiExpress className={darkMode ? "text-white" : "text-black"} /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-700" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    { name: "Django REST", icon: <SiDjango className="text-green-600" /> },
    { name: "MySQL", icon: <DiMysql className="text-blue-700 text-3xl" /> },
    { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-700 text-3xl" /> },
  ]

  const devOpsSkills = [
    { name: "Git", icon: <DiGit className="text-orange-600 text-3xl" /> },
    { name: "Docker", icon: <DiDocker className="text-blue-600 text-3xl" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-500" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" ref={ref} className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Habilidades
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Cuento con experiencia en diversas tecnologías que me permiten desarrollar soluciones completas y
            escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCategory title="Frontend" skills={frontEndSkills} isInView={isInView} darkMode={darkMode} />

          <SkillCategory title="Backend" skills={backEndSkills} isInView={isInView} darkMode={darkMode} />

          <SkillCategory title="DevOps" skills={devOpsSkills} isInView={isInView} darkMode={darkMode} />
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  isInView: boolean
  darkMode: boolean
}

const SkillCategory = ({ title, skills, isInView, darkMode }: SkillCategoryProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const handleSkillClick = (skillName: string) => {
    // Scroll to projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })

    // Dispatch custom event to filter projects
    window.dispatchEvent(
      new CustomEvent("filterProjects", {
        detail: { skill: skillName },
      }),
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`p-6 rounded-xl ${darkMode ? "bg-gray-800 bg-opacity-50 backdrop-blur-sm" : "bg-white shadow-lg"}`}
    >
      <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={() => handleSkillClick(skill.name)}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-2 ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } hover:bg-purple-500 hover:text-white transition-colors duration-300`}
            >
              {skill.icon}
            </div>
            <span className="text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
