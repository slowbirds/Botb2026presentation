import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Slide5() {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      {/* Split layout */}
      <div className="grid grid-cols-2 h-full">
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
            04 — The Space
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
    </div>
  );
}
