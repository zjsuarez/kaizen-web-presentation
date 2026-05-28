"use client";

import { motion } from "framer-motion";
import KaizenLogo from "@/components/ui/KaizenLogo";
import { staggerContainer, staggerItem, scaleIn, fadeInUp } from "@/lib/animations";

export default function Slide01Cover() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col items-center justify-center relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(41,121,255,0.08) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center gap-3 z-10 text-center px-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={scaleIn}
          style={{ filter: "drop-shadow(0 0 28px rgba(41,121,255,0.5))" }}
        >
          <KaizenLogo size={96} />
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="font-oswald font-bold text-[84px] leading-none tracking-tight text-white mt-2"
        >
          KAIZEN
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-inter text-[18px] text-alabaster-grey/75 tracking-wide"
        >
          Fitness Tracking App
        </motion.p>

<motion.div
          variants={staggerItem}
          className="mt-3 pt-4 border-t border-white/[0.08] flex flex-col items-center gap-1.5"
        >
          <p className="font-inter text-[12px] text-alabaster-grey/35">
            24 / 05 / 2026
          </p>
          <p className="font-inter text-[12px] text-alabaster-grey/35">
            DAM 2 · STUCOM Centre d&apos;Estudis - Pelai
          </p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
        className="absolute bottom-10 left-0 right-0 flex justify-between px-10 z-10"
      >
        <span className="font-inter text-[11px] text-alabaster-grey/30">
          DAM 2 · STUCOM · 2026
        </span>
        <span className="font-inter text-[11px] text-alabaster-grey/30">
          John Henard Salango · Zyrl Justin Suárez Untalan
        </span>
      </motion.div>
    </div>
  );
}
