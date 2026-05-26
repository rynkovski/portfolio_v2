"use client";

import { fadeStaggerItem } from "@/components/fadeup";
import { motion } from "framer-motion";

const linkClass =
  "underline underline-offset-[3px] decoration-foreground/30 hover:decoration-foreground transition-colors";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mt-6 flex flex-col gap-4 text-sm font-[460] leading-5 tracking-[-0.00563rem] text-foreground"
    >
      <motion.p variants={fadeStaggerItem}>
        I&apos;m a product-focused software developer who loves shipping things
        from zero to one.
      </motion.p>
      <motion.p variants={fadeStaggerItem}>
        I&apos;ve built web and mobile products solo and with remote teams
        across time zones, from architecting mobile apps to co-creating an open
        source component library.
      </motion.p>
      <motion.p variants={fadeStaggerItem}>
        When I&apos;m not pushing pixels, I&apos;m probably traveling somewhere
        on the other side of the globe, hanging out with my dog, or hunting for
        the perfect cup of coffee.
      </motion.p>
      <motion.p variants={fadeStaggerItem}>
        You can find me on{" "}
        <a
          href="https://github.com/rynkovski"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://linkedin.com/in/karol-rynkowski"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        , or reach me via{" "}
        <a href="mailto:rynkowski.it@gmail.com" className={linkClass}>
          email
        </a>
        .
      </motion.p>
      <motion.p variants={fadeStaggerItem}>
        Want to chat?{" "}
        <a
          href="https://cal.com/rynkovski"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Book a call
        </a>
        .
      </motion.p>
    </section>
  );
}
