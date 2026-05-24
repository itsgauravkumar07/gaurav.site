import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNode } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiVercel, SiTypescript, SiExpress, SiMongodb } from "react-icons/si"
import Reveal from "./Reveal"

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "NextJs", icon: <SiNextdotjs className="text-white" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Node.js", icon: <FaNode className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto pt-25">
      <div className="px-2 py-2 flex  flex-col">
               <div className="flex gap-4 items-center">
                   <span className="bg-blue-500/20 px-2 py-2 rounded-lg border-blue-600/50 border"><FaReact className="text-2xl text-blue-500"/></span>
                   <span className="text-4xl font-bold bg-linear-to-r from-white bg-white to-blue-600/50 bg-clip-text text-transparent py-1">Tech Stack</span>
               </div>
          <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-blue-600/50 to-transparent " />
          </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.1}>
            <div
              className="flex flex-col items-center gap-4 p-5 rounded-xl
              border border-blue-600/30
              translation-transform duration-400 ease-out hover:scale-104
              hover:bg-blue-500/20"
            >
              <span className="text-5xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
