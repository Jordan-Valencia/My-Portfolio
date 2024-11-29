
function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-end bg-opacity-30 text-white backdrop-blur-sm z-10 p-4">
      <p className="px-3 py-2 mx-2">Inicio</p>
      <p className="px-3 py-2 mx-2">Habilidades</p>
      <p className="px-3 py-2 mx-2">Proyectos</p>
      <p className="px-3 py-2 mx-2">Sobre mí</p>
      <p className="px-3 py-2 mx-2">Contacto</p>
      <p className="px-3 py-2 mx-2 text-orange-400 border-orange-400 border rounded-md">
        CV
      </p>
    </nav>
  );
}

export default NavBar;
