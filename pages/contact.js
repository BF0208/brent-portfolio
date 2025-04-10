export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto space-y-8 text-black bg-[#f9f9f6]">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-gray-600">Reach out for collaborations, commissions, or just to say hey.</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your name" className="p-3 border border-gray-300 rounded" />
        <input type="email" placeholder="Your email" className="p-3 border border-gray-300 rounded" />
        <textarea placeholder="Message" rows="4" className="p-3 border border-gray-300 rounded" />
        <button type="submit" className="bg-black text-white py-3 rounded hover:bg-neutral-800 transition">
          Send
        </button>
      </form>
    </main>
  );
}