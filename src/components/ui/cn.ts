import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina variantes y elimina clases de Tailwind conflictivas.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
