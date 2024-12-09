import CopyPasteAnimation from "./components/introduction/CopyPaste";
import ImageContainerIntroduction from "./components/introduction/ImagenInicio";
import Introduction from "./components/introduction/TextIntroduction";
import NavBar from "./components/navbar/Navbar";
import SkillsSection from "./components/skills/Skills";
import ProjectsSection from "./components/proyects/proyects";
import AboutMe from "./components/about/Aboutme";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="bg-gradient-to-br from-black to-purple-950">
      <NavBar></NavBar>
      <section className="flex h-screen flex-row justify-start items-center ml-96 -mt-36">
        <ImageContainerIntroduction>
          <img
            src="https://i.postimg.cc/x1tR2bjP/mejor-imagen.jpg"
            alt="picture"
            className="w-80 h-96 mr-12 rounded-full border-4 border-white shadow-lg"
          />
        </ImageContainerIntroduction>
        <section className="flex flex-col justify-center items-start h-full">
          <Introduction></Introduction>
          <CopyPasteAnimation
            textToCopy="desarrollador Full-stack"
            delay={1400}
          ></CopyPasteAnimation>
        </section>
      </section>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  );
}

export default App;
