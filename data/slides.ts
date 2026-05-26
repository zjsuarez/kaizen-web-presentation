import { ComponentType } from "react";
import Slide01Cover from "@/components/presentation/slides/Slide01Cover";
import Slide02Team from "@/components/presentation/slides/Slide02Team";
import Slide03Problem from "@/components/presentation/slides/Slide03Problem";
import Slide04Solution from "@/components/presentation/slides/Slide04Solution";
import Slide05Stack from "@/components/presentation/slides/Slide05Stack";
import Slide06Architecture from "@/components/presentation/slides/Slide06Architecture";
import Slide07Database from "@/components/presentation/slides/Slide07Database";
import Slide08API from "@/components/presentation/slides/Slide08API";
import Slide09Testing from "@/components/presentation/slides/Slide09Testing";
import Slide10Conclusions from "@/components/presentation/slides/Slide10Conclusions";
import Slide11Roadmap from "@/components/presentation/slides/Slide11Roadmap";
import Slide12Close from "@/components/presentation/slides/Slide12Close";

export interface SlideConfig {
  id: string;
  title: string;
  section: string;
  component: ComponentType;
}

export const slides: SlideConfig[] = [
  { id: "cover", title: "Portada", section: "Intro", component: Slide01Cover },
  { id: "team", title: "El Equipo", section: "Intro", component: Slide02Team },
  { id: "problem", title: "El Problema", section: "Contexto", component: Slide03Problem },
  { id: "solution", title: "Solución", section: "Contexto", component: Slide04Solution },
  { id: "stack", title: "Stack Tecnológico", section: "Técnico", component: Slide05Stack },
  { id: "architecture", title: "Arquitectura", section: "Técnico", component: Slide06Architecture },
  { id: "database", title: "Base de Datos y Algoritmo", section: "Técnico", component: Slide07Database },
  { id: "api", title: "REST API", section: "Técnico", component: Slide08API },
  { id: "testing", title: "Pruebas", section: "Técnico", component: Slide09Testing },
  { id: "conclusions", title: "Conclusiones", section: "Cierre", component: Slide10Conclusions },
  { id: "roadmap", title: "Hoja de Ruta V3", section: "Cierre", component: Slide11Roadmap },
  { id: "close", title: "Cierre", section: "Cierre", component: Slide12Close },
];
