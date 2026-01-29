import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"
import Reveal from "./Reveal"

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.1}>
            <div
              className="flex items-center gap-4 p-5 rounded-xl
              bg-gradient-to-br from-slate-900/80 to-slate-800/40
              border border-slate-700
              hover:-translate-y-2 hover:border-indigo-500
              transition"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
