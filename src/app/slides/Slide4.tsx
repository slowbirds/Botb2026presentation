import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Slide4() {
  return (
    <div className="relative w-full h-full bg-white text-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764170347100-36f930110fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdhdmUlMjBwYXR0ZXJufGVufDF8fHx8MTc3Mzk5MjkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover grayscale mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-20">
        {/* Top section */}
        <div>
          <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-12">
            03 — Visual Architect
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
    </div>
  );
}
