import { FiCode } from "react-icons/fi"
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import Billwise from '../assets/billwise.png'
import Reveal from "./Reveal"

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-5">
      <div className="flex gap-4 items-center">
        <span className="bg-blue-500/20 px-2 py-2 rounded-lg border-blue-600/50 border"><FiCode className="text-2xl text-blue-500"/></span>
        <span className="text-4xl font-bold bg-linear-to-r from-white bg-white to-blue-600/50 bg-clip-text text-transparent py-1">Featured Projects</span>
      </div>
      <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-blue-600/50 to-transparent " />

      <div className="grid grid-rows-[2fr_1fr] overflow-hidden rounded-2xl">
        <div className="bg-blue-500 ">
          <img 
            src={Billwise} 
            alt="Billwise dashoard img" 
            className="rounded-t-2xl h-70"
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-5">
            <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Billwise</h1>
            <div className="flex gap-2">
              <FaReact className="text-[#61DAFB] text-3xl"/>
              <SiTailwindcss className="text-[#38BDF8] text-3xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-3xl"/>
            </div>
          </div> 

           <p className="mt-2">BillWise is a modern subscription management application designed to simplify tracking of recurring expenses. Built with React and Tailwind CSS, it features a clean, responsive UI, smooth state handling, and reusable...</p>


        </div>
          </div>
          
      </div>
    </section>
  )
}
