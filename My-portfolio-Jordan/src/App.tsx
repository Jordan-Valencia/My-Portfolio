import CopyPasteAnimation from "./components/introduction/CopyPaste";
import ImageContainerIntroduction from "./components/introduction/ImagenInicio";
import Introduction from "./components/introduction/TextIntroduction";
import NavBar from "./components/navbar/Navbar";
import SkillsSection from "./components/skills/Skills";
import ProjectsSection from './components/proyects/proyects';
function App() {
  return (
    <div className="h-full bg-gradient-to-br from-black to-purple-950">
      <NavBar></NavBar>
      <ImageContainerIntroduction>
        <div className="flex justify-start items-center mx-0">
          <img
            src="https://i.postimg.cc/x1tR2bjP/mejor-imagen.jpg"
            alt="picture"
            className="w-80 h-96 ml-24 mr-12 rounded-full border-4 border-white shadow-lg"
          />
          <section className="flex flex-wrap justify-start items-start h-full">
            <Introduction></Introduction>
            <CopyPasteAnimation textToCopy="desarrollador Full-stack" delay={1400}></CopyPasteAnimation>
          </section>
        </div>
      </ImageContainerIntroduction>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}

export default App;
