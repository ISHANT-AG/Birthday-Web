"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export default function LightboxModal({
  photos,
  currentIndex,
  onClose,
  onSelect,
}: LightboxModalProps) {
  const isOpen = currentIndex !== null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onSelect((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onSelect((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 transition-opacity duration-300"
    >
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-sky-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:ring-2 focus:ring-sky-400"
          aria-label="Close photo modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Image Container */}
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            width={900}
            height={1600}
            className="max-h-[75vh] w-auto object-contain rounded-lg transition-transform duration-300"
            priority
          />
        </div>

        {/* Caption & Navigation Controls */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2">
          <p className="text-sm font-medium text-slate-200 text-center sm:text-left">
            {currentPhoto.caption}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:ring-2 focus:ring-sky-400"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold tracking-wider text-slate-400">
              {currentIndex + 1} / {photos.length}
            </span>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:ring-2 focus:ring-sky-400"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
