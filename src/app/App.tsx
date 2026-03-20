import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture with grain */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1724676808301-b6341c710f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGJydXRhbGlzdCUyMHRleHR1cmV8ZW58MXx8fHwxNzczOTkyOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center py-20">
          {/* Main title */}
          <h1 className="text-[8rem] leading-none tracking-tighter mb-6 mix-blend-difference">
            BASE OF
            <br />
            THE BASS
          </h1>

          {/* Year */}
          <div className="text-[12rem] leading-none tracking-tighter opacity-80 font-extralight">
            2026
          </div>

          {/* Subtitle */}
          <div className="mt-12 text-2xl tracking-[0.3em] uppercase font-light">
            CORE
          </div>

          {/* Tagline */}
          <p className="mt-16 text-lg tracking-widest uppercase opacity-60 max-w-3xl mx-auto">
            The Resurrection of Saigon's Underground Sonic Ritual
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-px h-16 bg-white" />
          <div className="text-xs tracking-widest uppercase">Scroll</div>
        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        {/* Large image on left */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1664891177697-9d98b79b75fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzM5OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Content on right */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center px-20">
          <div className="max-w-xl">
            {/* Label */}
            <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-8">
              01 — Philosophy
            </div>

            {/* Title */}
            <h2 className="text-6xl leading-tight mb-12 tracking-tight">
              Physicality
              <br />
              <span className="opacity-40">&</span>
              <br />
              Anti-Uniformity
            </h2>

            {/* Quote */}
            <div className="relative pl-8 border-l-2 border-black">
              <p className="text-xl leading-relaxed mb-6">
                Beyond the commodity.
              </p>
              <p className="text-xl leading-relaxed opacity-80">
                A return to the raw vibration that cancels out the cognitive noise.
              </p>
            </div>

            {/* Bottom text */}
            <div className="mt-16 text-sm tracking-widest uppercase opacity-30">
              The body as receiver
            </div>
          </div>
        </div>

        {/* Decorative glitch element */}
        <div className="absolute top-1/3 left-1/2 w-1 h-32 bg-black transform -translate-x-1/2 -skew-x-12" />
      </section>

      {/* Section 3: The Sound */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20">
          {/* Label */}
          <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-12">
            02 — The Sound
          </div>

          {/* Main content in grid */}
          <div className="grid grid-cols-2 gap-20 mb-20">
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
          <div className="flex items-center gap-1 h-32">
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
      </section>

      {/* Section 4: The Lineup */}
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1724676808301-b6341c710f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGJydXRhbGlzdCUyMHRleHR1cmV8ZW58MXx8fHwxNzczOTkyOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center p-20 py-32">
          <div className="max-w-6xl mx-auto w-full">
            {/* Label */}
            <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-16">
              03 — The Lineup
            </div>

            {/* Intro */}
            <div className="mb-20">
              <h2 className="text-6xl leading-tight mb-8 tracking-tight">
                Four DJs.
                <br />
                One Night.
              </h2>
              <p className="text-xl opacity-60 max-w-2xl">
                A curated selection spanning generations and styles, united by a singular vision.
              </p>
            </div>

            {/* DJ Slowbirds - Featured */}
            <div className="border-t-4 border-black pt-12 mb-16">
              <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2">
                  <div className="text-sm uppercase tracking-widest opacity-40 mb-4">
                    Resident / Curator
                  </div>
                  <h3 className="text-7xl leading-none tracking-tighter mb-6">
                    DJ SLOWBIRDS
                  </h3>
                  <p className="text-2xl leading-relaxed max-w-xl">
                    The architect behind Base of the Bass. A genre-defying journey through dub-rooted heavy bass that transcends categorization.
                  </p>
                </div>
                <div className="flex items-end">
                  <div className="text-sm uppercase tracking-widest opacity-30">
                    All genres
                    <br />
                    Dub foundation
                    <br />
                    Heavy bass obsession
                  </div>
                </div>
              </div>
            </div>

            {/* Guest DJs Grid */}
            <div className="grid grid-cols-2 gap-12">
              {/* BOTB Generation */}
              <div className="border-l-2 border-black pl-8">
                <div className="text-sm uppercase tracking-widest opacity-40 mb-4">
                  BOTB Generation
                </div>
                <h4 className="text-4xl leading-tight tracking-tight mb-4">
                  Legacy But
                  <br />
                  Still Arrive
                </h4>
                <p className="text-base leading-relaxed opacity-60 mb-6">
                  The original movement lives on. One DJ who was there from the beginning, carrying the torch forward.
                </p>
                <div className="text-xs uppercase tracking-wider opacity-30">
                  1 Artist • TBA
                </div>
              </div>

              {/* Gen-Z New Generation */}
              <div className="border-l-2 border-black pl-8">
                <div className="text-sm uppercase tracking-widest opacity-40 mb-4">
                  Gen-Z, New Generation
                </div>
                <h4 className="text-4xl leading-tight tracking-tight mb-4">
                  2026's
                  <br />
                  Sonic Rebels
                </h4>
                <p className="text-base leading-relaxed opacity-60 mb-6">
                  The young voices shaping Saigon's underground today. Two DJs who understand the frequency.
                </p>
                <div className="text-xs uppercase tracking-wider opacity-30">
                  2 Artists • TBA
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-20 text-center text-sm tracking-[0.3em] uppercase opacity-30">
              Lineup reveals soon
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-20 w-px h-32 bg-black opacity-10" />
        <div className="absolute bottom-1/4 left-20 w-32 h-px bg-black opacity-10" />
      </section>

      {/* Section 5: VJ Peachman */}
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764170347100-36f930110fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdhdmUlMjBwYXR0ZXJufGVufDF8fHx8MTc3Mzk5MjkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover grayscale mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-20 py-32">
          {/* Top section */}
          <div>
            <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-12">
              04 — Visual Architect
            </div>

            <h2 className="text-8xl leading-none tracking-tighter mb-6">
              VJ
              <br />
              PEACHMAN
            </h2>

            <p className="text-2xl tracking-wide max-w-2xl">
              High-Dimensional Interaction
            </p>
          </div>

          {/* Middle section */}
          <div className="max-w-3xl">
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-6xl mb-2">↔</div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Sensors
                </p>
              </div>
              <div>
                <div className="text-6xl mb-2">◉</div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Audio Data
                </p>
              </div>
              <div>
                <div className="text-6xl mb-2">⟡</div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Movement
                </p>
              </div>
            </div>

            <div className="border-l-4 border-black pl-8 py-4">
              <p className="text-2xl leading-relaxed mb-4">
                Real-time 3D object generation driven by audience movement and sonic density.
              </p>
              <p className="text-xl leading-relaxed opacity-60">
                The room as a living organism.
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-sm tracking-[0.3em] uppercase opacity-30">
            Generative / Reactive / Immersive
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-20 w-px h-40 bg-black opacity-20 transform rotate-12" />
        <div className="absolute bottom-1/4 left-20 w-40 h-px bg-black opacity-20 transform -rotate-12" />
      </section>

      {/* Section 6: The Space */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Split layout */}
        <div className="grid grid-cols-2 min-h-screen">
          {/* Left: Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756969918552-00ec1d19abef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBidWlsZGluZyUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzczOTkyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
              className="w-full h-full object-cover grayscale"
            />
            
            {/* Overlay text on image */}
            <div className="absolute inset-0 flex items-end p-12">
              <div className="text-9xl font-extralight tracking-tighter opacity-20 mix-blend-difference">
                UMBALA
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center px-20 py-12">
            <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-12">
              05 — The Space
            </div>

            <h2 className="text-7xl leading-none tracking-tighter mb-12">
              The Concrete
              <br />
              Bunker
            </h2>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white mt-3 flex-shrink-0" />
                <div>
                  <p className="text-xl leading-relaxed">
                    Windowless. Isolated. Industrial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white mt-3 flex-shrink-0" />
                <div>
                  <p className="text-xl leading-relaxed">
                    Located in the heart of Thao Dien, yet completely removed from the outside world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white mt-3 flex-shrink-0" />
                <div>
                  <p className="text-xl leading-relaxed">
                    A shelter designed for sonic density and collective immersion.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm tracking-widest uppercase opacity-40">
                Capacity: Intimate / Sound System: Custom Heavy Bass Rig
              </p>
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
      </section>

      {/* Section 7: The Legacy */}
      <section className="relative min-h-screen bg-white text-black overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1584184200374-73d7f6c6a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBjb25jcmV0ZSUyMHdhbGx8ZW58MXx8fHwxNzczOTkyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center p-20 py-32">
          <div className="max-w-5xl w-full">
            {/* Label */}
            <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-16 text-center">
              06 — The Legacy
            </div>

            {/* Main stats */}
            <div className="grid grid-cols-2 gap-16 mb-20">
              <div className="text-center">
                <div className="text-[12rem] leading-none font-extralight tracking-tighter">
                  30
                </div>
                <p className="text-2xl tracking-[0.2em] uppercase mt-4 opacity-60">
                  Events
                </p>
              </div>
              <div className="text-center">
                <div className="text-[12rem] leading-none font-extralight tracking-tighter">
                  8
                </div>
                <p className="text-2xl tracking-[0.2em] uppercase mt-4 opacity-60">
                  Years of Silence
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <div className="text-5xl mb-4 tracking-tighter">2012–2018</div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  The Era
                </p>
                <p className="text-xs mt-2 opacity-40">
                  30+ events that defined<br />Saigon's underground
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4 tracking-tighter opacity-40">2018–2026</div>
                <p className="text-sm uppercase tracking-widest opacity-40">
                  The Silence
                </p>
                <p className="text-xs mt-2 opacity-30">
                  Hibernation
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4 tracking-tighter">2026</div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  The Return
                </p>
                <p className="text-xs mt-2 opacity-40">
                  Resurrection
                </p>
              </div>
            </div>

            {/* Venues */}
            <div className="border-t-2 border-black pt-12 mb-12">
              <p className="text-2xl leading-relaxed text-center mb-8">
                The venues that held the movement
              </p>
              <div className="flex justify-center gap-12 text-5xl tracking-wider">
                <span className="opacity-80">THE CUBE</span>
                <span className="opacity-20">/</span>
                <span className="opacity-80">PIU PIU</span>
              </div>
              <p className="text-center text-sm uppercase tracking-widest opacity-40 mt-8">
                Saigon Central • 2012–2018
              </p>
            </div>

            {/* Bottom text */}
            <div className="mt-16 text-center text-sm tracking-[0.3em] uppercase opacity-30">
              Where a generation found their frequency
            </div>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-black opacity-5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-black opacity-5" />
      </section>

      {/* Section 8: CTA */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center py-20">
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
          <div className="space-y-4 mb-20">
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
          <div className="text-xs tracking-[0.5em] uppercase opacity-30">
            The bass doesn't ask permission
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/10" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/10" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/10" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/10" />
      </section>
    </div>
  );
}