"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import KaizenLogo from "@/components/ui/KaizenLogo";
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft } from "@/lib/animations";

const pills = ["Sin Fricción", "Sobrecarga Progresiva", "Sin Ruido Social"];

const features = [
  {
    title: "Registro de Entrenamiento",
    desc: "Modo Zen con cronómetro en vivo y detección automática de PR",
  },
  {
    title: "Constructor de Rutinas y Planes",
    desc: "Creación guiada en 3 pasos con orden por arrastrar y soltar",
  },
  {
    title: "Laboratorio de Analíticas",
    desc: "10+ gráficas: tendencias de 1RM, volumen, frecuencia muscular, fatiga",
  },
  {
    title: "Panel Personalizable",
    desc: "Cuadrícula de widgets modular con sincronización offline-first via WorkManager",
  },
  {
    title: "Google OAuth + Correos",
    desc: "Inicio de sesión con Credential Manager + correos automáticos post-entrenamiento",
  },
  {
    title: "Prototipo de IA (Flask PoC)",
    desc: "Entrada en lenguaje natural → plan de entrenamiento estructurado en JSON",
  },
];

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      style={{ maxWidth: 220, margin: "0 auto" }}
    >
      <div
        style={{
          border: "2px solid #2979FF",
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(41, 121, 255, 0.25)",
          maxHeight: 320,
        }}
      >
        <Image
          src="/images/dashboard-screen.png"
          alt="Kaizen dashboard screenshot"
          width={400}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 320,
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>
    </motion.div>
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
                Tu rastreador de fuerza personal
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
        <div className="flex items-center justify-center" style={{ flex: 1 }}>
          <PhoneMockup />
        </div>
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
          CARACTERÍSTICAS PRINCIPALES
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
