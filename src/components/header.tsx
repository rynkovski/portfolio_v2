"use client";

import { fadeStaggerItem } from "@/components/fadeup";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="mt-8 flex flex-col gap-1 pb-2">
      <motion.h1
        variants={fadeStaggerItem}
        className="text-sm font-medium tracking-[-0.00563rem] text-foreground"
      >
        Karol Rynkowski
      </motion.h1>
      <motion.p
        variants={fadeStaggerItem}
        className="text-sm font-[460] tracking-[-0.00563rem] text-muted-foreground"
      >
        Software Developer
      </motion.p>
    </header>
  );
}
