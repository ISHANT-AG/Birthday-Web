import { Sparkles, UtensilsCrossed, ShieldCheck, Laugh, SunMedium } from "lucide-react";

interface ReasonCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  colorBg: string;
  colorBorder: string;
  colorIcon: string;
}

const reasons: ReasonCard[] = [
  {
    icon: <SunMedium className="w-6 h-6" />,
    title: "Tension-Free Expert 🧘",
    description: "Even when life gets chaotic, reminding everyone to chill out ('itni tension mat lia kar')!",
    badge: "Good Vibes",
    colorBg: "bg-sky-50/80",
    colorBorder: "border-sky-200",
    colorIcon: "bg-sky-100 text-sky-600",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Official Snack Supplier 🍕",
    description: "Always coming through with delicious food items and sharing treats with friends!",
    badge: "Foodie Legend",
    colorBg: "bg-peach-50/80 bg-amber-50/60",
    colorBorder: "border-amber-200",
    colorIcon: "bg-amber-100 text-amber-600",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Super Reliable Friend 🤝",
    description: "A genuine, loyal friend who always has your back no matter what.",
    badge: "Rock Solid",
    colorBg: "bg-mint-50/80 bg-emerald-50/60",
    colorBorder: "border-emerald-200",
    colorIcon: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: <Laugh className="w-6 h-6" />,
    title: "Master of Fun & Laughter 😄",
    description: "Turning boring moments into hilarious memories with non-stop jokes and smiles.",
    badge: "Pure Fun",
    colorBg: "bg-purple-50/80",
    colorBorder: "border-purple-200",
    colorIcon: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Unbeatable Vibe ❇️",
    description: "Bringing warmth, energy, and good cheer everywhere you go!",
    badge: "Bright Star",
    colorBg: "bg-yellow-50/80",
    colorBorder: "border-yellow-200",
    colorIcon: "bg-yellow-100 text-yellow-600",
  },
];

export default function ReasonsSection() {
  return (
    <section className="py-16 md:py-20 bg-white relative" aria-label="Reasons you're an amazing friend">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Friendship Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            5 Reasons You’re an Amazing Friend ✨
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
            A few awesome things that make Divya one of a kind!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 ${reason.colorBg} border ${reason.colorBorder} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${reason.colorIcon} flex items-center justify-center shadow-xs`}>
                    {reason.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-slate-700 border border-slate-200/60 shadow-2xs">
                    {reason.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Reason #{idx + 1}</span>
                <span>✨ Friend Approved</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
