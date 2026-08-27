import { Smile, MessageSquareHeart } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50" aria-label="Birthday Message">
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative glass-card rounded-3xl p-8 sm:p-10 border border-sky-100 shadow-md bg-gradient-to-br from-white via-sky-50/30 to-purple-50/40 text-center">
          {/* Header Badge */}
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Smile className="w-6 h-6" />
          </div>

          <h2 className="text-xs uppercase tracking-widest font-bold text-sky-600 mb-2">
            A Friendly Birthday Note ✉️
          </h2>

          {/* Main Requested Message */}
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
            “Happy Birthday, divya”
          </p>

          {/* Supporting Requested Message */}
          <div className="inline-block bg-white/90 px-6 py-4 rounded-2xl border border-purple-100 shadow-xs my-2">
            <p className="text-lg sm:text-xl font-semibold text-purple-700 leading-snug">
              “itni tension mat lia kar 🧘✨”
            </p>
          </div>

          {/* Friendly Context Text */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6 max-w-xl mx-auto">
            Today is all about taking a chill pill, relaxing, celebrating your special day, and enjoying every single moment with zero stress!
          </p>
        </div>
      </div>
    </section>
  );
}
