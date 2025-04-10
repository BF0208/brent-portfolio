import { useState } from 'react'
import ArchiveModal from '../components/ArchiveModal'
import projects from '../data/projects'

export default function Home() {
  const [active, setActive] = useState(null)

  return (
    <main className="min-h-screen px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold uppercase">Brent Ferguson</h1>
        <p className="text-sm text-gray-500">Visual Designer / Photographer / DJ</p>
      </header>

      <section className="space-y-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="cursor-pointer group"
            onClick={() => setActive(p)}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.description}</p>
          </div>
        ))}
      </section>

      {active && <ArchiveModal project={active} onClose={() => setActive(null)} />}
    </main>
  )
}