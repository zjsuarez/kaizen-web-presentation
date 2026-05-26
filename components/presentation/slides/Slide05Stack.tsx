"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const columns = [
  {
    label: "FRONTEND",
    sublabel: "Android",
    items: [
      "Kotlin + Jetpack Compose",
      "Hilt (Dependency Injection)",
      "Retrofit + OkHttp",
      "Room Database",
      "WorkManager",
      "Vico Charts",
      "Android Credential Manager",
    ],
  },
  {
    label: "BACKEND",
    sublabel: "Java / Spring",
    items: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security + JWT (Stateless)",
      "BCrypt",
      "Google OAuth Client",
      "JavaMailSender",
      "MySQL / TiDB Cloud",
    ],
  },
  {
    label: "INFRAESTRUCTURA",
    sublabel: "Cloud / DevOps",
    items: [
      "TiDB Cloud (MySQL-compatible)",
      "DigitalOcean Spaces (S3)",
      "Jira + GitHub",
      "Postman",
    ],
  },
];

export default function Slide05Stack() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at 0 0, #2979FF, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 100% 100%, #2979FF, transparent 70%)",
        }}
      />

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-7"
      >
        STACK TECNOLÓGICO
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 gap-5 flex-1"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {columns.map(({ label, sublabel, items }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            className="bg-shadow-grey rounded-xl flex flex-col overflow-hidden border border-white/[0.05]"
          >
            {/* Column header — terminal style */}
            <div className="px-5 py-3 border-b border-white/[0.07] flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blazing-flame/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-malachite/40" />
              </div>
              <div className="flex-1 flex items-center gap-2 ml-1">
                <span className="font-oswald font-bold text-[15px] text-crayola-blue tracking-wider">
                  {label}
                </span>
                <span className="font-inter text-[10px] text-white/30 border border-white/10 px-1.5 py-0.5 rounded">
                  {sublabel}
                </span>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-0 flex-1 p-4">
              {items.map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-crayola-blue/60 text-[9px] font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-inter text-[13px] text-alabaster-grey/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* AI footer */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="mt-4 flex justify-center"
      >
        <div className="bg-shadow-grey border border-crayola-blue/20 rounded-full px-5 py-2 flex items-center gap-3">
          <span className="font-inter text-[11px] text-white/40 uppercase tracking-widest">
            Prototipo de IA
          </span>
          <div className="w-px h-3 bg-white/10" />
          <span className="font-inter text-[13px] text-alabaster-grey/70">
            Python 3 + Flask — PoC independiente
          </span>
          <div className="w-px h-3 bg-white/10" />
          <span className="font-inter text-[11px] text-crayola-blue/70">
            Lenguaje natural → plan de entrenamiento
          </span>
        </div>
      </motion.div>
    </div>
  );
}
