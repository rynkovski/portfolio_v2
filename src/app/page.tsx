"use client";

import { AboutSection } from "@/components/about-section";
import { fadeStaggerContainer } from "@/components/fadeup";
import { Header } from "@/components/header";
import { LocalTime } from "@/components/local-time";
import { WorkSection } from "@/components/work-section";
import { motion, useReducedMotion } from "framer-motion";

export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      variants={prefersReducedMotion ? undefined : fadeStaggerContainer}
      initial={prefersReducedMotion ? false : "hidden"}
      animate="show"
      className="min-h-dvh max-w-xl mx-auto px-6 py-12"
    >
      <Header />
      <AboutSection />
      <WorkSection />
      <LocalTime />
    </motion.main>
  );
}
