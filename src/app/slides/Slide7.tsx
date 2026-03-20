export function Slide7() {
  return (
    <div className="relative w-full h-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Animated grain overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, black 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main CTA */}
        <div className="mb-20">
          <h2 className="text-[10rem] leading-none tracking-tighter mb-8 mix-blend-difference">
            NEUTRALIZE
            <br />
            THE WORLD
          </h2>
          
          <div className="w-32 h-px bg-white/40 mx-auto my-12" />
          
          <p className="text-4xl tracking-[0.2em] uppercase font-light">
            Join the Core
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-16 max-w-2xl mx-auto mb-20">
          <div className="text-left border-l-2 border-white/20 pl-6">
            <div className="text-sm uppercase tracking-widest opacity-40 mb-3">
              Date
            </div>
            <p className="text-2xl tracking-wide">
              TBA 2026
            </p>
          </div>

          <div className="text-left border-l-2 border-white/20 pl-6">
            <div className="text-sm uppercase tracking-widest opacity-40 mb-3">
              Location
            </div>
            <p className="text-2xl tracking-wide">
              Umbala, Thao Dien
            </p>
          </div>
        </div>

        {/* Social/Contact */}
        <div className="space-y-4">
          <p className="text-sm tracking-[0.4em] uppercase opacity-60">
            For updates and access
          </p>
          <div className="flex justify-center gap-8 text-lg tracking-widest">
            <a href="#" className="hover:opacity-60 transition-opacity underline">
              INSTAGRAM
            </a>
            <span className="opacity-20">/</span>
            <a href="#" className="hover:opacity-60 transition-opacity underline">
              EMAIL
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs tracking-[0.5em] uppercase opacity-30">
          The bass doesn't ask permission
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/10" />
    </div>
  );
}
