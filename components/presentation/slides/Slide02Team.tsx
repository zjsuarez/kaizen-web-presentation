"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const team = [
  {
    name: "Zyrl Justin Suárez Untalan",
    initials: "ZS",
    role: "Full-Stack Developer",
    focus: "Frontend Focus",
    education: "SMX → DAM 2 STUCOM",
    contributions: [
      "Frontend completo en Kotlin & Jetpack Compose",
      "Industrial Dark Mode UI design system",
      "Zero-friction UX & navigation architecture",
    ],
    quote: "Passionate about clean UI and zero-friction mobile experiences.",
    linkedin: "linkedin.com/in/zjsuarez/",
    goal: "Mobile development with Flutter",
  },
  {
    name: "John Henard Salango",
    initials: "JS",
    role: "Full-Stack Developer",
    focus: "Backend Focus",
    education: "SMX → DAM 2 STUCOM",
    contributions: [
      "API REST con Spring Boot 3",
      "Sistema de autenticación JWT + OAuth",
      "Base de datos MySQL · Lógica de negocio",
    ],
    quote: "I enjoy building reliable systems and solving complex logic problems.",
    linkedin: "linkedin.com/in/john-henard-salango-fernandez-99a129355",
    goal: "Cross-platform development with Flutter",
  },
];

export default function Slide02Team() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-crayola-blue opacity-60"
        style={{ background: "linear-gradient(90deg, transparent, #2979FF, transparent)" }}
      />

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white mb-8 tracking-tight"
      >
        THE TEAM
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 gap-6 flex-1"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={staggerItem}
            className="bg-shadow-grey rounded-xl border-l-[3px] border-crayola-blue p-6 flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Inner glow */}
            <div
              className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 0 0, rgba(41,121,255,0.07), transparent 70%)",
              }}
            />

            {/* Header: avatar + name */}
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-oswald font-bold text-[18px] text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #2979FF22, #2979FF44)",
                  border: "2px solid rgba(41,121,255,0.4)",
                }}
              >
                {member.initials}
              </div>
              <div>
                <h3 className="font-oswald font-bold text-[20px] text-white leading-tight">
                  {member.name}
                </h3>
                <p className="font-inter text-[12px] text-alabaster-grey/50 mt-0.5">
                  {member.education}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2">
              <span className="font-inter text-[11px] font-medium bg-crayola-blue text-white px-2.5 py-0.5 rounded-full">
                {member.focus}
              </span>
              <span className="font-inter text-[11px] text-alabaster-grey/40 border border-white/10 px-2.5 py-0.5 rounded-full">
                {member.role}
              </span>
            </div>

            {/* Contributions */}
            <ul className="flex flex-col gap-1.5">
              {member.contributions.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-crayola-blue mt-1 text-[10px] leading-none">▸</span>
                  <span className="font-inter text-[13px] text-alabaster-grey/75">{c}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <p className="font-inter text-[12px] italic text-alabaster-grey/45 border-t border-white/[0.07] pt-3">
              "{member.quote}"
            </p>

            {/* LinkedIn */}
            <div className="flex items-center gap-1.5 mt-auto">
              <Linkedin size={13} className="text-crayola-blue" />
              <span className="font-inter text-[11px] text-crayola-blue/80 hover:text-crayola-blue transition-colors">
                {member.linkedin}
              </span>
            </div>

            {/* Goal */}
            <div className="text-[11px] font-inter text-alabaster-grey/35 border-t border-white/[0.06] pt-2">
              <span className="text-crayola-blue/60">Goal:</span>{" "}
              {member.goal}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
