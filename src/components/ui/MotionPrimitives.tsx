"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export function FadeInUp({ children, className, ...props }: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return <motion.div {...fadeInUp} className={className} {...props}>{children}</motion.div>;
}

export function ArchFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative rounded-t-full rounded-b-3xl p-2.5 ${className}`}>{children}</div>;
}
