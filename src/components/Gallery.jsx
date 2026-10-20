import { gallery } from "../data/galleryData";

export default function Gallery() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-semibold mb-10 text-center">
          Selected Work
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="mb-6 overflow-hidden group relative break-inside-avoid"
            >
              {item.type === "video" ? (
                <video
                  src={item.image}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.alt || "Selected work"}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}