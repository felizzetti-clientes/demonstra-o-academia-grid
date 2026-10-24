import Image from "next/image";
import type { CSSProperties } from "react";
import type { Foto } from "@/content/fotos";
import { cn } from "@/lib/cn";

interface PhotoProps {
  foto: Foto;
  /** Tamanhos para o srcset responsivo do next/image. */
  sizes: string;
  /** Proporção da moldura (ex.: "4/3"). Sem ela, a moldura ocupa a altura do pai. */
  proporcao?: string;
  prioridade?: boolean;
  className?: string;
  imgClassName?: string;
  posicao?: string;
}

/** Foto real da academia em moldura com recorte (object-fit: cover). */
export function Photo({ foto, sizes, proporcao, prioridade, className, imgClassName, posicao }: PhotoProps) {
  const estilo: CSSProperties = proporcao ? { aspectRatio: proporcao } : {};
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-faixa after:pointer-events-none after:absolute after:inset-0 after:border after:border-white/6",
        className,
      )}
      style={estilo}
    >
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes={sizes}
        priority={prioridade}
        quality={85}
        className={cn("object-cover", imgClassName)}
        style={posicao ? { objectPosition: posicao } : undefined}
      />
    </div>
  );
}
