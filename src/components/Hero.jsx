import {FiMapPin } from "react-icons/fi"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/Profile.jpg'

export default function Hero() {
  return (
    <section className="flex items-center bg-amber-500 pt-25">
  <div className="
    max-w-6xl mx-auto
    grid grid-cols-1 md:grid-cols-[1fr_3fr]
    gap-10 items-center
  ">
    {/* Left column */}
    <div className="flex flex-col items-center gap-6 text-gray-300">
      <img
        src={profile}
        alt="Profile"
        className="h-44 w-44 rounded-full object-cover"
      />

      <p className="flex items-center gap-2 text-sm">
        <FiMapPin />
        <span>Dehradun, Uttarakhand, India</span>
      </p>

      <div className="flex gap-6 text-3xl">
        <FaGithub className="text-white hover:text-gray-400 transition-colors" />
        <FaLinkedin className="text-[#0A66C2] hover:text-[#0558b1] transition-colors" />
        <FaXTwitter className="bg-white text-black rounded-md px-1 hover:bg-gray-300 transition-colors" />
      </div>
    </div>

    {/* Right column */}
    <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold">
        Gaurav Kumar
      </h1>

      <p className="text-lg text-gray-400">
        Frontend Developer | React.js, Next.js, Tailwind CSS
      </p>

      <p className="text-lg leading-relaxed text-gray-300">
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
