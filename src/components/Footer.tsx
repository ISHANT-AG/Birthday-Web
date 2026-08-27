export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800" aria-label="Site footer">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Festive Banner Icons (NO HEARTS) */}
        <div className="flex items-center justify-center gap-3 text-xl mb-4 opacity-80" aria-hidden="true">
          <span>🎈</span>
          <span>🌸</span>
          <span>🎂</span>
          <span>🌟</span>
          <span>🎁</span>
          <span>🎈</span>
        </div>

        <p className="text-sm sm:text-base font-semibold text-slate-200 mb-2">
          Celebrating Divya’s Birthday • August 28th ✨
        </p>

        <p className="text-xs text-slate-400">
          Created with warm friendship wishes, fun memories & good vibes 🎉
        </p>
      </div>
    </footer>
  );
}
