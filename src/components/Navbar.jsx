export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-white text-lg tracking-widest uppercase">
      Yash Parmar
    </h1>

    <ul className="hidden md:flex gap-10 text-sm tracking-wider text-gray-300">
      {["About", "Work", "Services", "Contact"].map(item => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-white after:block after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>

  )
}
