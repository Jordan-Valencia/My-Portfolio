"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MdEmail, MdPhone, MdSend } from "react-icons/md"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import emailjs from "@emailjs/browser"

interface ContactProps {
  darkMode: boolean
}

const Contact = ({ darkMode }: ContactProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
    subject: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: formState.user_name,
        from_email: formState.user_email,
        message: formState.message,
        subject: formState.subject || "Consulta desde Portafolio",
        to_name: "Jordan Valencia",
        reply_to: formState.user_email,
      }

      // Enviar email usando EmailJS
      await emailjs.send("service_4p91m1h", "template_i3gu5ah", templateParams, "BOhsteA5_FTMgNotk")

      setSubmitSuccess(true)
      setFormState({ user_name: "", user_email: "", message: "", subject: "" })
    } catch (error) {
      console.error("Error al enviar el correo:", error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" ref={ref} className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Contáctame
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajar en nuevos proyectos y
            colaboraciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <MdEmail className="text-purple-500" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href="mailto:jordanvalenciadev@gmail.com"
                  className="text-lg hover:text-purple-500 transition-colors"
                >
                  jordanvalenciadev@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <MdPhone className="text-purple-500" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                <a
                  href="https://wa.me/3011186124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-purple-500 transition-colors"
                >
                  +57 301 118 6124
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <BsGithub className="text-purple-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                <a
                  href="https://github.com/Jordan-Valencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-purple-500 transition-colors"
                >
                  Jordan-Valencia
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <BsLinkedin className="text-purple-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jordan-valencia-dev-7944a9331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-purple-500 transition-colors"
                >
                  Jordan Valencia
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-800 bg-opacity-50 backdrop-blur-sm" : "bg-white shadow-lg"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>

            {submitSuccess ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center p-8">
                <div className="text-green-500 text-5xl mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h4>
                <p className="mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formState.user_name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                    } border`}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formState.user_email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                    } border`}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                    } border`}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Proyecto">Proyecto</option>
                    <option value="Colaboración">Colaboración</option>
                    <option value="Oferta de trabajo">Oferta de trabajo</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Otro">Otro</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
                    } border`}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    } text-white transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MdSend /> Enviar Mensaje
                      </>
                    )}
                  </button>

                  {submitError && (
                    <p className="mt-4 text-red-500 text-center">
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </p>
                  )}
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
