import { notaFormatada, site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { linkWhatsApp } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Destaque, Eyebrow, Heading, Lead, Stripes } from "@/components/ui/Typography";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-16 md:pb-24">
      <Container className="grid items-center gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]">
        <div>
          <Eyebrow className="mb-6.5">{site.slogan}</Eyebrow>
          <Heading as="h1" tamanho="hero" className="mb-6.5">
            O centro de treinamento que <Destaque>Joinville</Destaque> merece.
          </Heading>
          <Lead className="mb-9">
            Um salão amplo de musculação, com máquinas modernas, iluminação marcante e uma equipe atenciosa. Na{" "}
            {site.endereco.logradouro}, {site.endereco.bairro}.
          </Lead>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={linkWhatsApp("visita")} icone="whatsapp" className="w-full sm:w-auto">
              Agende sua visita
            </ButtonLink>
            <ButtonLink href="/estrutura" variante="linha" className="w-full sm:w-auto">
              Conheça a estrutura
            </ButtonLink>
          </div>
        </div>

        <div className="relative max-w-160 lg:max-w-none">
          <Stripes className="absolute -top-1.5 right-4 z-10 lg:top-7 lg:right-auto lg:-left-5.5" />
          <Photo
            foto={fotos.salaoPrincipal}
            prioridade
            sizes="(max-width: 1024px) 100vw, 640px"
            className="chanfro-foto aspect-[4/3.4] lg:aspect-[4/4.3]"
          />
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3.5 border border-linha border-l-3 border-l-laranja bg-preto px-3.5 py-3 lg:bottom-9 lg:-left-7 lg:px-5 lg:py-4">
            <strong className="font-display text-[1.6rem] leading-none font-extrabold text-white [font-stretch:118%] lg:text-[2rem]">
              {notaFormatada}
              <span className="text-laranja" aria-hidden>
                ★
              </span>
            </strong>
            <span className="text-[0.8rem] leading-[1.35] text-suave">
              {site.avaliacao.total} avaliações
              <br />
              no Google
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
