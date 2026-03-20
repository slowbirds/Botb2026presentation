import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Slide6() {
  return (
    <div className="relative w-full h-full bg-white text-black overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584184200374-73d7f6c6a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBjb25jcmV0ZSUyMHdhbGx8ZW58MXx8fHwxNzczOTkyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-20">
        <div className="max-w-5xl w-full">
          {/* Label */}
          <div className="text-sm tracking-[0.4em] uppercase opacity-40 mb-16 text-center">
            05 — The Legacy
          </div>

          {/* Main number */}
          <div className="text-center mb-16">
            <div className="text-[15rem] leading-none font-extralight tracking-tighter">
              10
            </div>
            <p className="text-3xl tracking-[0.2em] uppercase mt-4 opacity-60">
              Years of Silence
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="text-5xl mb-4 tracking-tighter">2006</div>
              <p className="text-sm uppercase tracking-widest opacity-60">
                The Beginning
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 tracking-tighter opacity-40">2016</div>
              <p className="text-sm uppercase tracking-widest opacity-40">
                The Silence
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 tracking-tighter">2026</div>
              <p className="text-sm uppercase tracking-widest opacity-60">
                The Return
              </p>
            </div>
          </div>

          {/* Legends */}
          <div className="border-t-2 border-black pt-12">
            <p className="text-2xl leading-relaxed text-center mb-6">
              Built on the foundation laid by Saigon legends
            </p>
            <div className="flex justify-center gap-12 text-4xl tracking-wider">
              <span className="opacity-80">JASE</span>
              <span className="opacity-20">/</span>
              <span className="opacity-80">2STONE</span>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-16 text-center text-sm tracking-[0.3em] uppercase opacity-30">
            The underground never dies. It only hibernates.
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-black opacity-5" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-black opacity-5" />
    </div>
  );
}
