import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  title: string;
  skills: string[];
  images: string[];
}

const projects: Project[] = [
  {
    title: "Tienda en Línea",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Bootstrap",
      "Git",
      "Cloudflare",
    ],
    images: [
      "https://i.ibb.co/whSWnK7/imagen-2024-11-29-055937037.png",
      "https://i.ibb.co/1ZgRDK2/imagen-2024-11-29-060036459.png",
      "https://i.ibb.co/9q24kZJ/imagen-2024-11-29-060153889.png",
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Precarga de imágenes
  useEffect(() => {
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project.images]);

  // Limpieza del timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const changeImage = (direction: "next" | "prev") => {
    setIsFading(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (direction === "next") {
          return prevIndex === project.images.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? project.images.length - 1 : prevIndex - 1;
        }
      });
      setIsFading(false);
    }, 300); // Duración de la animación en milisegundos
  };

  const colors = [
    "bg-purple-600",
    "bg-blue-500",
    "bg-gray-500",
    "bg-indigo-400",
    "bg-teal-500",
  ];

  return (
    <div className="max-w-md w-full p-4 rounded-lg shadow-2xl bg-gradient-to-tr  to-purple-600">
      <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={`object-contain w-full h-full transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />
        <button
          onClick={() => changeImage("prev")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-purple-600 transition-all shadow-lg"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={() => changeImage("next")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-purple-600 transition-all shadow-lg"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
      <h3 className="text-xl font-bold text-white mt-1 text-center hover:text-purple-400 transition-all cursor-pointer p-2">
        {project.title}
      </h3>
      <section className="flex flex-wrap justify-center text-sm text-white mt-4">
        {project.skills.map((skill, index) => (
          <article
            key={index}
            className={`p-2 ${colors[index % colors.length]} text-white rounded-full shadow-md m-1 text-center`}
          >
            {skill}
          </article>
        ))}
      </section>
    </div>
  );
};

interface ProjectsProps {
  innerRef: React.RefObject<HTMLDivElement>;
}

const ProjectsSection: React.FC<ProjectsProps> = ({ innerRef }) => {
  return (
    <section ref={innerRef} className="py-20 px-5">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Mis Proyectos
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
