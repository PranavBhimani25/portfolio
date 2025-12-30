import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-lg tracking-widest uppercase">
          Yash Parmar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wider text-gray-300">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative hover:text-white after:block after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-10 text-gray-300 text-sm tracking-widest uppercase">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
