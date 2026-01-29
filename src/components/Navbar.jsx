import { FiHome, FiFolder, FiMail } from "react-icons/fi"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold tracking-wide">
          Gaurav.dev
        </span>

        <div className="flex gap-6 text-slate-400">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-slate-100 transition"
          >
            <FiHome />
            Home
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-slate-100 transition"
          >
            <FiFolder />
            Projects
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-slate-100 transition"
          >
            <FiMail />
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
