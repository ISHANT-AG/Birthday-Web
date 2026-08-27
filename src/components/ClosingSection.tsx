import { Utensils, Sparkles, Smile } from "lucide-react";
import ConfettiButton from "./ConfettiButton";

export default function ClosingSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-sky-50/50 to-purple-100/40 relative overflow-hidden" aria-label="Closing message">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-200/80 shadow-lg bg-white/90">
          
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Utensils className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Foodie Special Mention 🍕
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
            Final Birthday Note 📝
          </h2>

          {/* Requested Closing Message */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-6 my-4 shadow-xs">
            <p className="text-xl sm:text-2xl font-bold text-amber-900 leading-snug">
              “thanks mujhe khane ka item dene ke lie” 🍕🍫😋
            </p>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mt-4 mb-8">
            Hope your birthday is filled with great food, awesome company, unlimited laughter, and lots of wonderful memories ahead!
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm sm:text-base">
              <Smile className="w-5 h-5 text-sky-500" />
              <span>With best wishes, — Ishant</span>
            </div>

            <ConfettiButton label="One Last Confetti Burst! 🎉" />
          </div>

        </div>
      </div>
    </section>
  );
}
