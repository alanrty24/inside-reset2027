"use client";

import { AnimatePresence, motion } from "motion/react";
import { RiCloseLine } from "react-icons/ri";
import { policiesData } from "@/data/policiesData";
import { useEffect, useState } from "react";

export type PolicyKey = keyof typeof policiesData;

export default function LegalPolicyModal({ active, onClose }: { active: PolicyKey | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", handleKey); };
  }, [active, onClose]);

  if (!mounted) return null;
  return (
    <AnimatePresence>
      {active && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button aria-label="Cerrar políticas" className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" onClick={onClose} />
          <motion.section role="dialog" aria-modal="true" aria-labelledby="policy-title" className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-primary-container/25 bg-surface p-6 shadow-2xl sm:p-8" initial={{ y: 24, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.98 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
            <header className="flex items-start justify-between border-b border-primary-container/20 pb-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Marco legal • INSIDE 2027</p><h2 id="policy-title" className="mt-2 font-serif text-3xl text-on-surface">{policiesData[active].title}</h2></div><button aria-label="Cerrar" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-container text-on-surface"><RiCloseLine size={24} /></button></header>
            <div className="max-h-[55vh] overflow-y-auto py-6"><p className="text-base leading-7 text-on-surface-variant">{policiesData[active].body}</p></div>
            <footer className="flex justify-end border-t border-primary-container/20 pt-5"><button onClick={onClose} className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary">Entendido</button></footer>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
