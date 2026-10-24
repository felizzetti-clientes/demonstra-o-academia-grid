import { enderecoLinha1, site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { metadadosPagina } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { RatingPanel } from "@/components/sections/RatingPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { StepsList, type Passo } from "@/components/sections/StepsList";
import { WhatsAppShortcuts, type AtalhoWhatsApp } from "@/components/sections/WhatsAppShortcuts";
import { Section } from "@/components/ui/Section";
import { Destaque, Eyebrow, Heading, Prose } from "@/components/ui/Typography";

export const metadata = metadadosPagina({
  titulo: "Planos e matrícula",
  descricao:
    "Saiba como se matricular na Academia GRID em Joinville/SC. Consulte planos e condições diretamente com a equipe pelo WhatsApp.",
  caminho: "/planos",
});

const passos: readonly Passo[] = [
  { titulo: "Chame no WhatsApp", texto: `Fale com a equipe pelo ${site.contato.telefoneExibicao} e conte o que você procura.` },
  { titulo: "Conheça as opções", texto: "Receba as informações sobre planos, condições e horários direto da GRID." },
  { titulo: "Visite a academia", texto: `Venha até a ${enderecoLinha1}, conheça o salão de perto e comece a treinar.` },
];

const atalhos: readonly AtalhoWhatsApp[] = [
  { mensagem: "planos", titulo: "Planos e valores", descricao: "Opções disponíveis" },
  { mensagem: "matricula", titulo: "Matrícula", descricao: "Como começar" },
  { mensagem: "horarios", titulo: "Horários", descricao: "Funcionamento" },
  { mensagem: "visita", titulo: "Agendar visita", descricao: "Conhecer o salão" },
];

export default function PlanosPage() {
  return (
    <>
      {/* PENDENTE: planos, valores e condições oficiais (site.pendentes.planos). Não exibir preços sem confirmação. */}
      <PageHero
        trilha="Planos"
        titulo={
          <>
            Planos e <Destaque>matrícula</Destaque>
          </>
        }
        descricao={`${site.pendentes.planos.orientacao} Veja como é simples começar.`}
      />

      <Section labelledBy="titulo-passos">
        <SectionHeader
          id="titulo-passos"
          rotulo="Como começar"
          titulo="Três passos até o seu primeiro treino."
          descricao="Sem formulários: fale com a equipe pelo WhatsApp oficial da academia."
        />
        <StepsList passos={passos} />
      </Section>

      <Section tom="carvao" borda>
        <SplitSection foto={fotos.salaoMezanino} proporcao="1/1.05">
          <Eyebrow className="mb-5">Atendimento rápido</Eyebrow>
          <Heading className="mb-6">Escolha o assunto e envie sua mensagem.</Heading>
          <Prose className="mb-8">
            <p>Cada botão abre o WhatsApp da GRID com a mensagem pronta. É só enviar.</p>
          </Prose>
          <WhatsAppShortcuts atalhos={atalhos} />
        </SplitSection>
      </Section>

      <Section>
        <RatingPanel
          rotulo="Por que a GRID"
          titulo="O que você encontra ao se matricular."
          link={{ href: "/estrutura", rotulo: "Conhecer a estrutura" }}
        />
      </Section>
    </>
  );
}
