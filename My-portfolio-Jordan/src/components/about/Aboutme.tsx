interface AboutProps{
  innerRef:
  React.RefObject<HTMLDivElement>
}

const AboutMe: React.FC<AboutProps> = ({innerRef}) => {
  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center h-screen md:max-h-max py-20 px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Sobre Mí
      </h2>
      <div className="flex">
        <div className="max-w-4xl text-white space-y-6 w-full md:w-full">
          <p className="text-xl">
            Desarrollador full-stack comprometido con crear soluciones eficientes y escalables tanto en entornos{" "}
            <span className="text-purple-400 font-semibold">front-end</span> como{" "}
            <span className="text-purple-400 font-semibold">back-end</span> .
            Especializado en transformar desafíos complejos en{" "}
            <span className="text-purple-400 font-semibold">
              soluciones innovadoras
            </span>
            , generando un impacto significativo en cada proyecto. Con dominio técnico en tecnologías de vanguardia como{" "}
            <span className="font-light-">
            TypeScript, React, NestJS y Docker
            </span>
            , destaco por mi capacidad de{" "}
            <span className="text-purple-400 font-semibold">
            adaptación{" "}
            </span>
            y {" "}
            <span className="text-purple-400 font-semibold">
            trabajo colaborativa
            </span>
            . Mi enfoque se centra en integrar las mejores prácticas de desarrollo, liderando proyectos que no solo resuelven problemas, sino que impulsan la innovación tecnológica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
