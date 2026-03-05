import { FiCode } from "react-icons/fi"
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Billwise from "../assets/billwise.png";
import Internal from "../assets/internal.png"
import Fitflow from "../assets/Fitflow.png";
import Zapless from "../assets/Zapless.png";


export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto pt-25">
      <div className="flex gap-4 items-center">
        <span className="bg-blue-500/20 px-2 py-2 rounded-lg border-blue-600/50 border"><FiCode className="text-2xl text-blue-500"/></span>
        <span className="text-4xl font-bold bg-linear-to-r from-white bg-white to-blue-600/50 bg-clip-text text-transparent py-1">Featured Projects</span>
      </div>
      <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-blue-600/50 to-transparent " />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

        {/* Project 01 */}
        <div className=" 
              group overflow-hidden rounded-2xl
              border border-blue-600/50
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <img 
            src={Billwise} 
            alt="Billwise dashoard img" 
            className="
              w-full object-cover
              aspect-video[16/9]
              md:aspect-auto md:h-56
              transition-transform duration-300 ease-out
              group-hover:scale-105
            "
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Billwise</h1>
            <div className="flex gap-2">
              <FaReact className="text-[#61DAFB] text-2xl"/>
              <SiTailwindcss className="text-[#38BDF8] text-2xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-2xl"/>
            </div>
          </div> 

          <p className="py-4 leading-relaxed md:hidden">
              BillWise is a modern subscription management 
              application designed to simplify tracking of 
              recurring...
          </p>
           <p className="py-4 hidden md:block leading-relaxed">
              BillWise is a modern subscription management 
              application designed to simplify tracking of 
              recurring expenses. Built with React and Tailwind 
              CSS, it features a clean, responsive UI, smooth 
              state handling...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://bill-wise1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://github.com/itsgauravkumar07/BillWise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
            </a>
              
            </div>
          </div>
        </div>
          </div>
          
        </div>

        {/* Project 02 */}
        <div className=" 
              group overflow-hidden rounded-2xl
              border border-blue-600/50
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <img 
            src={Internal} 
            alt="Project img" 
            className="
              w-full object-cover
              aspect-video[16/9]
              md:aspect-auto md:h-56
              transition-transform duration-300 ease-out
              group-hover:scale-105
            "
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Internal admin dashboard</h1>
            <div className="flex gap-2">
              <FaReact className="text-[#61DAFB] text-2xl"/>
              <SiTailwindcss className="text-[#38BDF8] text-2xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-2xl"/>
            </div>
          </div> 

          <p className="py-4 leading-relaxed md:hidden">
              This is startup style internal admin dashboard that 
              build in react, focused on how small teams 
              manage their...
          </p>
           <p 
            className="py-4 hidden md:block leading-relaxed">
              This project focuses on role-based UI, state management,
              and realistic internal dashboard workflows, similar to 
              tools used inside small teams and startups. This app is
              a part of 30dayinternship...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://internal-user-management-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://github.com/itsgauravkumar07/internal-user-management-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
            </a>
              
            </div>
          </div>
        </div>
          </div>
          
        </div>

        {/* Project 03 */}
      <div className=" 
              group overflow-hidden rounded-2xl
              border border-blue-600/50
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <img 
            src={Fitflow} 
            alt="Project img" 
            className="
              w-full object-cover
              aspect-video[16/9]
              md:aspect-auto md:h-56
              transition-transform duration-300 ease-out
              group-hover:scale-105
            "
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">FitFlow</h1>
            <div className="flex gap-2">
              <SiNextdotjs className="text-white text-2xl"/>
              <SiTypescript className="text-2xl text-blue-600"/>
              <SiTailwindcss className="text-[#38BDF8] text-2xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-2xl"/>
            </div>
          </div> 

            <p className="py-4 leading-relaxed md:hidden">
              FitFlow is a modern, responsive landing page 
              built to showcase a fitness coaching service. 
              It combines...
          </p>
           <p 
            className="py-4 hidden md:block leading-relaxed">
              FitFlow is a modern, responsive landing page 
              built to showcase a fitness coaching service. 
              It combines clean design, structured content, 
              and interactive UI sections to help fitness 
              professionals...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://fit-flow-landing-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://github.com/itsgauravkumar07/FitFlow-landing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
            </a>
              
            </div>
          </div>
        </div>
          </div>
          
        </div>

        {/* Project 04 */}
       <div className=" 
              group overflow-hidden rounded-2xl
              border border-blue-600/50
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <img 
            src={Zapless} 
            alt="Project img" 
            className="
              w-full object-cover
              aspect-video[16/9]
              md:aspect-auto md:h-56
              transition-transform duration-300 ease-out
              group-hover:scale-105
            "
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Zapless</h1>
            <div className="flex gap-2">
              <FaReact className="text-[#61DAFB] text-2xl"/>
              <SiTailwindcss className="text-[#38BDF8] text-2xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-2xl"/>
            </div>
          </div> 

          <p className="py-4 leading-relaxed md:hidden">
              The Zapless landing page is a modern, 
              conversion-focused interface designed to 
              clearly...
          </p>
           <p 
            className="py-4 hidden md:block leading-relaxed">
              The Zapless landing page is a modern, 
              conversion-focused interface designed to 
              clearly communicate the value of instant lead 
              magnet delivery. Built with React and Tailwind
              CSS, it emphasizes...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://www.zapless.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://github.com/itsgauravkumar07/zapless-landing-page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
            </a>
              
            </div>
          </div>
        </div>
          </div>
          
        </div>

      </div>
     
    </section>
  )
}
