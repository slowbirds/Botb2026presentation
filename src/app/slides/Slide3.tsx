export function Slide3() {
  return (
    <div className="relative w-full h-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Label */}
        <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-12">
          02 — The Sound
        </div>

        {/* Main content in grid */}
        <div className="grid grid-cols-2 gap-20">
          {/* Left column */}
          <div>
            <h2 className="text-7xl leading-none mb-8 tracking-tighter">
              Experimental
              <br />
              Heavy Bass
            </h2>
            <p className="text-lg opacity-60 tracking-wide">
              (Non-Dubstep)
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="border-l-2 border-white/20 pl-6">
              <div className="text-sm uppercase tracking-widest opacity-40 mb-2">
                Characteristics
              </div>
              <p className="text-xl leading-relaxed">
                Deep, atmospheric, and industrial.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <div className="text-sm uppercase tracking-widest opacity-40 mb-2">
                Approach
              </div>
              <p className="text-xl leading-relaxed">
                Frequencies that move through the body, not just the ears.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <div className="text-sm uppercase tracking-widest opacity-40 mb-2">
                Intention
              </div>
              <p className="text-xl leading-relaxed">
                Twisted. Distorted. Uncompromising.
              </p>
            </div>
          </div>
        </div>

        {/* Waveform visualization */}
        <div className="mt-20 flex items-center gap-1 h-32">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-white/20"
              style={{
                height: `${Math.abs(Math.sin(i * 0.3) * 100) + 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
