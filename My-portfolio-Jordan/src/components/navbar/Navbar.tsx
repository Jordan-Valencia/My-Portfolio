import { useState } from "react";

interface NavbarProps {
  onNavigate: (
    section: "home" | "skills" | "proyects" | "aboutMe" | "contact"
  ) => void;
}
const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [desktop] = useState(true);

  return (
    <>
      {desktop ? (
        <nav className="fixed top-0 flex justify-end bg-opacity-30 text-white backdrop-blur-sm z-10 p-4 w-screen">
          <p
            className="px-3 py-2 mx-1 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            Inicio
          </p>
          <p
            className="px-3 py-2 mx-1 cursor-pointer"
            onClick={() => onNavigate("skills")}
          >
            Habilidades
          </p>
          <p
            className="px-3 py-2 mx-1 cursor-pointer"
            onClick={() => onNavigate("proyects")}
          >
            Proyectos
          </p>
          <p
            className="px-3 py-2 mx-1 cursor-pointer"
            onClick={() => onNavigate("aboutMe")}
          >
            Sobre mí
          </p>
          <p
            className="px-3 py-2 mx-1 cursor-pointer"
            onClick={() => onNavigate("contact")}
          >
            Contacto
          </p>
          <p className="px-3 py-2 mx-1 cursor-pointer text-orange-400 border-orange-400 border rounded-md">
            CV
          </p>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
