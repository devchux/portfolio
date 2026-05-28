"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const viewport = { once: true, margin: "-80px" };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const softContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export function MotionPage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate="show"
      className={className}
      initial="hidden"
      variants={softContainer}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <motion.section
      aria-labelledby={labelledBy}
      className={className}
      id={id}
      initial="hidden"
      variants={fadeUp}
      viewport={viewport}
      whileInView="show"
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({
  as = "div",
  children,
  className,
}: {
  as?: "article" | "div" | "li" | "p" | "aside";
  children: ReactNode;
  className?: string;
}) {
  const Component = motion[as];

  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}

export function MotionMount({
  as = "div",
  children,
  className,
}: {
  as?: "aside" | "div" | "header";
  children: ReactNode;
  className?: string;
}) {
  const Component = motion[as];

  return (
    <Component
      animate="show"
      className={className}
      initial="hidden"
      variants={fadeUp}
    >
      {children}
    </Component>
  );
}
