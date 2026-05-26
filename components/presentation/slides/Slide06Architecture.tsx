"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "@/lib/animations";

const androidLayers = [
  { label: "Presentation Layer", sub: "Compose Screens + ViewModels" },
  { label: "Domain Layer", sub: "UseCases + Repository Interfaces" },
  { label: "Data Layer", sub: "Retrofit + Room + Repository Impl" },
  { label: "Network / Local DB", sub: "API Calls + Room Database" },
];

const backendLayers = [
  { label: "Controller Layer", sub: "REST Endpoints" },
  { label: "Service Layer", sub: "Business Logic" },
  { label: "Repository Layer", sub: "Spring Data JPA" },
];

const badges = ["Stateless JWT Auth", "Feature-sliced Clean Arch", "Offline-first Dashboard"];

function ArchBlock({
  title,
  layers,
  delay = 0,
  variant,
}: {
  title: string;
  layers: { label: string; sub: string }[];
  delay?: number;
  variant: "left" | "right";
}) {
  const anim = variant === "left" ? fadeInLeft : fadeInRight;
  return (
    <motion.div
      variants={anim}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className="flex flex-col rounded-xl overflow-hidden border border-white/[0.07]"
      style={{ flex: 1 }}
    >
      {/* Block title */}
      <div className="bg-crayola-blue/10 border-b border-crayola-blue/20 px-4 py-2.5">
        <span className="font-oswald font-bold text-[13px] text-crayola-blue tracking-widest uppercase">
          {title}
        </span>
      </div>
      {/* Layers */}
      <div className="bg-shadow-grey flex flex-col flex-1">
        {layers.map(({ label, sub }, i) => (
          <div key={label} className={`px-4 py-3 ${i < layers.length - 1 ? "border-b border-white/[0.07]" : ""} flex flex-col gap-0.5`}>
            <span className="font-oswald font-bold text-[15px] text-white">{label}</span>
            <span className="font-inter text-[11px] text-alabaster-grey/45">{sub}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Slide06Architecture() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-8"
      >
        SYSTEM ARCHITECTURE
      </motion.h2>

      {/* Diagram row */}
      <div className="flex items-stretch gap-0 flex-1 min-h-0">
        {/* Android block */}
        <ArchBlock title="Android App — Clean Architecture" layers={androidLayers} delay={0.1} variant="left" />

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col items-center justify-center px-4 flex-shrink-0 gap-3"
          style={{ minWidth: 130 }}
        >
          {/* Arrow line */}
          <div className="flex flex-col items-center gap-2 w-full">
            {/* Forward arrow */}
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-crayola-blue/60" />
              <div
                className="border-l-[8px] border-l-crayola-blue border-y-[5px] border-y-transparent ml-0"
                style={{ borderLeftColor: "#2979FF" }}
              />
            </div>

            {/* Labels */}
            <div className="text-center">
              <p className="font-oswald font-bold text-[13px] text-crayola-blue">REST API</p>
              <p className="font-inter text-[9px] text-white/35 mt-0.5 leading-tight">
                Authorization:
                <br />
                Bearer &lt;token&gt;
              </p>
            </div>

            {/* Backward arrow */}
            <div className="flex items-center w-full">
              <div
                className="border-r-[8px] border-r-crayola-blue/60 border-y-[5px] border-y-transparent"
                style={{ borderRightColor: "rgba(41,121,255,0.6)" }}
              />
              <div className="flex-1 h-px bg-crayola-blue/40" />
            </div>
          </div>
        </motion.div>

        {/* Spring Boot block + MySQL */}
        <div className="flex flex-col gap-3" style={{ flex: 1 }}>
          <ArchBlock title="Spring Boot API — 3-Layer Architecture" layers={backendLayers} delay={0.2} variant="right" />

          {/* MySQL pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="h-px flex-1 bg-crayola-blue/30" />
            <div className="w-1.5 h-5 bg-crayola-blue/30 rounded-full" />
            <div
              className="bg-crayola-blue/10 border border-crayola-blue/30 rounded-full px-4 py-1.5 font-oswald font-bold text-[13px] text-crayola-blue"
            >
              MySQL / TiDB Cloud
            </div>
            <div className="w-1.5 h-5 bg-crayola-blue/30 rounded-full" />
            <div className="h-px flex-1 bg-crayola-blue/30" />
          </motion.div>
        </div>
      </div>

      {/* Footer badges */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.55, staggerChildren: 0.1 }}
        className="flex gap-3 mt-5 justify-center"
      >
        {badges.map((b) => (
          <motion.span
            key={b}
            variants={staggerItem}
            className="font-inter text-[12px] text-alabaster-grey/60 bg-shadow-grey border border-white/[0.08] rounded-full px-4 py-1.5"
          >
            {b}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
