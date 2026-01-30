import { FiCode } from "react-icons/fi"
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import BillWise from '../assets/BillWise.png'
import QuizBee from '../assets/QuizBee.png'
import Fitflow from "../assets/Fitflow.png"
import Zapless from '../assets/Zapless.png'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pt-18">
      <div className="flex gap-4 items-center">
        <span className="bg-blue-500/20 px-2 py-2 rounded-lg border-blue-600/50 border"><FiCode className="text-2xl text-blue-500"/></span>
        <span className="text-4xl font-bold bg-linear-to-r from-white bg-white to-blue-600/50 bg-clip-text text-transparent py-1">Featured Projects</span>
      </div>
      <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-blue-600/50 to-transparent " />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

        {/* Project 01 */}
        <div className="grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-blue-600/50 transition-transform duration-400 ease-out hover:scale-101">
        <div>
          <img 
            src={BillWise} 
            alt="Billwise dashoard img" 
            className="rounded-t-2xl h-70 md:h-60 lg:h-60"
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

           <p 
            className="py-4">
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
        <div className="grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-blue-600/50 transition-transform duration-400 ease-out hover:scale-101">
        <div>
          <img 
            src={QuizBee} 
            alt="QuizBee img" 
            className="rounded-t-2xl h-70 md:h-60 lg:h-60"
          />
        </div>
        <div className="bg-black rounded-b-2xl">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">QuizBee</h1>
            <div className="flex gap-2">
              <FaReact className="text-[#61DAFB] text-2xl"/>
              <SiTailwindcss className="text-[#38BDF8] text-2xl"/>
              <SiVercel className="text-white bg-black rounded-full px-2 text-2xl"/>
            </div>
          </div> 

           <p 
            className="py-4">
              QuizBee is an engaging, interactive quiz application
              built with React and Tailwind CSS that lets 
              users test their knowledge across a variety 
              of categories. The app features a dynamic quiz 
              flow with real-time...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://quiz-bee-1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://github.com/itsgauravkumar07/QuizBee" 
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
       <div className="grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-blue-600/50 transition-transform duration-400 ease-out hover:scale-101">
        <div>
          <img 
            src={Fitflow} 
            alt="FitFlow img" 
            className="rounded-t-2xl h-70 md:h-60 lg:h-60"
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

           <p 
            className="py-4">
              FitFlow is a modern, responsive landing page 
              built to showcase a fitness coaching service. 
              It combines clean design, structured content, 
              and interactive UI sections to help fitness 
              professionals...
          </p>
          
          <div className="flex gap-5 items-center">
            <div className=" text-blue-600 hover:text-blue-800 hover:cursor-pointer">
              <a 
                href="https://github.com/itsgauravkumar07/FitFlow-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <FaArrowUpRightFromSquare className="text-sm"/>
                <span>Live Demo</span>
              </a>
              
            </div>

            <div className="text-gray-400 hover:text-gray-300 hover:cursor-pointer">
            <a 
                href="https://fit-flow-landing-ten.vercel.app/" 
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
       <div className="grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-blue-600/50 transition-transform duration-400 ease-out hover:scale-101">
        <div>
          <img 
            src={Zapless} 
            alt="Zapless img" 
            className="rounded-t-2xl h-70 md:h-60 lg:h-60"
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

           <p 
            className="py-4">
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
