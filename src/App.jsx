import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Github from "./components/Github"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-black">
      <Navbar />
      <div className="max-w-5xl mx-auto px-5">
        
        <Hero />
        <Skills />
        <Projects />
        <Github />
        <Contact />
      </div>
       <Footer />
    </div>
  )
}
