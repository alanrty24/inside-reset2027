"use client";

import type { PolicyKey } from "@/components/modals/LegalPolicyModal";

export default function Footer({
  openPolicy,
}: {
  openPolicy: (key: PolicyKey) => void;
}) {
  return (
    <footer className="bg-surface-container-low px-5 py-14 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="font-serif text-2xl text-tertiary">
            INSIDE: Reset 2027
          </p>
          <p className="mt-2 text-sm text-on-surface-variant">
            Santuario somático y bienestar consciente.
          </p>
        </div>
        <nav
          aria-label="Políticas"
          className="flex flex-wrap justify-center gap-6 text-sm font-medium text-on-surface-variant"
        >
          <button onClick={() => openPolicy("navegacion")}>Navegación</button>
          <button onClick={() => openPolicy("acceso")}>Acceso</button>
          <button onClick={() => openPolicy("cookies")}>Cookies</button>
        </nav>
        <p className="text-sm text-on-surface-variant">© 2027 INSIDE</p>
      </div>
    </footer>
  );
}
