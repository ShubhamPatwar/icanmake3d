import { GLBModelViewer } from "@/components/GLBModelViewer";

export default function MustangShowroom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Ford Mustang
          </h1>
          <p className="text-muted-foreground text-lg">
            Interactive 3D Model Viewer
          </p>
        </div>

        {/* 3D Viewer */}
        <div className="max-w-6xl mx-auto mb-12">
          <GLBModelViewer
            modelUrl="/models/mustang-car1.glb"
            height="600px"
            autoRotate={true}
            showControls={true}
          />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-6 rounded-lg backdrop-blur-sm bg-slate-900/50 border border-slate-800">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Controls</h3>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Left Click + Drag to Rotate</li>
              <li>• Right Click + Drag to Pan</li>
              <li>• Scroll to Zoom In/Out</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-lg backdrop-blur-sm bg-slate-900/50 border border-slate-800">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Model Details</h3>
            <p className="text-sm text-slate-400">
              High-quality 3D model with realistic lighting, shadows, and materials. 
              Fully interactive viewer experience.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg backdrop-blur-sm bg-slate-900/50 border border-slate-800">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Features</h3>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Auto-rotate Animation</li>
              <li>• Real-time Shadows</li>
              <li>• 360° Viewing Angle</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
