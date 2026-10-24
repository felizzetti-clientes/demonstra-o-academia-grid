import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Fundo da seção. */
  tom?: "preto" | "carvao";
  /** Linha divisória no topo. */
  borda?: boolean;
  /** Espaçamento vertical. */
  espaco?: "padrao" | "compacto" | "sem-topo";
  labelledBy?: string;
  className?: string;
  containerClassName?: string;
}

const espacos = {
  padrao: "py-18 md:py-24 lg:py-32",
  compacto: "py-10 md:py-14",
  "sem-topo": "pb-18 md:pb-24 lg:pb-32",
} as const;

export function Section({
  children,
  id,
  tom = "preto",
  borda = false,
  espaco = "padrao",
  labelledBy,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative",
        tom === "carvao" ? "bg-carvao" : "bg-preto",
        borda && "border-t border-linha",
        espacos[espaco],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
