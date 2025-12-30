import { projects } from "../data/projectsData"

export default function Projects() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <div key={project.id} className="border border-gray-800 p-6">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.type}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
