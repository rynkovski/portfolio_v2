"use client";
import {
  type Variants,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

type AnimationProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  triggerOnce?: boolean;
  useBlur?: boolean;
  threshold?: number;
};

export function AnimatedFadeUp({
  children,
  delay = 0,
  duration = 0.5,
  blurAmount = 10,
  triggerOnce = true,
  useBlur = true,
  threshold = 0.1,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: threshold });
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  if (prefersReducedMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 15,
        filter: useBlur ? `blur(${blurAmount}px)` : "none",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 15,
        filter: isVisible
          ? "blur(0px)"
          : useBlur
            ? `blur(${blurAmount}px)`
            : "none",
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        filter: { duration: duration * 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
}

export const fadeStaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const fadeStaggerItem: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};
