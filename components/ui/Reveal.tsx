"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Apparition au scroll : fade-in + léger translate-up.
 * Respecte prefers-reduced-motion. `delay` permet le stagger manuel.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: MotionBlockProps & {
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Conteneur avec stagger automatique des enfants directs.
 */
export function StaggerGroup({ children, className }: MotionBlockProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionBlockProps) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } } };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
