import { FiMail } from "react-icons/fi"
import { FaRocket } from 'react-icons/fa';
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="pt-18 text-center max-w-6xl mx-auto px-6 flex justify-center items-center">
       <div className="px-2 py-2 flex items-center justify-center flex-col max-w-3xl">
          <div className="flex gap-4 items-center">
              <span className="bg-blue-500/20 px-2 py-2 rounded-lg border-blue-600/50 border"><FaRocket className="text-2xl text-blue-500"/></span>
              <span className="text-4xl font-bold bg-linear-to-r from-white bg-white to-blue-600/50 bg-clip-text text-transparent py-1">Let’s Turn Ideas into Products</span>
          </div>
          <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-blue-600/50 to-transparent " />

            <p 
              className="text-2xl ">
                Whether it’s an early concept or a growing 
                product, I enjoy working closely to build 
                scalable, user-focused software from the ground up.
            </p>

            <div 
              className="
              flex items-center justify-center gap-2 
            text-blue-600 
              px-6 py-2 
              rounded-md 
            border-blue-600/50 border 
              my-10 w-full 
            hover:bg-blue-500/20 
             transition-transform duration-500 ease-out hover:scale-101">
              <FiMail />
              <span className="">01itsgauravpal@gmail.com</span>
            </div>
       </div>
       
    </section>
  )
}
