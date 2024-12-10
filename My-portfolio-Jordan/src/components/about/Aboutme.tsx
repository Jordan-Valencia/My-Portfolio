interface AboutProps{
  innerRef:
  React.RefObject<HTMLDivElement>
}

const AboutMe: React.FC<AboutProps> = ({innerRef}) => {
  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center h-screen py-20 px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Sobre Mí
      </h2>
      <div className="flex">
        <div className="max-w-4xl text-white space-y-6 w-full md:w-1/2">
          <p className="text-xl">
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
        </div>
        <img
            src="https://i.postimg.cc/x1tR2bjP/mejor-imagen.jpg"
            alt="picture"
            className="hidden md:relative md:block relative w-1/2 "
          />
      </div>
    </section>
  );
};

export default AboutMe;
