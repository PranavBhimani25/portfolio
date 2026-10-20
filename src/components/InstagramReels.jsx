const reels = [
  "CzLu5kiIdas",
  "CyGSny5ynCG",
  "CzEC7RTIjdI",
  "CzGlTEPIVIP",
  "C992yGTos0q",
  "C81G8FGBRUg",
  "C_NallHoy16",
  "DDPGiwYy6Ii",
  "DDcBzkcSuZp",
  "DEryNd2oS51",
  "DJUWOmJtplL",
  "DJ6tiWuvx9N",
  "DJRmroivuU_",
  "DH5eoKco3Fv",
  "DKmixbSt_8d",
  "DKZgKWhvhPd",
];

export default function InstagramReels() {
  return (
    <section
      id="instagram-reels"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
            Behind the 
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold">
                Vision 
            </h2>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              FUN PROJECT
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {reels.map((id, index) => (
            <a
              key={id}
              href={`https://www.instagram.com/reel/${id}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch selected Instagram Reel ${index + 1}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10"
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/`}
                title={`Instagram Reel ${index + 1}`}
                loading="lazy"
                className="pointer-events-none absolute left-1/2 top-0 h-[calc(100%+80px)] w-[calc(100%+24px)] -translate-x-1/2 border-0"
                tabIndex={-1}
                aria-hidden="true"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-3 py-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <span className="text-xs uppercase tracking-widest">
                  Watch Reel
                </span>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/houseofbrahma/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
          >
            Explore on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}