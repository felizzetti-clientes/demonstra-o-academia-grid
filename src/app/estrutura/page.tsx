import { site } from "@/config/site";
import { areas } from "@/content/estrutura";
import { metadadosPagina } from "@/lib/seo";
import { linkWhatsApp } from "@/lib/whatsapp";
import { AreaBlock } from "@/components/sections/AreaBlock";
import { PageHero } from "@/components/sections/PageHero";
import { SectionNav } from "@/components/sections/SectionNav";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Destaque, Eyebrow, Heading } from "@/components/ui/Typography";

export const metadata = metadadosPagina({
  titulo: "Estrutura e modalidades",
  descricao:
    "Salão de musculação, pesos livres, mezanino, espaço para crianças e estacionamento: conheça a estrutura da Academia GRID em Joinville/SC.",
  caminho: "/estrutura",
});

const itensNavegacao = [
  ...areas.map((a) => ({ id: a.id, rotulo: a.titulo })),
  { id: "modalidades", rotulo: "Modalidades" },
] as const;

export default function EstruturaPage() {
  return (
    <>
      <PageHero
        trilha="Estrutura"
        titulo={
          <>
            Estrutura e <Destaque>modalidades</Destaque>
          </>
        }
        descricao="Conheça os ambientes da GRID, da área de musculação ao mezanino, e o que você encontra em cada um deles."
      />

      <SectionNav itens={itensNavegacao} rotulo="Ambientes desta página" />

      <Container>
        {areas.map((area, i) => (
          <AreaBlock key={area.id} area={area} invertido={i % 2 === 1} />
        ))}
      </Container>

      <Section id="modalidades" labelledBy="titulo-modalidades" className="scroll-mt-[calc(var(--spacing-header)+4.5rem)]">
        {/* PENDENTE: lista de modalidades confirmadas pela academia (site.pendentes.modalidades). */}
        <div className="surge grid items-center gap-x-12 gap-y-6 border border-l-3 border-linha border-l-laranja bg-carvao p-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow>Modalidades e serviços</Eyebrow>
            <Heading id="titulo-modalidades" className="mt-4 text-[clamp(1.6rem,2.8vw,2.4rem)]">
              Quer saber o que a GRID oferece além da musculação?
            </Heading>
            <p className="mt-3 max-w-[60ch] text-suave">
              {site.pendentes.modalidades.orientacao} Envie sua dúvida pelo WhatsApp e receba as informações atualizadas.
            </p>
          </div>
          <ButtonLink href={linkWhatsApp("modalidades")} icone="whatsapp" className="w-full sm:w-auto">
            Consultar modalidades
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
