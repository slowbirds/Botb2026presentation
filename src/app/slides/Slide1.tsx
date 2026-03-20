import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Slide1() {
  return (
    <div className="relative w-full h-full bg-black text-white flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
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

        {/* Bottom divider */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-px h-24 bg-white/20" />
      </div>
    </div>
  );
}
