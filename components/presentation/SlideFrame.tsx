"use client";

import { motion } from "framer-motion";
import { slideVariants, slideTransition } from "@/lib/animations";

interface SlideFrameProps {
  children: React.ReactNode;
  direction: number;
  slideKey: number;
}

export default function SlideFrame({ children, direction, slideKey }: SlideFrameProps) {
  return (
    <motion.div
      key={slideKey}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
      className="absolute inset-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}
