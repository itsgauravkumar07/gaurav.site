import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-black">
      <div className="max-w-5xl mx-auto md:px-5">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
