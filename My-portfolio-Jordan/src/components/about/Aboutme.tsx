const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen py-20 px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Sobre Mí
      </h2>
      <div className="flex">
        <div className="max-w-4xl text-white space-y-6 w-1/2">
          <p className="text-lg leading-8">
            Un desarrollador enfocado en crear soluciones eficientes y
            escalables en entornos{" "}
            <span className="text-purple-400 font-semibold">front-end</span> y{" "}
            <span className="text-purple-400 font-semibold">back-end</span> .
            Con capacidad para trasformar problemas complejos en soluciones
            innovadoras,{" "}
            <span className="text-purple-400 font-semibold">
              siempre buscando un gran impacto en los proyectos
            </span>{" "}
            . Enfocado en combinar habilidades técnicas sólidas, como el manejo
            de{" "}
            <span className="font-light-">
              TypeScript, React, NestJS y docker
            </span>
            , con habilidades interpersonales como la{" "}
            <span className="text-purple-400 font-semibold">
              adaptabilidad{" "}
            </span>
            y el{" "}
            <span className="text-purple-400 font-semibold">
              trabajo colaborativo
            </span>
            . Con una mentalidad de aprendizaje continuo, he liderado y
            participado en proyectos que integran tecnologías actuales, siempre
            usando las mejores prácticas, garantizando un gran aporte a
            cualquier proyecto.
          </p>
          <p className="text-lg leading-8">
            Fuera del ámbito profesional, me motiva aprender nuevas tecnologías
            por mi cuenta, explorar , y ayudar a mis compañeros de la
            universidad.
          </p>
        </div>
        <img
            src="https://i.postimg.cc/x1tR2bjP/mejor-imagen.jpg"
            alt="picture"
            className="w-1/2 h-full"
          />
      </div>
    </section>
  );
};

export default AboutMe;
