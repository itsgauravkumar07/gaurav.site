import {FiMapPin } from "react-icons/fi"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/Profile.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-10">
      <div className="grid md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr] md:gap-10 lg:gap-10 place-items-center gap-6 ">
          <div className="flex items-center flex-col gap-4 text-gray-300">
          <img 
            src={profile} 
            alt="Profile" 
            className="rounded-full h-44 w-44"
          />
          <p className="flex items-center gap-2 justify-center text-sm"> 
            <FiMapPin />
            <span>Dehradun, Uttarakhand, India</span>
          </p>

          <div className="flex gap-8 text-3xl">
            <FaGithub className="text-white hover:text-gray-400 transition" />
            <FaLinkedin className="text-[#0A66C2] hover:text-[#0558b1] transition"/>
            <FaXTwitter className="bg-white rounded-md px-1 text-black hover:bg-gray-400"/>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl md:mt-6 lg:md-6">
          <h1 className="text-4xl md:text-6xl text-center font-bold md:text-start lg:text-start">Gaurav kumar</h1>

          <p className="text-lg text-center text-gray-400 md:text-start lg:text-start">Frontend Developer | React.js, Next.js, Tailwindcss</p>

          <p 
            className="text-center md:text-start lg:text-start text-lg leading-relaxed">
              Frontend developer specializing in React, open-source contributions, 
              and production-grade web applications. Focused on clean architecture, 
              scalable UI systems, and building software that holds up in real-world 
              use. Driven by a product mindset that balances usability, performance, 
              and long-term scalability.
          </p>
        </div>
      </div>
      
    </section>
  )
}
