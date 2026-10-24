import { enderecoLinha1, notaFormatada, site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { metadadosPagina } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Destaque, Eyebrow, Heading, Prose } from "@/components/ui/Typography";

export const metadata = metadadosPagina({
  titulo: "A Academia",
  descricao:
    "Conheça a Academia GRID, na Vila Nova, em Joinville/SC: ambiente amplo, equipamentos modernos, limpeza e uma equipe atenciosa.",
  caminho: "/academia",
});

export default function AcademiaPage() {
  return (
    <>
      <PageHero
        trilha="A Academia"
        titulo={
          <>
            A <Destaque>Academia</Destaque>
          </>
        }
        descricao="Um espaço amplo e bem cuidado na Vila Nova, onde cada detalhe, da fachada às linhas de luz no teto, carrega a identidade da GRID."
      />

      <Section espaco="compacto" className="pb-0 md:pb-0">
        <Photo
          foto={fotos.predioEstacionamento}
          sizes="(max-width: 1240px) 100vw, 1160px"
          posicao="center 45%"
          className="surge aspect-[16/10] max-h-155 md:aspect-[21/9]"
        />
      </Section>

      <Section labelledBy="titulo-quem-somos">
        <div className="grid items-center gap-8 md:gap-[clamp(2rem,6vw,5.5rem)] lg:grid-cols-2">
          <div className="surge">
            <Eyebrow className="mb-5">Quem somos</Eyebrow>
            <Heading id="titulo-quem-somos">Uma academia com identidade própria.</Heading>
          </div>
          <Prose className="surge">
            <p>
              A <strong>{site.nome}</strong> fica na{" "}
              <strong>
                {enderecoLinha1}, no bairro {site.endereco.bairro}
              </strong>
              , em {site.endereco.cidade}. O prédio é fácil de reconhecer: painéis cinza, uma faixa preta com o letreiro GRID e a
              moldura laranja que se tornou a assinatura da marca.
            </p>
            <p>
              Dentro, o salão segue a mesma linguagem. O pé-direito alto, as linhas de LED laranja e brancas e os equipamentos em
              preto e laranja criam um ambiente de treino com energia e organização.
            </p>
            <p>
              Esse cuidado aparece nas avaliações:{" "}
              <strong>
                nota {notaFormatada} no Google, com {site.avaliacao.total} avaliações
              </strong>
              .
            </p>
          </Prose>
        </div>
      </Section>

      <Section tom="carvao" borda labelledBy="titulo-diferenciais">
        <SectionHeader
          id="titulo-diferenciais"
          rotulo="Diferenciais"
          titulo="O que faz a diferença na GRID."
          descricao="Pontos destacados com frequência por quem treina na academia nas avaliações públicas do Google."
        />
        <FeatureGrid />
      </Section>

      <Section>
        <SplitSection foto={fotos.corredorMusculacao} fotoPrimeiro proporcao="1/1">
          <Eyebrow className="mb-5">O ambiente</Eyebrow>
          <Heading className="mb-6">Luz, espaço e foco no treino.</Heading>
          <Prose className="mb-8">
            <p>
              As linhas de LED desenham o teto do salão e acompanham os espelhos nas paredes. O piso emborrachado e as máquinas
              alinhadas deixam tudo à vista e fácil de usar.
            </p>
            <p>No mezanino, a faixa laranja da academia repete a frase que resume a proposta da GRID.</p>
          </Prose>
          <figure className="border-l-3 border-laranja py-2 pl-7">
            <blockquote className="titulo text-[clamp(1.8rem,4vw,3rem)] leading-none italic">{site.slogan}</blockquote>
            <figcaption className="mt-3.5 text-[0.85rem] text-fraco">Frase da faixa no mezanino da academia</figcaption>
          </figure>
        </SplitSection>
      </Section>

      <CtaBand
        titulo={
          <>
            Conheça os espaços da <Destaque>GRID.</Destaque>
          </>
        }
        texto="Musculação, mezanino, equipamentos e mais: veja como a academia está organizada."
        acao={{ href: "/estrutura", rotulo: "Ver a estrutura", iconeFinal: "seta" }}
      />
    </>
  );
}
