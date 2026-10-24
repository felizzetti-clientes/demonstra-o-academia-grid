import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Lead } from "@/components/ui/Typography";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <Section className="min-h-[60vh]">
      <Eyebrow className="mb-6">Erro 404</Eyebrow>
      <Heading as="h1" tamanho="pagina" className="mb-6">
        Página não encontrada.
      </Heading>
      <Lead className="mb-9 text-suave">O endereço que você acessou não existe ou foi alterado.</Lead>
      <ButtonLink href="/" iconeFinal="seta">
        Voltar ao início
      </ButtonLink>
    </Section>
  );
}
