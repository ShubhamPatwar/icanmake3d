import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-white/10">
        <h1 className="text-3xl font-bold">icanmake3d</h1>
        <p className="text-white/60">3D Models Marketplace</p>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-4 rounded-xl">
          <h2 className="font-semibold">Your first model</h2>
          <p className="text-sm text-white/60">Cyber Car</p>
          <button className="mt-3 px-4 py-2 bg-white text-black rounded">
            Buy
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
