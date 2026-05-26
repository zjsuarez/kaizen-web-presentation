"use client";

import { motion } from "framer-motion";
import KaizenLogo from "@/components/ui/KaizenLogo";
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const pills = ["Zero Friction", "Progressive Overload", "No Social Clutter"];

const features = [
  {
    title: "Workout Logger",
    desc: "Zen Mode with live timer and automatic PR detection",
  },
  {
    title: "Routine & Plan Builder",
    desc: "3-step guided creation with drag-and-drop ordering",
  },
  {
    title: "Analytics Lab",
    desc: "10+ charts: 1RM trends, volume, muscle frequency, fatigue",
  },
  {
    title: "Custom Dashboard",
    desc: "Modular widget grid with offline-first WorkManager sync",
  },
  {
    title: "Google OAuth + Emails",
    desc: "Credential Manager sign-in + automated post-workout emails",
  },
  {
    title: "AI Prototype (Flask PoC)",
    desc: "Natural language input → structured workout plan in JSON",
  },
];

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 160, height: 320 }}
    >
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[28px] border-2 overflow-hidden"
        style={{
          borderColor: "rgba(41,121,255,0.35)",
          background: "#181720",
          boxShadow: "0 0 40px rgba(41,121,255,0.15)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-onyx rounded-b-xl z-10" />
        {/* Screen content */}
        <div className="absolute inset-0 pt-6 p-3 flex flex-col gap-2">
          {/* Status bar */}
          <div className="flex justify-between items-center px-1 mb-1">
            <div className="w-10 h-1.5 rounded bg-white/10" />
            <div className="w-6 h-1.5 rounded bg-crayola-blue/40" />
          </div>
          {/* Widget 1 – large */}
          <div className="h-16 rounded-lg border border-crayola-blue/15 bg-shadow-grey/80 p-2 flex flex-col justify-between">
            <div className="w-12 h-1 rounded bg-white/20" />
            <div className="flex justify-between items-end">
              <div className="w-8 h-3 rounded bg-crayola-blue/50" />
              <div className="w-4 h-4 rounded bg-malachite/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-malachite/60" />
              </div>
            </div>
          </div>
          {/* Two widgets */}
          <div className="flex gap-2">
            <div className="flex-1 h-10 rounded-lg border border-white/[0.06] bg-shadow-grey/60 p-1.5">
              <div className="w-8 h-1 rounded bg-white/15 mb-1" />
              <div className="w-5 h-2 rounded bg-crayola-blue/40" />
            </div>
            <div className="flex-1 h-10 rounded-lg border border-white/[0.06] bg-shadow-grey/60 p-1.5">
              <div className="w-8 h-1 rounded bg-white/15 mb-1" />
              <div className="w-5 h-2 rounded bg-malachite/30" />
            </div>
          </div>
          {/* Chart widget */}
          <div className="flex-1 rounded-lg border border-white/[0.06] bg-shadow-grey/60 p-2 overflow-hidden">
            <div className="w-10 h-1 rounded bg-white/15 mb-2" />
            <div className="flex items-end gap-1 h-12">
              {[40, 55, 45, 70, 60, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5 ? "#2979FF" : "rgba(41,121,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Bottom nav */}
          <div className="flex justify-around items-center pt-1 border-t border-white/[0.06]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded ${i === 0 ? "bg-crayola-blue/60" : "bg-white/10"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slide04Solution() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-10 py-8 pb-14 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 0%, rgba(41,121,255,0.06), transparent 65%)",
        }}
      />

      {/* TOP HALF */}
      <div className="flex gap-8 mb-5" style={{ minHeight: "180px" }}>
        {/* Left: identity + pills */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center gap-3"
          style={{ flex: "0 0 38%" }}
        >
          <div className="flex items-center gap-3">
            <KaizenLogo size={56} />
            <div>
              <h2 className="font-oswald font-bold text-[38px] leading-none text-white">
                KAIZEN
              </h2>
              <p className="font-inter text-[12px] text-alabaster-grey/55">
                Your personal strength tracker
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {pills.map((p) => (
              <span
                key={p}
                className="font-inter text-[12px] font-medium bg-crayola-blue text-white px-3 py-1 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center"
          style={{ flex: 1 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Separator */}
      <div className="border-t border-white/[0.07] mb-4" />

      {/* BOTTOM HALF: feature grid */}
      <div>
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-oswald font-bold text-[22px] text-white mb-3 tracking-tight"
        >
          CORE FEATURES
        </motion.h3>

        <motion.div
          className="grid grid-cols-3 gap-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {features.map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="bg-shadow-grey rounded-lg border-l-[3px] border-crayola-blue p-3 flex flex-col gap-1"
            >
              <h4 className="font-oswald font-bold text-[15px] text-white">{title}</h4>
              <p className="font-inter text-[11px] text-alabaster-grey/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
