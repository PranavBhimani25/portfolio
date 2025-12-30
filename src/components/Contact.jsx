import { FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl uppercase tracking-widest mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s work together on your next project.
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:parmar.yashhh18@email.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/yaaashh.18?igsh=MTkwenpvbmE4eWgwbw==" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  )
}
