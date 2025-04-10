export default function ArchiveModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center px-6">
      <div className="bg-white text-black w-full max-w-5xl rounded-xl p-6 relative grid grid-cols-1 md:grid-cols-2 gap-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-sm text-gray-500 hover:text-black">
          Close ×
        </button>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.details}</p>
          </div>
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">Related Images</h4>
            <div className="flex overflow-x-auto gap-2">
              {project.related.map((src, i) => (
                <img key={i} src={src} alt="" className="w-24 h-24 object-cover rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}