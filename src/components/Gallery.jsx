import { gallery } from "../data/galleryData"

export default function Gallery() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold mb-10 text-center">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map(item => (
            <div key={item.id} className="overflow-hidden group">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
