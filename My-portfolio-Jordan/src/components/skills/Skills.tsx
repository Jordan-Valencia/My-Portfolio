import { FaJs, FaReact, FaNode, FaAngular } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiBootstrap,
  SiDocker,
  SiAmazonwebservices,
  SiCloudflare,
} from "react-icons/si";

interface SkillsProps{
  innerRef:
  React.RefObject<HTMLDivElement>
}

const SkillsSection: React.FC<SkillsProps> = ({innerRef}) => {
  const frontEndSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Angular", icon: <FaAngular className="text-red-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
  ];

  const backEndSkills = [
    { name: "Node.js", icon: <FaNode className="text-green-600" /> },
    {
      name: "Express",
      icon: <SiExpress className="text-black bg-white p-1" />,
    },
    { name: "NestJS", icon: <SiNestjs className="text-red-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  ];

  const devOpsSkills = [
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-white" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500" /> },
  ];

  const skillBoxClasses =
    "flex flex-col items-center text-white hover:scale-125 transition-transform duration-200 cursor-pointer p-4";

  return (
    <section ref={innerRef} className="flex flex-col items-center justify-center text-center w-full pt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Mis Habilidades
      </h2>
      <h3 className="py-4 text-white animate-bounce">▼</h3>
      <article className="flex flex-col gap-8 justify-center mt-10 px-5 w-full md:max-w-screen-2xl md:flex-row">
        <div className="relative group w-full md:w-1/4">
          <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-md"></div>
          <div className="min-h-full relative flex flex-col items-center justify-start p-8 rounded-xl bg-gradient-to-b from-black via-purple-900 to-purple-800">
            <h3 className="text-2xl font-semibold text-white mb-5">
              Front-End
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontEndSkills.map((skill, index) => (
                <div key={index} className={skillBoxClasses}>
                  <div className="text-5xl mb-3">{skill.icon}</div>
                  <p className="text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group w-full md:w-1/4">
          <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-md"></div>
          <div className="relative min-h-full flex flex-col items-center justify-start p-8 rounded-xl bg-gradient-to-b from-black via-purple-900 to-purple-800">
            <h3 className="text-2xl font-semibold text-white mb-5">Back-End</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {backEndSkills.map((skill, index) => (
                <div key={index} className={skillBoxClasses}>
                  <div className="text-5xl mb-3">{skill.icon}</div>
                  <p className="text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group w-full md:w-1/4">
          <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-md"></div>
          <div className="min-h-full relative flex flex-col items-center justify-start p-8 rounded-xl bg-gradient-to-b from-black via-purple-900 to-purple-800">
            <h3 className="text-2xl font-semibold text-white mb-5">DevOps</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {devOpsSkills.map((skill, index) => (
                <div key={index} className={skillBoxClasses}>
                  <div className="text-5xl mb-3">{skill.icon}</div>
                  <p className="text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SkillsSection;
