export default function ProjectCard({ title, description }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}