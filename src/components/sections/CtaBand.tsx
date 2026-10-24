import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { NomeIcone } from "@/components/ui/Icon";
import { Heading, Stripes } from "@/components/ui/Typography";

interface CtaBandProps {
  titulo: ReactNode;
  texto: string;
  acao: { href: string; rotulo: string; icone?: NomeIcone; iconeFinal?: NomeIcone };
}

/** Faixa de chamada para ação no fim das páginas. */
export function CtaBand({ titulo, texto, acao }: CtaBandProps) {
  return (
    <section className="border-t border-linha bg-carvao">
      <Container className="grid items-center gap-x-14 gap-y-8 py-16 md:py-26 lg:grid-cols-[1.3fr_auto]">
        <div>
          <Stripes className="mb-7" />
          <Heading className="max-w-[16ch]">{titulo}</Heading>
          <p className="mt-4.5 max-w-[48ch] text-suave">{texto}</p>
        </div>
        <ButtonLink href={acao.href} icone={acao.icone} iconeFinal={acao.iconeFinal} className="w-full sm:w-auto">
          {acao.rotulo}
        </ButtonLink>
      </Container>
    </section>
  );
}
