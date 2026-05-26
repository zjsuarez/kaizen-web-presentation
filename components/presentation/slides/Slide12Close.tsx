"use client";

import { motion } from "framer-motion";
import KaizenLogo from "@/components/ui/KaizenLogo";
import { Github, Youtube, ExternalLink } from "lucide-react";
import { staggerContainer, staggerItem, scaleIn, fadeInUp } from "@/lib/animations";

const links = [
  {
    icon: Github,
    label: "Frontend",
    url: "github.com/zjsuarez/Kaizen-FrontEND",
    sub: "Kotlin · Jetpack Compose",
  },
  {
    icon: Github,
    label: "Backend",
    url: "github.com/zjsuarez/Kaizen-BackEND",
    sub: "Java 17 · Spring Boot 3",
  },
  {
    icon: Youtube,
    label: "Demo Video",
    url: "youtube.com/watch?v=KnZ7yM_tm-I",
    sub: "Full walkthrough",
  },
];

export default function Slide12Close() {
  return (
    <div className="w-full h-full bg-onyx flex flex-col items-center justify-center relative overflow-hidden pb-10">
      {/* Background glow — larger and more dramatic for closing slide */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 50% 45%, rgba(41,121,255,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0 0, rgba(41,121,255,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 100%, rgba(41,121,255,0.05), transparent 70%)",
        }}
      />

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center gap-5 z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={scaleIn}
          style={{ filter: "drop-shadow(0 0 24px rgba(41,121,255,0.45))" }}
        >
          <KaizenLogo size={88} />
        </motion.div>

        {/* Thank you */}
        <motion.h1
          variants={staggerItem}
          className="font-oswald font-bold text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(56px, 8vw, 88px)" }}
        >
          Thank you.
        </motion.h1>

        {/* Separator */}
        <motion.div
          variants={staggerItem}
          className="w-24 h-px bg-crayola-blue/40"
        />

        {/* Links */}
        <motion.div
          className="flex gap-4 mt-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ icon: Icon, label, url, sub }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="bg-shadow-grey border border-white/[0.08] rounded-xl px-5 py-4 flex flex-col items-center gap-2 hover:border-crayola-blue/30 transition-colors group"
              style={{ minWidth: 160 }}
            >
              <div className="w-9 h-9 rounded-lg bg-crayola-blue/10 flex items-center justify-center">
                <Icon size={16} className="text-crayola-blue" />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-oswald font-bold text-[16px] text-white">{label}</span>
                <span className="font-inter text-[10px] text-white/30">{sub}</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="font-inter text-[10px] text-crayola-blue/70 group-hover:text-crayola-blue transition-colors break-all text-center">
                  {url}
                </span>
                <ExternalLink size={9} className="text-crayola-blue/50 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 font-inter text-[18px] text-alabaster-grey/25 z-10 tracking-wide"
      >
        Questions?
      </motion.p>
    </div>
  );
}
