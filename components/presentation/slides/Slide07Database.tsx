"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";

function ERDNode({ label, isPrimary = false }: { label: string; isPrimary?: boolean }) {
  return (
    <div
      className={`rounded-lg px-3 py-1.5 font-oswald font-bold text-[13px] border ${
        isPrimary
          ? "border-crayola-blue/50 bg-crayola-blue/10 text-crayola-blue"
          : "border-white/10 text-white"
      }`}
      style={isPrimary ? undefined : { background: "#242328" }}
    >
      {label}
    </div>
  );
}

const infoBadges = [
  "9 tablas · 3 enums",
  "Hibernate ddl-auto=update",
  "MySQL · TiDB Cloud · Spring Data JPA",
];

export default function Slide07Database() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-8 pb-14 relative overflow-hidden">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-5"
      >
        BASE DE DATOS Y ALGORITMO CLAVE
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
          <h3 className="font-oswald font-bold text-[16px] text-white/50 mb-3 tracking-widest uppercase">
            Entidad-Relación — Simplificado
          </h3>

          <div className="flex flex-col gap-0 pl-0">
            {/* USER root */}
            <ERDNode label="USUARIO" isPrimary />

            <div className="ml-4 border-l border-white/10 pl-3 flex flex-col gap-0">

              {/* UserPreferences — 1:1 */}
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-2 flex items-center gap-1"
              >
                <div className="w-3 h-px" style={{ background: "#E5E5E7", opacity: 0.3 }} />
                <ERDNode label="PREF. DE USUARIO" />
                <span className="font-inter text-[9px] text-white/35 ml-1 font-medium">1:1</span>
              </motion.div>

              {/* BodyMeasurements — 1:N */}
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.52 }}
                className="mt-1.5 flex items-center gap-1"
              >
                <div className="w-3 h-px" style={{ background: "#E5E5E7", opacity: 0.3 }} />
                <ERDNode label="MEDIDAS CORPORALES" />
                <span className="font-inter text-[9px] text-white/35 ml-1 font-medium">1:N</span>
              </motion.div>

              {/* Visual separator between simple entities and training hierarchy */}
              <div className="my-2 ml-0 w-12 h-px bg-white/[0.06]" />

              {/* Training Plan branch */}
              <div className="mt-0">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-px bg-white/15" />
                  <ERDNode label="PLAN DE ENTRENAMIENTO" />
                </div>
                <div className="ml-8 border-l border-white/10 pl-3 mt-1 mb-2">
                  <div className="flex items-center gap-1 flex-wrap">
                    <div className="w-3 h-px bg-white/15" />
                    <ERDNode label="RUTINA" />
                    <span className="font-inter text-[9px] text-crayola-blue mx-1 font-bold">──[N:M]──</span>
                    <ERDNode label="EJERCICIO DE RUTINA" />
                    <span className="font-inter text-[9px] text-white/30 mx-1">──</span>
                    <ERDNode label="EJERCICIO" />
                  </div>
                  <p className="font-inter text-[10px] text-crayola-blue mt-1 ml-4">
                    N:M via RoutineExercises · almacena orden, series objetivo, descanso
                  </p>
                </div>
              </div>

              {/* Workout branch */}
              <div className="mt-1">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-px bg-white/15" />
                  <ERDNode label="ENTRENAMIENTO" />
                </div>
                <div className="ml-8 border-l border-white/10 pl-3 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-px bg-white/15" />
                    <ERDNode label="SERIE" />
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

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-3 border-t border-white/[0.07] flex flex-wrap gap-2"
          >
            {infoBadges.map((badge) => (
              <span
                key={badge}
                className="font-inter text-[11px] px-3 py-1 rounded-sm"
                style={{
                  background: "#242328",
                  color: "#E5E5E7",
                  borderLeft: "2px solid #2979FF",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
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
                Estimación de 1RM
              </span>
              <p className="font-inter text-[11px] text-white/30 mt-0.5">Fórmula de Epley</p>
            </div>

            <div className="rounded-lg bg-onyx border border-white/[0.08] px-5 py-4 text-center">
              <code className="font-mono text-[20px] text-white tracking-wide">
                1RM = weight × (1 + reps / 30)
              </code>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/[0.07] pt-3">
              <div className="flex justify-between items-center">
                <span className="font-inter text-[12px] text-white/40">Entrada</span>
                <span className="font-inter text-[13px] text-white">100 kg × 8 reps</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-[12px] text-white/40">1RM Estimado</span>
                <span
                  className="font-oswald font-bold text-[22px] text-malachite"
                  style={{ textShadow: "0 0 12px rgba(0,230,118,0.4)" }}
                >
                  126.7 kg
                </span>
              </div>
            </div>

            <p className="font-inter text-[11px] italic text-white/30 text-center border-t border-white/[0.07] pt-3">
              Usada para detección de PR en tiempo real y seguimiento de progreso
            </p>

            {/* isPR detection section */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col gap-1.5 pt-3"
              style={{ borderTop: "1px solid #242328" }}
            >
              <span className="font-oswald font-bold text-[14px] text-crayola-blue">
                Detección de isPR
              </span>
              <p className="font-inter text-[12px] italic" style={{ color: "#E5E5E7" }}>
                Cada serie guardada se compara automáticamente con el mejor
                registro histórico del usuario para ese ejercicio. Si el 1RM
                estimado lo supera, la serie queda marcada{" "}
                <code className="font-mono not-italic text-malachite">isPR = true</code>.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
