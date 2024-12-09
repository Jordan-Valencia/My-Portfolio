import { useState } from "react";
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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const colors = [
    "bg-purple-600",
    "bg-blue-500",
    "bg-gray-500",
    "bg-indigo-400",
    "bg-teal-500",
  ];

  return (
    <div className="max-w-md w-full p-4 rounded-lg shadow-2xl bg-gradient-to-tr from-black-800 via-blue-950 to-purple-800 bg-200% animate-gradient-flow">
      <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="object-contain w-full h-full max-w-full max-h-full transition-opacity duration-500 ease-in-out"
        />
        <button
          onClick={handlePreviousImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-purple-600 transition-all shadow-lg"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={handleNextImage}
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
            className={`p-2 ${
              colors[index % colors.length]
            } text-white rounded-full shadow-md m-1 text-center`}
            key={index}
          >
            {skill}
          </article>
        ))}
      </section>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 px-5">
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
