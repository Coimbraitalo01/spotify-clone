const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Spotify Clone</h1>
      <ul>
        <li className="mb-4 hover:text-green-400 cursor-pointer">Home</li>
        <li className="mb-4 hover:text-green-400 cursor-pointer">Search</li>
        <li className="mb-4 hover:text-green-400 cursor-pointer">Your Library</li>
      </ul>
    </aside>
  )
}

export default Sidebar
