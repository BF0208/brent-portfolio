import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: 'Lookbook Campaign', description: 'Studio photography and layout' },
  { title: 'Brand Identity', description: 'Logo and packaging system' },
  { title: 'Live Mix Recording', description: 'Ambient house set, Fall 2024' },
]

export default function Work() {
  return (
    <main className="min-h-screen px-8 py-24 space-y-12">
      <h1 className="text-4xl font-bold text-center">Work</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} />
        ))}
      </section>
    </main>
  )
}