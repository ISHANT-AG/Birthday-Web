"use client";

import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";

interface ConfettiButtonProps {
  label?: string;
  className?: string;
}

export default function ConfettiButton({
  label = "Celebrate! 🎉",
  className = "",
}: ConfettiButtonProps) {
  const triggerConfetti = () => {
    // Launch festive confetti from left and right
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#c084fc", "#fbbf24", "#4ade80", "#f97316"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <button
      onClick={triggerConfetti}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold shadow-md hover:shadow-lg border border-sky-100 hover:bg-sky-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
      aria-label="Trigger festive confetti"
    >
      <PartyPopper className="w-5 h-5 text-amber-500" />
      <span>{label}</span>
    </button>
  );
}
