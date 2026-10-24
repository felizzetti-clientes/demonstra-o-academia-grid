import type { NomeIcone } from "@/components/ui/Icon";

export interface Diferencial {
  titulo: string;
  texto: string;
  icone: NomeIcone;
}

/** Diferenciais destacados com frequência nas avaliações públicas do Google. */
export const diferenciais: readonly Diferencial[] = [
  {
    titulo: "Equipamentos modernos",
    texto: "Máquinas atuais e bem distribuídas pelo salão.",
    icone: "haltere",
  },
  {
    titulo: "Amplo e organizado",
    texto: "Espaço de sobra entre os aparelhos e uma disposição clara, para treinar sem aperto.",
    icone: "grade",
  },
  {
    titulo: "Ambiente limpo",
    texto: "Limpeza e conservação estão entre os pontos mais elogiados pelos alunos.",
    icone: "brilho",
  },
  {
    titulo: "Equipe atenciosa",
    texto: "Atendimento próximo e profissionais dispostos a ajudar no dia a dia.",
    icone: "equipe",
  },
  {
    titulo: "Espaço para crianças",
    texto: "Um espaço dedicado às crianças é citado pelos alunos. Consulte a equipe para saber como funciona.",
    icone: "criancas",
  },
];
