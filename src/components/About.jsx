import { FiUser } from "react-icons/fi"
import Reveal from "./Reveal"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <div className="p-8 rounded-2xl
          bg-gradient-to-br from-slate-900/80 to-slate-800/40
          border border-slate-700 backdrop-blur">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FiUser className="text-indigo-400" />
            About Me
          </h2>

          <p className="text-slate-300 max-w-3xl">
            I’m a frontend developer focused on building clean UI,
            scalable React components, and smooth user experiences.
            Currently preparing for frontend internships and remote roles.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
