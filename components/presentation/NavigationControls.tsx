"use client";

import { ChevronLeft, ChevronRight, RotateCcw, Maximize2 } from "lucide-react";
import { slides } from "@/data/slides";

interface NavigationControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  currentIndex: number;
  total: number;
}

export default function NavigationControls({
  onNext,
  onPrev,
  onReset,
  currentIndex,
  total,
}: NavigationControlsProps) {
  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <>
      {/* Top-right: slide title + controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2 select-none">
        <span className="font-inter text-[11px] text-white/30 max-w-[180px] truncate">
          {slides[currentIndex]?.title}
        </span>
        <button
          onClick={handleFullscreen}
          aria-label="Toggle fullscreen"
          className="p-1.5 rounded text-white/30 hover:text-white/70 hover:bg-white/5 transition-colors"
        >
          <Maximize2 size={13} />
        </button>
        <button
          onClick={onReset}
          aria-label="Reset to first slide"
          className="p-1.5 rounded text-white/30 hover:text-white/70 hover:bg-white/5 transition-colors"
        >
          <RotateCcw size={13} />
        </button>
      </div>

      {/* Bottom-left: keyboard hint */}
      <div className="absolute bottom-7 left-4 z-50 select-none">
        <span className="font-inter text-[10px] text-white/20 tracking-wide">
          ← → navigate · F fullscreen · Home · End
        </span>
      </div>

      {/* Left nav button */}
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        disabled={currentIndex === 0}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-50 p-2 rounded-lg border transition-all duration-200 ${
          currentIndex === 0
            ? "opacity-0 pointer-events-none"
            : "opacity-30 hover:opacity-80 border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 text-white"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right nav button */}
      <button
        onClick={onNext}
        aria-label="Next slide"
        disabled={currentIndex === total - 1}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-50 p-2 rounded-lg border transition-all duration-200 ${
          currentIndex === total - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-30 hover:opacity-80 border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 text-white"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
}
