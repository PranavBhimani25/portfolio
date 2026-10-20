export default function About() {
  const collaborations = [
    {
      name: "House of Brahma",
      category: "Fashion & Creative Direction",
      url: "https://www.instagram.com/houseofbrahma/reels/",
      handle: "@houseofbrahma",
    },
    {
      name: "Thiira Cafe",
      category: "Cafe & Lifestyle",
      url: "https://www.instagram.com/thiira_cafe/",
      handle: "@thiira_cafe",
    },
    {
      name: "Rude Cult",
      category: "Fashion & Streetwear",
      url: "https://www.instagram.com/rude.cult/",
      handle: "@rude.cult",
    },
  ];

  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-full md:w-1/3">
            <img
              src="/images/WhatsApp Image 2026-10-21 at 2.07.41 AM.jpeg"
              alt="Yash Parmar"
              className="w-full h-[420px] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-semibold mb-6">About</h2>

            <p className="text-gray-400 leading-relaxed">
              I'm Yash Parmar, a creative director driven by ideas,
              visual storytelling, and the art of turning concepts into
              compelling visual experiences. My work explores the
              intersection of culture, fashion, and emotion, creating
              visuals that feel authentic, bold, and timeless.
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              From developing concepts to shaping the mood, style, and
              overall direction of a project, I enjoy bringing ideas to
              life with a thoughtful, cinematic approach. Inspired by
              people, places, and everyday moments, I aim to create
              visual stories that connect with audiences and leave a
              lasting impression.
            </p>
          </div>
        </div>

        {/* Collaborations */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
              These are the stories I've been part of since day one. 
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold">
              These are the stories I've been part of since day one. 
              With Them Since Day One 
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {collaborations.map((brand) => (
              <a
                key={brand.handle}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/15 p-7 min-h-48 flex flex-col justify-between transition duration-300 hover:border-white/60 hover:bg-white/[0.04]"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-3">
                    {brand.handle}
                  </p>

                  <h4 className="text-xl font-medium tracking-wide group-hover:text-gray-300 transition">
                    {brand.name}
                  </h4>

                  <p className="text-sm text-gray-400 mt-3">
                    {brand.category}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <span className="text-xs uppercase tracking-widest text-gray-400">
                    View Instagram
                  </span>
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}