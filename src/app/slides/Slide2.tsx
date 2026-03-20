import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Slide2() {
  return (
    <div className="relative w-full h-full bg-white text-black overflow-hidden">
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
    </div>
  );
}
