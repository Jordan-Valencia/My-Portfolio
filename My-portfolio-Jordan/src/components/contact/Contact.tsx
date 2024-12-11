import { useState, ChangeEvent, FormEvent } from "react";
import { SiGmail } from "react-icons/si";
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Manejo de la Api de correo
    setIsSubmitted(true);
  };

  return (
    <section
      ref={innerRef}
      className="flex flex-col items-center justify-start px-5 text-white h-screen w-full md:w-3/4 md:pt-32"
    >
      <h2 className="text-3xl font-bold text-center pb-5">Contactame</h2>

      {isSubmitted ? (
        <p className="text-center text-purple-500 text-xl pt-4">
          ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col space-y-5 pt-4"
        >
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
