"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Layers, Database } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

import type { CSSProperties } from "react";

type SectionImageConfig = {
  containerStyle: CSSProperties;
  imgStyle: CSSProperties;
};

const sections: {
  icon: typeof CheckCircle2;
  title: string;
  image: string;
  imgConfig: SectionImageConfig;
  accent: string;
  metrics: { label: string; value: string }[];
  details: string[];
}[] = [
  {
    icon: CheckCircle2,
    title: "Pruebas de API",
    image: "postman-results.png",
    imgConfig: {
      containerStyle: {
        width: "100%",
        maxHeight: 160,
        border: "1px solid #242328",
        borderRadius: 6,
        background: "#0B0A0F",
        overflow: "hidden",
        flexShrink: 0,
      },
      imgStyle: {
        width: "100%",
        height: "auto",
        maxHeight: 160,
        objectFit: "cover",
        objectPosition: "top left",
        display: "block",
      },
    },
    accent: "#2979FF",
    metrics: [
      { label: "Solicitudes", value: "38" },
      { label: "Grupos", value: "8" },
      { label: "Aserciones", value: "120+" },
    ],
    details: [
      "Validación JWT de extremo a extremo",
      "HTTP codes: 200, 201, 204, 400, 401, 404",
      "Aplicación de 401 en rutas protegidas",
      "Tiempo de respuesta < 600 ms",
      "Validación de esquema por endpoint",
    ],
  },
  {
    icon: Layers,
    title: "Validación de Formularios",
    image: "register-screen.png",
    imgConfig: {
      containerStyle: {
        maxHeight: 200,
        border: "1px solid #242328",
        borderRadius: 12,
        overflow: "hidden",
        flexShrink: 0,
        margin: "0 auto",
      },
      imgStyle: {
        width: "auto",
        height: "auto",
        maxHeight: 200,
        display: "block",
      },
    },
    accent: "#2979FF",
    metrics: [
      { label: "Capas", value: "2" },
      { label: "Estrategia", value: "Pre + Post" },
      { label: "Campos", value: "5+" },
    ],
    details: [
      "Frontend: Jetpack Compose pre-petición",
      "Backend: Spring Validation (400 Bad Request)",
      "Campos: username, email, contraseña",
      "Fortaleza de contraseña + confirmación",
      "Propagación de mensajes de error al UI",
    ],
  },
  {
    icon: Database,
    title: "Prueba de Estrés de BD",
    image: "mysql-results.png",
    imgConfig: {
      containerStyle: {
        width: "85%",
        maxHeight: 120,
        margin: "0 auto",
        border: "1px solid #242328",
        borderRadius: 6,
        overflow: "hidden",
        flexShrink: 0,
      },
      imgStyle: {
        width: "100%",
        height: "auto",
        maxHeight: 120,
        objectFit: "cover",
        objectPosition: "top center",
        display: "block",
      },
    },
    accent: "#2979FF",
    metrics: [
      { label: "Perfiles", value: "3" },
      { label: "Entrenamientos", value: "48" },
      { label: "Series", value: "~96" },
    ],
    details: [
      "Script SQL de datos — INSERT IGNORE (idempotente)",
      "Users: alex_lifts, maria_strong, john_powerlifts",
      "Rango de datos: enero – mayo 2026",
      "Cobertura estadística completa para todas las gráficas",
      "Seguro de re-ejecutar sin duplicados",
    ],
  },
];

export default function Slide09Testing() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col px-12 py-10 pb-14 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 100% 0%, #2979FF, transparent 65%)",
        }}
      />

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-oswald font-bold text-[44px] text-white tracking-tight mb-7"
      >
        PRUEBAS TÉCNICAS
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 gap-5 flex-1"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {sections.map(({ icon: Icon, title, image, imgConfig, metrics, details }, colIdx) => (
          <motion.div
            key={title}
            variants={staggerItem}
            className="bg-shadow-grey rounded-xl flex flex-col overflow-hidden border border-white/[0.05]"
          >
            {/* Card header */}
            <div className="px-5 pt-5 pb-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-crayola-blue/10 flex items-center justify-center">
                  <Icon size={16} className="text-crayola-blue" />
                </div>
                <h3 className="font-oswald font-bold text-[20px] text-white tracking-tight">
                  {title}
                </h3>
              </div>

              {/* Metric chips */}
              <div className="flex gap-2 flex-wrap">
                {metrics.map(({ label, value }) => (
                  <div key={label} className="flex flex-col items-center bg-onyx rounded-lg px-3 py-1.5">
                    <span className="font-oswald font-bold text-[20px] text-crayola-blue leading-none">
                      {value}
                    </span>
                    <span className="font-inter text-[9px] text-white/30 uppercase tracking-wide mt-0.5">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details + image below */}
            <div className="px-5 py-4 flex flex-col gap-2 flex-1">
              {details.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-crayola-blue/60 mt-1.5 flex-shrink-0" />
                  <span className="font-inter text-[12px] text-alabaster-grey/60 leading-snug">
                    {d}
                  </span>
                </div>
              ))}

              {/* Screenshot — below caption text */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 * colIdx }}
                style={{ marginTop: 14, ...imgConfig.containerStyle }}
              >
                <Image
                  src={`/images/${image}`}
                  alt={title}
                  width={400}
                  height={300}
                  style={imgConfig.imgStyle}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
