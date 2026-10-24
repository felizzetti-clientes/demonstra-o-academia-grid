import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Rótulo com barras diagonais, usado acima dos títulos. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("rotulo inline-flex items-center gap-3 text-[0.8rem] text-laranja", className)}>
      <span aria-hidden className="listras-finas h-2.5 w-8.5 shrink-0" />
      {children}
    </span>
  );
}

const tamanhos = {
  hero: "text-[clamp(2.3rem,4.7vw,4.5rem)] [font-stretch:110%]",
  pagina: "text-[clamp(2.4rem,6vw,5rem)]",
  secao: "text-[clamp(2rem,4.4vw,3.6rem)]",
  bloco: "text-[clamp(1.9rem,3.4vw,3rem)]",
  card: "text-[clamp(1.3rem,2.2vw,1.75rem)] leading-[1.05]",
} as const;

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  tamanho?: keyof typeof tamanhos;
  id?: string;
  className?: string;
}

/** Título na tipografia larga da marca. Use <Destaque> para a palavra em laranja. */
export function Heading({ children, as: Tag = "h2", tamanho = "secao", id, className }: HeadingProps) {
  return (
    <Tag id={id} className={cn("titulo text-balance", tamanhos[tamanho], className)}>
      {children}
    </Tag>
  );
}

export function Destaque({ children }: { children: ReactNode }) {
  return <em className="text-laranja italic">{children}</em>;
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("max-w-[58ch] text-[clamp(1.05rem,1.5vw,1.2rem)] text-[#d3d4d8]", className)}>{children}</p>;
}

/** Bloco de texto corrido com parágrafos em tom suave. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-4 text-suave [&_p]:max-w-[62ch] [&_strong]:font-semibold [&_strong]:text-texto", className)}>
      {children}
    </div>
  );
}

/** Faixa de barras diagonais decorativa. */
export function Stripes({ className }: { className?: string }) {
  return <span aria-hidden className={cn("listras block h-3 w-35", className)} />;
}
