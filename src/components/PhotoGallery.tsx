"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxModal, { GalleryPhoto } from "./LightboxModal";
import { Camera, Sparkles } from "lucide-react";

const photos: GalleryPhoto[] = [
  {
    src: "/images/divya-1.jpg",
    alt: "Divya photo 1 - Happy birthday memory",
    caption: "Divya bringing positive vibes and bright smiles! ✨",
  },
  {
    src: "/images/divya-2.jpg",
    alt: "Divya photo 2 - Fun memory photo",
    caption: "Capturing fun moments and great laughter 🎉",
  },
  {
    src: "/images/divya-3.jpg",
    alt: "Divya photo 3 - Friendly portrait photo",
    caption: "Spreading cheerful energy everywhere! 🌟",
  },
  {
    src: "/images/divya-4.jpg",
    alt: "Divya photo 4 - Celebratory picture",
    caption: "Making every moment extra fun and memorable 📸",
  },
  {
    src: "/images/divya-5.jpg",
    alt: "Divya photo 5 - Great memory snapshot",
    caption: "Always ready with good food & great vibes 🍕",
  },
  {
    src: "/images/divya-6.jpg",
    alt: "Divya photo 6 - Cheerful birthday photo",
    caption: "Celebrating a wonderful friend on her special day! 🥳",
  },
];

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-slate-50 relative" aria-label="Photo Gallery">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" /> Memory Gallery • 6 Moments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Snapshot Gallery 📸
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Click any photo to view full size!
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open photo ${index + 1}: ${photo.caption}`}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white p-3 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-sky-400 focus-visible:outline-none"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Subtle Hover Gradient & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white flex items-center justify-between w-full">
                    <span className="text-xs font-semibold tracking-wide">
                      View Photo ✨
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
                  </div>
                </div>
              </div>

              {/* Card Caption Below */}
              <div className="p-3 text-center">
                <p className="text-xs sm:text-sm font-medium text-slate-700 truncate">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        photos={photos}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelect={(idx) => setSelectedIndex(idx)}
      />
    </section>
  );
}
