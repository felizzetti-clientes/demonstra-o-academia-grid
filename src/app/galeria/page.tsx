import { itensGaleria } from "@/content/galeria";
import { metadadosPagina } from "@/lib/seo";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Gallery } from "@/components/gallery/Gallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Destaque } from "@/components/ui/Typography";

export const metadata = metadadosPagina({
  titulo: "Galeria",
  descricao: "Fotos da Academia GRID em Joinville/SC: salão de musculação, mezanino, equipamentos e fachada.",
  caminho: "/galeria",
});

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        trilha="Galeria"
        titulo={<Destaque>Galeria</Destaque>}
        descricao="O salão, os equipamentos e a fachada da GRID. Toque em uma foto para ampliar."
      />

      <Section className="pt-10 md:pt-16">
        <h2 className="sr-only">Fotos da academia</h2>
        <Gallery itens={itensGaleria} />
        <p className="mt-2.5 text-[0.78rem] text-fraco">Fotos: Academia GRID (fontes públicas da academia).</p>
      </Section>

      <CtaBand
        titulo={
          <>
            Pessoalmente é <Destaque>ainda melhor.</Destaque>
          </>
        }
        texto="Agende uma visita e conheça o salão da GRID de perto."
        acao={{ href: linkWhatsApp("visita"), rotulo: "Agendar visita", icone: "whatsapp" }}
      />
    </>
  );
}
