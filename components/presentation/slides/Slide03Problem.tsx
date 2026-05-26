"use client";

import { motion } from "framer-motion";
import { Table2, Users, Layers } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp, scaleIn } from "@/lib/animations";

const painPoints = [
  {
    icon: Table2,
    title: "Registro Manual",
    desc: "Las hojas de cálculo y la memoria son lentas y propensas a errores. Sin datos históricos ni tendencias.",
  },
  {
    icon: Users,
    title: "Ruido Social",
    desc: "Apps como Hevy priorizan la comunidad sobre el rendimiento. Un feed no es un PR.",
  },
  {
    icon: Layers,
    title: "Exceso de Funciones",
    desc: "Herramientas como Jefit hacen que empezar un entrenamiento sea más agotador que entrenar.",
  },
];

export default function Slide03Problem() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col items-center justify-center px-12 pb-14 relative overflow-hidden">
      {/* Faint background geometry */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 100% 100%, #2979FF, transparent 70%)",
        }}
      />

      {/* Header */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight self-start mb-6"
      >
        EL PROBLEMA
      </motion.h2>

      {/* Quote */}
      <motion.blockquote
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
        className="text-center mb-8 max-w-3xl"
      >
        <p className="font-inter text-[22px] italic text-alabaster-grey/85 leading-snug">
          "La mayoría de atletas se estanca no por falta de esfuerzo,
          <br />
          sino por <span className="text-crayola-blue not-italic font-medium">falta de datos</span>."
        </p>
      </motion.blockquote>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-3 gap-5 w-full max-w-5xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {painPoints.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={staggerItem}
            className="bg-shadow-grey rounded-xl p-6 flex flex-col gap-3 border border-white/[0.05] relative overflow-hidden group hover:border-crayola-blue/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-crayola-blue/10 flex items-center justify-center">
              <Icon size={18} className="text-crayola-blue" />
            </div>
            <h3 className="font-oswald font-bold text-[20px] text-white tracking-tight">
              {title}
            </h3>
            <p className="font-inter text-[13px] text-alabaster-grey/60 leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.55 }}
        className="font-inter text-[14px] text-crayola-blue mt-7 text-center italic"
      >
        "El mercado tiene apps. Ninguna hace UNA cosa perfectamente."
      </motion.p>
    </div>
  );
}
