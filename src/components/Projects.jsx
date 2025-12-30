import { projects } from "../data/projectsData"

export default function Projects() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(p => (
            <div
              key={p.id}
              className="border border-gray-800 p-8 hover:border-white transition"
            >
              <h3 className="text-xl mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.type}</p>
              <p className="text-gray-500 text-sm">{p.tools}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
