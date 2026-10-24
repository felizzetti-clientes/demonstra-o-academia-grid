import { site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { metadadosPagina } from "@/lib/seo";
import { linkWhatsApp } from "@/lib/whatsapp";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Destaque, Eyebrow, Heading, Prose } from "@/components/ui/Typography";

export const metadata = metadadosPagina({
  titulo: "Contato e localização",
  descricao: `Academia GRID: ${site.endereco.logradouro}, ${site.endereco.numero}, ${site.endereco.bairro}, ${site.endereco.cidade}/${site.endereco.uf}. WhatsApp ${site.contato.telefoneExibicao} e Instagram ${site.contato.instagramUsuario}.`,
  caminho: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        trilha="Contato"
        titulo={<Destaque>Contato</Destaque>}
        descricao="Fale com a equipe, encontre o caminho até a academia e acompanhe a GRID nas redes."
      />

      <Section className="pt-10 md:pt-16">
        <h2 className="sr-only">Canais de contato e mapa</h2>
        <div className="grid items-start gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
          <div className="surge">
            <ContactChannels />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={linkWhatsApp("visita")} icone="whatsapp" className="w-full sm:w-auto">
                Agendar visita
              </ButtonLink>
              <ButtonLink href={site.links.rota} variante="linha" icone="rota" className="w-full sm:w-auto">
                Traçar rota
              </ButtonLink>
            </div>
          </div>
          <MapEmbed />
        </div>
      </Section>

      <Section tom="carvao" borda>
        <SplitSection foto={fotos.fachada} fotoPrimeiro>
          <Eyebrow className="mb-5">Como encontrar</Eyebrow>
          <Heading className="mb-6">Procure a moldura laranja.</Heading>
          <Prose className="mb-8">
            <p>
              A GRID fica no número <strong>
                {site.endereco.numero} da {site.endereco.logradouro}
              </strong>
              , na {site.endereco.bairro}. A fachada tem painéis cinza, a faixa preta com o letreiro GRID e a moldura laranja,
              com estacionamento em frente ao prédio.
            </p>
          </Prose>
          <ArrowLink href={site.links.rota}>Abrir rota no Google Maps</ArrowLink>
        </SplitSection>
      </Section>
    </>
  );
}
