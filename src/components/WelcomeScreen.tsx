"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, PartyPopper } from "lucide-react";

export default function WelcomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCelebrate = () => {
    setIsOpen(true);
    // Fire festive confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#a855f7", "#fbbf24", "#34d399", "#f97316"],
    });
  };

  if (isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Welcome banner"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 transition-all duration-500"
    >
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl border border-sky-100 transform transition-all animate-bounce-subtle">
        <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <PartyPopper className="w-8 h-8 animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Special Day • Aug 28
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Hey Divya! 🎉
        </h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Ready for a small birthday surprise filled with fun memories, laughs, and good vibes?
        </p>

        <button
          onClick={handleCelebrate}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-sky-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>Tap to Celebrate! 🎉</span>
        </button>
      </div>
    </div>
  );
}
