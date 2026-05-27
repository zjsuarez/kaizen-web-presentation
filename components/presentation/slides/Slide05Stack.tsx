"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const columns = [
  {
    label: "FRONTEND",
    sublabel: "Android",
    logos: ["android-logo.png", "kotlin-logo.png"],
    items: [
      "Android / Kotlin + Jetpack Compose",
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
    logos: ["java-logo.png", "spring-boot-logo.png", "mysql-logo.png"],
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
    logos: ["mysql-logo.png", "tidb-logo.png", "github-logo.png", "jira-logo.png"],
    items: [
      "TiDB Cloud (MySQL-compatible)",
      "DigitalOcean Spaces (S3)",
      "GitHub",
      "Jira",
      "Postman",
    ],
  },
];

function LogoImg({ src }: { src: string }) {
  return (
    <Image
      src={`/images/${src}`}
      alt={src.replace("-logo.png", "")}
      width={40}
      height={28}
      style={{
        height: 28,
        width: "auto",
        objectFit: "contain",
        opacity: 0.80,
        transition: "opacity 150ms ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.80"; }}
    />
  );
}

function LogoGroup({ logos }: { logos: string[] }) {
  const count = logos.length;

  if (count === 2) {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        {logos.map((l) => <LogoImg key={l} src={l} />)}
      </div>
    );
  }

  if (count === 3) {
    // Inverted triangle: 2 on top, 1 below centered
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <LogoImg src={logos[0]} />
          <LogoImg src={logos[1]} />
        </div>
        <LogoImg src={logos[2]} />
      </div>
    );
  }

  // 4 logos — 2×2 grid
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, justifyItems: "center", width: "fit-content", margin: "0 auto" }}>
      {logos.map((l) => <LogoImg key={l} src={l} />)}
    </div>
  );
}

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
        {columns.map(({ label, sublabel, items, logos }) => (
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

            {/* Items — plain text list */}
            <div className="flex flex-col gap-0 flex-1 p-4">
              {items.map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-crayola-blue/60 text-[9px] font-mono flex-shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-inter text-[13px] text-alabaster-grey/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Logo group at the bottom */}
            <div
              style={{
                borderTop: "1px solid #242328",
                paddingTop: 14,
                paddingBottom: 14,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <LogoGroup logos={logos} />
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
