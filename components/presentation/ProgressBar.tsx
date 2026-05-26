"use client";

import { motion } from "framer-motion";
import { slides } from "@/data/slides";

interface ProgressBarProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

export default function ProgressBar({ current, total, onNavigate }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;
  const section = slides[current]?.section ?? "";

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 select-none">
      {/* Section + counter */}
      <div className="flex items-center justify-between px-4 pb-1">
        <span className="font-inter text-[10px] text-white/30 uppercase tracking-widest">
          {section}
        </span>
        <div className="flex items-center gap-2">
          {/* Dot navigation */}
          <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                aria-label={`Go to slide ${i + 1}: ${slides[i]?.title}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 bg-crayola-blue"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <span className="font-inter text-[10px] text-white/30 tabular-nums w-10 text-right">
            {current + 1} / {total}
          </span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-px bg-white/[0.06]">
        <motion.div
          className="h-full bg-crayola-blue"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
