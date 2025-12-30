export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">
          Yash Parmar
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#work" className="hover:text-white">Work</a></li>
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
