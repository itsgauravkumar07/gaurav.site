import { FiMail } from "react-icons/fi"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>

        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
          bg-gradient-to-r from-indigo-500 to-purple-500
          hover:scale-105 transition"
        >
          <FiMail />
          Email Me
        </a>
      </Reveal>
    </section>
  )
}
