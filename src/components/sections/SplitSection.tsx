import type { ReactNode } from "react";
import type { Foto } from "@/content/fotos";
import { cn } from "@/lib/cn";
import { Photo } from "@/components/ui/Photo";

interface SplitSectionProps {
  foto: Foto;
  children: ReactNode;
  /** Foto à esquerda (no desktop). */
  fotoPrimeiro?: boolean;
  proporcao?: string;
}

/** Bloco de texto ao lado de uma foto. */
export function SplitSection({ foto, children, fotoPrimeiro = false, proporcao = "1/0.93" }: SplitSectionProps) {
  return (
    <div className="grid items-center gap-8 md:gap-[clamp(2rem,6vw,5.5rem)] lg:grid-cols-2">
      <div className={cn("surge", fotoPrimeiro && "lg:order-2")}>{children}</div>
      <Photo
        foto={foto}
        proporcao={proporcao}
        sizes="(max-width: 1024px) 100vw, 560px"
        className={cn("surge", fotoPrimeiro && "lg:order-1")}
      />
    </div>
  );
}
