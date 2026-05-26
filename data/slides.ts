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
  { id: "cover", title: "Cover", section: "Intro", component: Slide01Cover },
  { id: "team", title: "The Team", section: "Intro", component: Slide02Team },
  { id: "problem", title: "The Problem", section: "Context", component: Slide03Problem },
  { id: "solution", title: "Solution", section: "Context", component: Slide04Solution },
  { id: "stack", title: "Tech Stack", section: "Technical", component: Slide05Stack },
  { id: "architecture", title: "Architecture", section: "Technical", component: Slide06Architecture },
  { id: "database", title: "Database & Algorithm", section: "Technical", component: Slide07Database },
  { id: "api", title: "REST API", section: "Technical", component: Slide08API },
  { id: "testing", title: "Testing", section: "Technical", component: Slide09Testing },
  { id: "conclusions", title: "Conclusions", section: "Wrap-up", component: Slide10Conclusions },
  { id: "roadmap", title: "V3 Roadmap", section: "Wrap-up", component: Slide11Roadmap },
  { id: "close", title: "Close", section: "Wrap-up", component: Slide12Close },
];
