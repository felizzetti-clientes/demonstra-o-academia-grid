import type { ReactNode } from "react";
import { Eyebrow, Heading } from "@/components/ui/Typography";

interface SectionHeaderProps {
  rotulo: string;
  titulo: ReactNode;
  descricao?: string;
  id?: string;
}

/** Cabeçalho de seção: rótulo + título à esquerda, descrição à direita. */
export function SectionHeader({ rotulo, titulo, descricao, id }: SectionHeaderProps) {
  return (
    <div className="mb-10 grid items-end gap-x-16 gap-y-6 md:mb-16 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <Eyebrow className="mb-4.5">{rotulo}</Eyebrow>
        <Heading id={id}>{titulo}</Heading>
      </div>
      {descricao && <p className="max-w-[46ch] text-suave">{descricao}</p>}
    </div>
  );
}
