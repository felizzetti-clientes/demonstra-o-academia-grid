import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Representação tipográfica PROVISÓRIA da marca GRID (letras largas, inclinadas
 * e chanfradas, com a parte superior do "I" em laranja, como na fachada).
 * Não é o arquivo oficial do logotipo — substituir pelo vetor da academia.
 */
export function LogoMarca({ className, tom = "claro" }: { className?: string; tom?: "claro" | "escuro" }) {
  return (
    <span aria-hidden className={cn("inline-flex items-baseline gap-2.5 leading-none", className)}>
      <span
        className={cn(
          "inline-flex font-marca text-[1.9rem] font-bold tracking-[0.04em] italic",
          tom === "claro" ? "text-white" : "text-preto",
        )}
      >
        GR
        <span className="relative inline-block after:absolute after:inset-x-[18%] after:top-[0.14em] after:h-[0.22em] after:-skew-x-12 after:bg-laranja">
          I
        </span>
        D
      </span>
      <span className={cn("rotulo text-[0.62rem] tracking-[0.28em]", tom === "claro" ? "text-suave" : "text-preto")}>
        Academia
      </span>
    </span>
  );
}

export function LogoLink({ rotulo }: { rotulo: string }) {
  return (
    <Link href="/" aria-label={rotulo} className="inline-flex">
      <LogoMarca />
    </Link>
  );
}
