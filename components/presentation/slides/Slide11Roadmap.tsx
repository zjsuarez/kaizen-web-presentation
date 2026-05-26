"use client";

import { motion } from "framer-motion";
import { Brain, FileDown, WifiOff, Palette, GitBranch } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const roadmap = [
  {
    icon: Brain,
    title: "Native AI",
    desc: "Flask PoC integrated directly into the mobile app as a core feature",
    tag: "High priority",
  },
  {
    icon: FileDown,
    title: "CSV Export",
    desc: "Backend queries already in place. UI + download endpoint only",
    tag: "Quick win",
  },
  {
    icon: WifiOff,
    title: "Full Offline",
    desc: "Extend Room cache to the complete workout logging flow",
    tag: "Architecture",
  },
  {
    icon: Palette,
    title: "Themes",
    desc: "Alternative visual themes — maintaining high-contrast utility-first constraints",
    tag: "UX",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    desc: "GitHub Actions pipeline for automated backend testing and deployment",
    tag: "DevOps",
  },
];

export default function Slide11Roadmap() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col items-center justify-center px-12 pb-14 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,121,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(41,121,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="self-start mb-8 w-full"
      >
        <h2 className="font-oswald font-bold text-[44px] text-white tracking-tight">
          WHAT&apos;S NEXT — V3 ROADMAP
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-5 gap-4 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {roadmap.map(({ icon: Icon, title, desc, tag }, i) => (
          <motion.div
            key={title}
            variants={staggerItem}
            custom={i}
            className="bg-shadow-grey rounded-xl flex flex-col p-5 gap-4 border border-white/[0.05] overflow-hidden relative group hover:border-crayola-blue/20 transition-colors"
            style={{ borderTop: "3px solid #2979FF" }}
          >
            {/* Subtle top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(41,121,255,0.06), transparent)",
              }}
            />

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-crayola-blue/10 flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-crayola-blue" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-oswald font-bold text-[20px] text-white tracking-tight leading-tight">
                {title}
              </h3>
              <p className="font-inter text-[12px] text-alabaster-grey/55 leading-relaxed">
                {desc}
              </p>
            </div>

            {/* Tag */}
            <span className="font-inter text-[10px] text-crayola-blue/60 border border-crayola-blue/20 rounded-full px-2 py-0.5 self-start uppercase tracking-wide">
              {tag}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Context note */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.65 }}
        className="font-inter text-[13px] italic text-alabaster-grey/35 text-center mt-6"
      >
        "The backend architecture is already prepared to support all these integrations."
      </motion.p>
    </div>
  );
}
