import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

interface NavbarProps {
  onNavigate: (
    section: "home" | "skills" | "proyects" | "aboutMe" | "contact"
  ) => void;
}

const handleDownloadCV = () => {
  const cvFileName = "JordanValencia.pdf";
  const fileUrl = `/${cvFileName}`;

  const link = document.createElement("a");
  link.href = fileUrl;
  link.setAttribute("download", cvFileName);
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (
    section: "home" | "skills" | "proyects" | "aboutMe" | "contact"
  ) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  const NavItems = [
    {
      label: "Inicio",
      icon: <FaHome className="mr-2" />,
      section: "home",
    },
    {
      label: "Habilidades",
      icon: <FaCode className="mr-2" />,
      section: "skills",
    },
    {
      label: "Proyectos",
      icon: <FaProjectDiagram className="mr-2" />,
      section: "proyects",
    },
    {
      label: "Sobre mí",
      icon: <FaUser className="mr-2" />,
      section: "aboutMe",
    },
    {
      label: "Contacto",
      icon: <FaEnvelope className="mr-2" />,
      section: "contact",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-10">
      <div className="hidden md:flex justify-end bg-opacity-30 text-white backdrop-blur-sm p-4">
        {NavItems.map((item) => (
          <p
            key={item.section}
            className="px-3 py-2 mx-1 cursor-pointer flex items-center"
            onClick={() => handleNavigation(item.section as any)}
          >
            {item.icon}
            {item.label}
          </p>
        ))}
        <p className="px-3 py-2 mx-1 cursor-pointer text-orange-400 border-orange-400 border rounded-md flex items-center " onClick={handleDownloadCV}>
          <FaFileAlt className="mr-2"/>
          CV
        </p>
      </div>

      <div className="md:hidden">
        <div className="fixed top-4 right-4 z-30">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes size={32} className="text-white" />
            ) : (
              <FaBars size={32} className="text-white" />
            )}
          </button>
        </div>

        <div
          className={`
            fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 
            transform transition-transform duration-300 ease-in-out z-20
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full pt-20 px-6 space-y-6">
            {NavItems.map((item) => (
              <div
                key={item.section}
                className="text-xl text-white py-3 cursor-pointer flex items-center hover:bg-gray-800 rounded-md px-4"
                onClick={() => handleNavigation(item.section as any)}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
            <div className="text-xl text-orange-400 py-3 cursor-pointer flex items-center hover:bg-gray-800 rounded-md px-4 border-orange-400 border" onClick={handleDownloadCV}>
              <FaFileAlt className="mr-2" />
              CV
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMobileMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
