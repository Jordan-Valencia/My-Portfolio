"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"

interface ProjectsProps {
  darkMode: boolean
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [filteredSkill, setFilteredSkill] = useState<string | null>(null)
  const [projects, setProjects] = useState([
    {
      title: "Ruta-Sport.com",
      description:
        "Plataforma web de tenis desarrollada con Angular, Node.js y PostgreSQL, desplegada con Cloudflare.",
      image: "/images/ruta-sport.png",
      tags: ["Cloudflare", "Angular", "Git", "Node.js", "PostgreSQL"],
      links: {
        demo: "https://ruta-sport.com",
      },
    },
  ])

  const [visibleProjects, setVisibleProjects] = useState(projects)

  useEffect(() => {
    // Listen for the custom event from Skills component
    const handleFilterProjects = (event: CustomEvent<{ skill: string }>) => {
      const skill = event.detail.skill
      setFilteredSkill(skill)

      // Filter projects based on the skill
      const filtered = projects.filter((project) =>
        project.tags.some((tag) => tag.toLowerCase() === skill.toLowerCase()),
      )

      // If no projects match, show all projects
      setVisibleProjects(filtered.length > 0 ? filtered : projects)

      // Add a timeout to reset the filter after 5 seconds
      setTimeout(() => {
        setFilteredSkill(null)
        setVisibleProjects(projects)
      }, 5000)
    }

    window.addEventListener("filterProjects", handleFilterProjects as EventListener)

    return () => {
      window.removeEventListener("filterProjects", handleFilterProjects as EventListener)
    }
  }, [projects])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Proyectos
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            {filteredSkill
              ? `Proyectos relacionados con ${filteredSkill}`
              : "Aquí hay una selección de mis proyectos más recientes. Cada uno demuestra diferentes habilidades y tecnologías."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          {visibleProjects.map((project, index) => (
            <div className="w-full max-w-md" key={index}>
              <ProjectCard
                project={project}
                variants={itemVariants}
                darkMode={darkMode}
                isHighlighted={
                  filteredSkill !== null && project.tags.some((tag) => tag.toLowerCase() === filteredSkill?.toLowerCase())
                }
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    links: {
      demo: string
    }
  }
  variants: any
  darkMode: boolean
  isHighlighted?: boolean
}

const ProjectCard = ({ project, variants, darkMode, isHighlighted = false }: ProjectCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10 }}
      className={`rounded-xl overflow-hidden transition-all duration-500 ${
        isHighlighted ? `ring-4 ${darkMode ? "ring-purple-500" : "ring-purple-400"} transform scale-105` : ""
      } ${darkMode ? "bg-gray-900 border border-gray-700" : "bg-white shadow-lg"}`}
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-center">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
            >
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${
                darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
