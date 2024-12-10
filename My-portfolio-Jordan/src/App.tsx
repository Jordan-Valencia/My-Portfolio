import CopyPasteAnimation from "./components/introduction/CopyPaste";
import ImageContainerIntroduction from "./components/introduction/ImagenInicio";
import Introduction from "./components/introduction/TextIntroduction";
import NavBar from "./components/navbar/Navbar";
import SkillsSection from "./components/skills/Skills";
import ProjectsSection from "./components/proyects/proyects";
import AboutMe from "./components/about/Aboutme";
import Contact from "./components/contact/Contact";
import { useRef } from "react";
function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth"});
  };
  return (
    <div className="overflow-hidden">
      <NavBar
        onNavigate={(section) => {
          switch (section) {
            case "home":
              scrollToSection(section1Ref);
              break;
            case "aboutMe":
              scrollToSection(section2Ref);
              break;
            case "contact":
              scrollToSection(section3Ref);
              break;
            case "proyects":
              scrollToSection(section4Ref);
              break;
            case "skills":
              scrollToSection(section5Ref);
              break;
          }
        }}
      ></NavBar>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-black to-purple-950 w-screen">
        <section
          className="flex h-screen flex-col md:flex-row justify-start items-center w-full md:w-3/4 max-w-5xl -mb-36"
          ref={section1Ref}
        >
          <ImageContainerIntroduction>
            <img
              src="https://i.postimg.cc/x1tR2bjP/mejor-imagen.jpg"
              alt="picture"
              className="rounded-full w-80 h-96 border-4 border-white shadow-lg"
            />
          </ImageContainerIntroduction>
          <section className="flex flex-col justify-start md:justify-center items-center h-full w-full">
            <Introduction></Introduction>
            <CopyPasteAnimation
              textToCopy="desarrollador Full-stack"
              delay={1400}
            ></CopyPasteAnimation>
          </section>
        </section>
        <SkillsSection innerRef={section5Ref}></SkillsSection>
        <ProjectsSection innerRef={section4Ref}></ProjectsSection>
        <AboutMe innerRef={section2Ref}></AboutMe>
        <Contact innerRef={section3Ref}></Contact>
      </div>
    </div>
  );
}

export default App;
