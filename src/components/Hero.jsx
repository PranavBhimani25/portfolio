import { useEffect, useState } from "react"
import { heroImages } from "../data/heroImages"

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      )
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Travel & Fashion Photographer
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Exploring cultures • Defining style
          </p>
          <a
            href="#work"
            className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
