"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { RiArrowRightLine, RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const logo = "/images/icono1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    ["Experiencia", "#experiencia"],
    ["¿Es para mí?", "#es-para-mi"],
    ["3 Pasos", "#pasos"],
    ["Preguntas frecuentes", "#faq"],
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10 lg:px-16">
          <a href="#" aria-label="Ir al inicio">
            <Image
              src={logo}
              alt="INSIDE"
              width={118}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegación principal"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#entradas"
              className="hidden lg:flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-on-secondary shadow-[0_4px_16px_rgba(144,75,46,0.15)] transition-colors hover:bg-secondary-container"
            >
              <span>Reservar</span>
              <RiArrowRightLine />
            </a>
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-primary lg:hidden"
            >
              <RiMenuLine size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Cerrar menú"
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="absolute right-0 top-0 flex h-full w-[320px] max-w-[85vw] flex-col justify-between bg-surface p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="flex items-center justify-between border-b border-primary-container/20 pb-5">
                  <Image
                    src={logo}
                    alt="INSIDE"
                    width={118}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    aria-label="Cerrar menú"
                    onClick={() => setOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container text-on-surface"
                  >
                    <RiCloseLine size={24} />
                  </button>
                </div>
                <nav className="flex flex-col gap-3 pt-6">
                  {links.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="py-2 font-serif text-2xl text-on-surface hover:text-primary"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="border-t border-primary-container/20 pt-5">
                <a
                  href="#entradas"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-on-secondary"
                >
                  Quiero obtener mi entrada
                  <RiArrowRightLine />
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
