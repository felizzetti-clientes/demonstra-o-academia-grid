import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Heading, Lead } from "@/components/ui/Typography";

interface PageHeroProps {
  /** Nome da página na trilha de navegação. */
  trilha: string;
  titulo: ReactNode;
  descricao: string;
}

/** Topo das páginas internas: trilha, título e descrição. */
export function PageHero({ trilha, titulo, descricao }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-linha pt-14 pb-10 md:pt-24 md:pb-16">
      <div aria-hidden className="listras-fundo pointer-events-none absolute inset-y-0 -right-15 w-3/5 md:w-[38%]" />
      <Container className="relative grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <nav aria-label="Você está em" className="mb-5.5 flex gap-2.5 text-[0.82rem] text-fraco">
            <Link href="/" className="transition-colors hover:text-laranja">
              Início
            </Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-suave">
              {trilha}
            </span>
          </nav>
          <Heading as="h1" tamanho="pagina">
            {titulo}
          </Heading>
        </div>
        <Lead className="text-suave">{descricao}</Lead>
      </Container>
    </section>
  );
}
