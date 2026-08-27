"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Coffee, Pizza, Plane, Dumbbell, Sparkles, Gift } from "lucide-react";

interface WishItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  accentColor: string;
}

const wishes: WishItem[] = [
  {
    id: 1,
    icon: <Coffee className="w-6 h-6 text-sky-600" />,
    title: "Zero Stress & Calm Mornings 🧘",
    desc: "May your upcoming year be 100% stress-free with smooth mornings and relaxing vibes.",
    tag: "Chill Vibe",
    accentColor: "from-sky-100 to-indigo-100 border-sky-200",
  },
  {
    id: 2,
    icon: <Pizza className="w-6 h-6 text-amber-600" />,
    title: "Endless Delicious Feasts 🍕",
    desc: "Unlimited tasty food items, endless snacks, and never having to worry about what to eat!",
    tag: "Foodie Paradise",
    accentColor: "from-amber-100 to-orange-100 border-amber-200",
  },
  {
    id: 3,
    icon: <Plane className="w-6 h-6 text-purple-600" />,
    title: "Fun Trips & New Adventures ✈️",
    desc: "To scenic getaways, spontaneous road trips, and making unforgettable memories.",
    tag: "Wanderlust",
    accentColor: "from-purple-100 to-pink-100 border-purple-200",
  },
  {
    id: 4,
    icon: <Dumbbell className="w-6 h-6 text-emerald-600" />,
    title: "Good Health & High Energy 🌿",
    desc: "Wishing you vibrant health, sound sleep, and unstoppable positive stamina all year!",
    tag: "Vibrant Energy",
    accentColor: "from-emerald-100 to-teal-100 border-emerald-200",
  },
  {
    id: 5,
    icon: <Gift className="w-6 h-6 text-rose-500" />,
    title: "All the Surprises You Deserve 🎁",
    desc: "May every month bring pleasant surprises, unexpected gifts, and endless joy.",
    tag: "Treat Yourself",
    accentColor: "from-rose-100 to-orange-100 border-rose-200",
  },
  {
    id: 6,
    icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
    title: "Non-Stop Smiles & Success 🌟",
    desc: "Wishing you victory in everything you do, surrounded by amazing friends and family.",
    tag: "Bright Future",
    accentColor: "from-yellow-100 to-amber-100 border-yellow-200",
  },
];

export default function BirthdayWishesSection() {
  const [bloomed, setBloomed] = useState<Record<number, boolean>>({});

  const handleWishTap = (id: number) => {
    setBloomed((prev) => ({ ...prev, [id]: true }));
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#a855f7", "#fbbf24"],
    });
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50 relative" aria-label="Birthday Wishes">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Birthday Wish Card Deck
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Special Birthday Wishes 🎈
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
            Tap any wish card below to send extra sparkle! ✨
          </p>
        </div>

        {/* Wish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((item) => {
            const isUnlocked = bloomed[item.id];
            return (
              <div
                key={item.id}
                onClick={() => handleWishTap(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleWishTap(item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Birthday wish: ${item.title}`}
                className={`relative rounded-3xl p-6 bg-gradient-to-br ${item.accentColor} border shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-sky-400 focus-visible:outline-none`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/80 text-slate-700 border border-white/60">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-900/5">
                  <span className="text-slate-600">
                    {isUnlocked ? "✨ Wish Activated!" : "Tap to activate ✨"}
                  </span>
                  {isUnlocked && <Sparkles className="w-4 h-4 text-amber-500 animate-bounce" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
