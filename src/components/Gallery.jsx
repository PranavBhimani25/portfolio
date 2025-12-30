import { gallery } from "../data/galleryData"

export default function Gallery() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold mb-10 text-center">
          Selected Work
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
        {gallery.map(item => (
          <div
            key={item.id}
            className="mb-6 overflow-hidden group relative"
          >
            <img
              src={item.image}
              alt=""
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </div>
          ))}
        </div>

      </div>
    </section>
  )
}
