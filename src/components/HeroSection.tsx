import ConfettiButton from "./ConfettiButton";
import { Sparkles, Calendar, Gift } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-100/70 via-purple-50/50 to-slate-50"
      aria-label="Hero section"
    >
      {/* Decorative Pastel Background Elements */}
      <div className="absolute top-6 left-10 text-4xl select-none animate-float-slow opacity-80" aria-hidden="true">
        🎈
      </div>
      <div className="absolute top-12 right-12 text-4xl select-none animate-float-medium opacity-80" aria-hidden="true">
        ✨
      </div>
      <div className="absolute bottom-8 left-16 text-3xl select-none animate-float-medium opacity-70" aria-hidden="true">
        🎊
      </div>
      <div className="absolute bottom-12 right-20 text-4xl select-none animate-float-slow opacity-80" aria-hidden="true">
        🎈
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Date & Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-sky-200 text-sky-800 text-xs md:text-sm font-semibold shadow-xs mb-6">
          <Calendar className="w-4 h-4 text-sky-500" />
          <span>August 28th • Celebration Time</span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>

        {/* Primary Page Title H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
          Happy Birthday,{" "}
          <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
            Divya!
          </span>{" "}
          🥳
        </h1>

        {/* Friendly Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Wishing you a super cheerful day packed with delicious treats, endless smiles, zero overthinking, and awesome memories!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ConfettiButton label="Pop Confetti! 🎉" />
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold shadow-md hover:bg-sky-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Gift className="w-5 h-5" />
            <span>View Memory Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
}
