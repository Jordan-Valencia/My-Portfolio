import { useState, ChangeEvent, FormEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactProps {
  innerRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ innerRef }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      emailjs.send(
        "service_4p91m1h", 
        "template_i3gu5ah", 
        {
          name: formData.name, 
          email: formData.email,
          message: formData.message,
        },
        "BOhsteA5_FTMgNotk" 
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };
  

  return (
    <section
      ref={innerRef}
      className="flex flex-col items-center justify-start px-5 text-white h-screen w-full md:w-3/4 md:pt-32"
    >
      <h2 className="text-3xl font-bold text-center pb-5">Cuentas</h2>
      <div className="flex gap-3 gap-x-9 md:m-5">
        <a href="https://github.com/Jordan-Valencia" target="_blank">
          <FaGithub className="text-4xl cursor-pointer"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/jordan-valencia-dev-7944a9331/" target="_blank">
          <FaLinkedin className="text-4xl cursor-pointer"></FaLinkedin>
        </a>
        <a href="mailto:jordanvalenciadev@gmail.com" target="_blank">
          <SiGmail className="text-4xl cursor-pointer"></SiGmail>
        </a>
        <a href="https://wa.me/3011186124" target="_blank">
          <SiWhatsapp className="text-4xl cursor-pointer"></SiWhatsapp>
        </a>
      </div>
      {isSubmitted ? (
        <p className="text-center text-purple-500 text-xl pt-4">
          ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col space-y-5 pt-4"
        >
          <div className="text-center text-3xl font-bold">Correo</div>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="flex gap-3 justify-center items-center w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all font-bold text-white"
          >
            Enviar <SiGmail></SiGmail>
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
