"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const B = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#2979FF" }}>{children}</span>
);
const G = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#00E676" }}>{children}</span>
);

const team = [
  {
    name: "Zyrl Justin Suárez Untalan",
    initials: "ZS",
    role: "Full-Stack Developer",
    focus: "Enfoque Frontend",
    education: "SMX → DAM 2 STUCOM",
    linkedinHref: "https://linkedin.com/in/zjsuarez/",
    linkedinLabel: "linkedin.com/in/zjsuarez/",
    bio: <>Base en Java y PHP · Objetivo profesional: <G>Flutter</G></>,
    contribution: <>Frontend — <B>Kotlin + Jetpack Compose</B> · <B>Industrial Dark Mode</B></>,
  },
  {
    name: "John Henard Salango",
    initials: "JS",
    role: "Full-Stack Developer",
    focus: "Enfoque Backend",
    education: "SMX → DAM 2 STUCOM",
    linkedinHref: "https://linkedin.com/in/john-henard-salango-fernandez-99a129355",
    linkedinLabel: "linkedin.com/in/john-henard-salango-fernandez-99a129355",
    bio: <>Base en Java y Python · Objetivo profesional: <G>Flutter</G></>,
    contribution: <>Backend — <B>Java + Spring Boot</B> · <B>JWT + BCrypt</B> · <B>MySQL</B></>,
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
        EL EQUIPO
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
            className="bg-shadow-grey rounded-xl border-l-[3px] border-crayola-blue p-6 flex flex-col relative overflow-hidden"
            style={{ gap: 16 }}
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

            {/* Bio + contribution lines */}
            <div
              style={{
                borderTop: "1px solid #242328",
                paddingTop: 10,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <p
                className="font-inter"
                style={{ fontSize: 13, color: "#E5E5E7", fontStyle: "italic", opacity: 0.75 }}
              >
                {member.bio}
              </p>
              <p
                className="font-inter"
                style={{ fontSize: 13, color: "#E5E5E7", opacity: 1 }}
              >
                {member.contribution}
              </p>
            </div>

            {/* LinkedIn — pinned to bottom */}
            <a
              href={member.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
              style={{
                borderTop: "1px solid #242328",
                paddingTop: 10,
                marginTop: "auto",
                position: "relative",
                zIndex: 10,
                pointerEvents: "auto",
                textDecoration: "none",
              }}
            >
              <Linkedin size={13} className="text-crayola-blue" />
              <span className="font-inter text-[11px] text-crayola-blue/80 hover:text-crayola-blue transition-colors">
                {member.linkedinLabel}
              </span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
