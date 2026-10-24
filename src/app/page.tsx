import type { Metadata } from "next";
import { site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { linkWhatsApp } from "@/lib/whatsapp";
import { AmbientesTeaser } from "@/components/sections/AmbientesTeaser";
import { BrandBand } from "@/components/sections/BrandBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { HomeHero } from "@/components/sections/HomeHero";
import { NavCards, type NavCard } from "@/components/sections/NavCards";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { RatingPanel } from "@/components/sections/RatingPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { ArrowLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Destaque, Eyebrow, Heading, Prose } from "@/components/ui/Typography";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const proximosPassos: readonly NavCard[] = [
  { href: "/galeria", rotulo: "Galeria", titulo: "Veja a GRID por dentro", texto: "Fotos do salão, dos equipamentos e da fachada.", acao: "Abrir galeria" },
  { href: "/planos", rotulo: "Planos", titulo: "Como se matricular", texto: "Conheça as opções de plano diretamente com a equipe.", acao: "Ver como funciona" },
  { href: "/contato", rotulo: "Contato", titulo: "Como chegar", texto: "Endereço, mapa e canais oficiais da academia.", acao: "Falar com a GRID" },
];

export default function InicioPage() {
  return (
    <>
      <HomeHero />
      <QuickFacts />

      <Section>
        <SplitSection foto={fotos.fachada}>
          <Eyebrow className="mb-5">A GRID</Eyebrow>
          <Heading className="mb-6">Feita para quem quer evoluir a cada treino.</Heading>
          <Prose className="mb-8">
            <p>
              Da fachada ao salão, a GRID tem uma identidade forte: preto, grafite e o laranja da marca, com linhas de luz que
              atravessam o teto e equipamentos organizados em fileiras amplas.
            </p>
            <p>
              Quem treina destaca nas avaliações os <strong>equipamentos modernos</strong>, a{" "}
              <strong>estrutura ampla e limpa</strong> e o <strong>atendimento atencioso</strong> da equipe.
            </p>
          </Prose>
          <ArrowLink href="/academia">Conheça a academia</ArrowLink>
        </SplitSection>
      </Section>

      <Section tom="carvao" borda labelledBy="titulo-ambientes">
        <SectionHeader
          id="titulo-ambientes"
          rotulo="Estrutura"
          titulo="Ambientes que você vai querer conhecer."
          descricao="Um passeio rápido pelos espaços da GRID. Veja cada ambiente em detalhes na página de estrutura."
        />
        <AmbientesTeaser />
      </Section>

      <BrandBand />

      <Section>
        <RatingPanel
          rotulo="Avaliações"
          titulo="Quem treina, recomenda."
          introducao="Os pontos mais lembrados por quem já treina na GRID:"
          link={{ href: site.links.googleMaps, rotulo: "Ler as avaliações no Google" }}
        />
      </Section>

      <Section espaco="sem-topo">
        <h2 className="sr-only">Explore o site</h2>
        <NavCards cartoes={proximosPassos} />
      </Section>

      <CtaBand
        titulo={
          <>
            Seu próximo treino é na <Destaque>GRID.</Destaque>
          </>
        }
        texto="Chame a equipe no WhatsApp, tire suas dúvidas e agende uma visita para conhecer a academia."
        acao={{ href: linkWhatsApp("visita"), rotulo: "Agendar visita", icone: "whatsapp" }}
      />
    </>
  );
}
