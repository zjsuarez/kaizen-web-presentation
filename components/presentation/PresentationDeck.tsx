"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import SlideFrame from "./SlideFrame";
import ProgressBar from "./ProgressBar";
import NavigationControls from "./NavigationControls";
import { slides } from "@/data/slides";

const DESIGN_W = 1280;
const DESIGN_H = 720;

export default function PresentationDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const sx = window.innerWidth / DESIGN_W;
      const sy = window.innerHeight / DESIGN_H;
      setScale(Math.min(sx, sy));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          goPrev();
          break;
        case "f":
        case "F":
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, goToSlide]);

  const CurrentSlide = slides[currentIndex].component;

  return (
    <div className="w-screen h-screen bg-onyx overflow-hidden flex items-center justify-center">
      <div
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideFrame key={currentIndex} direction={direction} slideKey={currentIndex}>
            <CurrentSlide />
          </SlideFrame>
        </AnimatePresence>

        <ProgressBar
          current={currentIndex}
          total={slides.length}
          onNavigate={goToSlide}
        />
        <NavigationControls
          onNext={goNext}
          onPrev={goPrev}
          onReset={() => goToSlide(0)}
          currentIndex={currentIndex}
          total={slides.length}
        />
      </div>
    </div>
  );
}
