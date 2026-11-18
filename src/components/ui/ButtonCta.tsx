import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/components/ui/cn";

export default function ButtonCta({
  children = "Quiero obtener mi entrada",
  href = "#entradas",
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-on-secondary shadow-[0_12px_32px_rgba(144,75,46,0.22)] transition-colors hover:bg-secondary-container",
        className,
      )}
    >
      <span>{children}</span>
      <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}
