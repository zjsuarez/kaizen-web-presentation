"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";

function ERDNode({ label, isPrimary = false }: { label: string; isPrimary?: boolean }) {
  return (
    <div
      className={`rounded-lg px-3 py-1.5 font-oswald font-bold text-[13px] border ${
        isPrimary
          ? "border-crayola-blue/50 bg-crayola-blue/10 text-crayola-blue"
          : "border-white/10 bg-shadow-grey text-white"
      }`}
    >
      {label}
    </div>
  );
}

function Connector({ label, color = "rgba(255,255,255,0.2)" }: { label?: string; color?: string }) {
  return (
    <div className="flex items-center gap-1 my-1 ml-4">
      <div className="w-px h-4" style={{ background: color }} />
      {label && (
        <span className="font-inter text-[9px] text-crayola-blue ml-1">{label}</span>
      )}
    </div>
  );
}

export default function Slide07Database() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-6"
      >
        DATABASE &amp; KEY ALGORITHM
      </motion.h2>

      <div className="flex gap-8 flex-1 min-h-0">
        {/* LEFT — ERD */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="flex flex-col"
          style={{ flex: "0 0 58%" }}
        >
          <h3 className="font-oswald font-bold text-[16px] text-white/50 mb-4 tracking-widest uppercase">
            Entity Relationship — Simplified
          </h3>

          <div className="flex flex-col gap-0 pl-0">
            {/* USER */}
            <ERDNode label="USER" isPrimary />

            <div className="ml-4 border-l border-white/10 pl-3 flex flex-col gap-0">
              {/* Training Plan branch */}
              <div className="mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-px bg-white/15" />
                  <ERDNode label="TRAINING PLAN" />
                </div>
                <div className="ml-8 border-l border-white/10 pl-3 mt-1 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-px bg-white/15" />
                    <ERDNode label="ROUTINE" />
                    <span className="font-inter text-[9px] text-crayola-blue mx-1 font-bold">──[N:M]──</span>
                    <ERDNode label="ROUTINE EXERCISE" />
                    <span className="font-inter text-[9px] text-white/30 mx-1">──</span>
                    <ERDNode label="EXERCISE" />
                  </div>
                  <p className="font-inter text-[10px] text-crayola-blue mt-1 ml-4">
                    N:M via RoutineExercises · stores order, target sets, rest
                  </p>
                </div>
              </div>

              {/* Workout branch */}
              <div className="mt-1">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-px bg-white/15" />
                  <ERDNode label="WORKOUT" />
                </div>
                <div className="ml-8 border-l border-white/10 pl-3 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-px bg-white/15" />
                    <ERDNode label="WORKOUT SET" />
                  </div>
                  <div className="ml-8 border-l border-white/10 pl-3 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-px bg-white/15" />
                      <div className="rounded-lg px-3 py-1.5 border border-malachite/40 bg-malachite/10 font-oswald font-bold text-[12px] text-malachite flex items-center gap-2">
                        isPR
                        <span className="text-malachite text-[14px]">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table count */}
          <div className="mt-auto pt-3 border-t border-white/[0.07] flex items-center gap-4">
            <span className="font-inter text-[12px] text-white/30">9 tables total</span>
            <span className="font-inter text-[12px] text-white/30">·</span>
            <span className="font-inter text-[12px] text-white/30">MySQL / TiDB Cloud</span>
            <span className="font-inter text-[12px] text-white/30">·</span>
            <span className="font-inter text-[12px] text-white/30">Spring Data JPA</span>
          </div>
        </motion.div>

        {/* Vertical separator */}
        <div className="w-px bg-white/[0.07] self-stretch" />

        {/* RIGHT — Epley card */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
          style={{ flex: 1 }}
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="rounded-xl border-2 border-crayola-blue/30 bg-shadow-grey p-6 flex flex-col gap-4"
            style={{ boxShadow: "0 0 30px rgba(41,121,255,0.08)" }}
          >
            <div className="text-center">
              <span className="font-oswald font-bold text-[14px] text-crayola-blue tracking-widest uppercase">
                1RM Estimation
              </span>
              <p className="font-inter text-[11px] text-white/30 mt-0.5">Epley Formula</p>
            </div>

            <div
              className="rounded-lg bg-onyx border border-white/[0.08] px-5 py-4 text-center"
            >
              <code className="font-mono text-[20px] text-white tracking-wide">
                1RM = weight × (1 + reps / 30)
              </code>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/[0.07] pt-3">
              <div className="flex justify-between items-center">
                <span className="font-inter text-[12px] text-white/40">Input</span>
                <span className="font-inter text-[13px] text-white">100 kg × 8 reps</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-[12px] text-white/40">Estimated 1RM</span>
                <span
                  className="font-oswald font-bold text-[22px] text-malachite"
                  style={{ textShadow: "0 0 12px rgba(0,230,118,0.4)" }}
                >
                  126.7 kg
                </span>
              </div>
            </div>

            <p className="font-inter text-[11px] italic text-white/30 text-center border-t border-white/[0.07] pt-3">
              Used for real-time PR detection and progress tracking
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
