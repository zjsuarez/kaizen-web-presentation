"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const endpoints = [
  { group: "Auth (público)", desc: "/register · /login · /oauth/google" },
  { group: "Perfil de Usuario", desc: "GET · PUT /users/me" },
  { group: "Ejercicios", desc: "GET all · POST · GET by ID" },
  { group: "Planes de Entrenamiento", desc: "CRUD completo (5 endpoints)" },
  { group: "Rutinas", desc: "CRUD completo + reemplazo de ejercicio (6 endpoints)" },
  { group: "Entrenamientos", desc: "POST · GET all · GET by ID" },
  { group: "Medidas Corporales", desc: "POST · GET history" },
  { group: "Panel", desc: "Resumen · Historial de PR" },
  { group: "Estadísticas", desc: "11 endpoints de analíticas" },
  { group: "Preferencias de Widgets", desc: "GET · PUT layout" },
];

const stats = [
  { value: "38", label: "Endpoints" },
  { value: "120+", label: "Aserciones" },
  { value: "8", label: "Grupos" },
];

export default function Slide08API() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 0 100%, #2979FF, transparent 65%)",
        }}
      />

      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-4 mb-6"
      >
        <h2 className="font-oswald font-bold text-[44px] text-white tracking-tight leading-none">
          REST API — 38 ENDPOINTS
        </h2>
        <div className="flex items-center gap-1.5 bg-crayola-blue/15 border border-crayola-blue/30 rounded-full px-3 py-1">
          <Shield size={12} className="text-crayola-blue" />
          <span className="font-inter text-[11px] text-crayola-blue font-medium">JWT Protected</span>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 rounded-xl overflow-hidden border border-white/[0.07] flex flex-col min-h-0"
      >
        {/* Table header */}
        <div className="grid grid-cols-[1fr_2fr] bg-crayola-blue/20 border-b border-crayola-blue/20 px-5 py-2.5">
          <span className="font-oswald font-bold text-[13px] text-crayola-blue tracking-widest uppercase">
            Grupo
          </span>
          <span className="font-oswald font-bold text-[13px] text-crayola-blue tracking-widest uppercase">
            Cobertura
          </span>
        </div>

        {/* Table rows */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {endpoints.map(({ group, desc }, i) => (
            <motion.div
              key={group}
              variants={staggerItem}
              className="grid grid-cols-[1fr_2fr] px-5 py-2.5 border-b border-white/[0.05] last:border-0"
              style={{ background: i % 2 === 0 ? "#242328" : "#1e1d22" }}
            >
              <span className="font-oswald font-bold text-[14px] text-white">{group}</span>
              <span className="font-inter text-[13px] text-alabaster-grey/60">{desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex justify-center gap-8 mt-4"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <span className="font-oswald font-bold text-[28px] text-crayola-blue leading-none">
              {value}
            </span>
            <span className="font-inter text-[11px] text-white/35 uppercase tracking-widest">
              {label}
            </span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-0.5 justify-center">
          <span className="font-inter text-[11px] text-white/25 uppercase tracking-widest">Colección</span>
          <span className="font-inter text-[13px] text-alabaster-grey/50">Postman</span>
        </div>
      </motion.div>
    </div>
  );
}
