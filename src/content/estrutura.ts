import { fotos, type Foto } from "./fotos";
import { site } from "@/config/site";
import type { MensagemWhatsApp } from "@/lib/whatsapp";

export interface Area {
  id: string;
  numero: string;
  titulo: string;
  texto: string;
  itens?: readonly string[];
  /** Foto real do ambiente; sem ela, exibe um cartão informativo. */
  foto?: Foto;
  cartao?: { titulo: string; texto: string };
  acao?: { tipo: "link"; href: string; rotulo: string } | { tipo: "whatsapp"; mensagem: MensagemWhatsApp; rotulo: string };
  /** Itens identificados visualmente nas fotos que precisam ser confirmados. */
  validar?: string;
}

/** Ambientes da GRID apresentados na página Estrutura. */
export const areas: readonly Area[] = [
  {
    id: "musculacao",
    numero: "01",
    titulo: "Musculação",
    texto:
      "O coração da GRID. Um salão amplo, com máquinas articuladas em preto e laranja organizadas em fileiras, para que cada aluno encontre o aparelho que precisa sem disputa por espaço.",
    itens: [
      "Máquinas articuladas com carga por anilhas",
      "Equipamentos da marca Cimerian",
      "Espelhos com contorno de LED nas paredes",
      "Piso emborrachado em todo o salão",
    ],
    foto: fotos.corredorMusculacao,
    validar: "Marca e tipos de equipamentos identificados visualmente nas fotos.",
  },
  {
    id: "pesos-livres",
    numero: "02",
    titulo: "Pesos livres",
    texto:
      "Para o treino de força, o salão reúne bancos, anilhas e suportes de halteres próximos às máquinas, com espaço livre ao redor de cada estação.",
    itens: ["Suportes de halteres", "Bancos de treino", "Anilhas e estações de carga"],
    foto: fotos.salaoPrincipal,
  },
  {
    id: "mezanino",
    numero: "03",
    titulo: "Mezanino",
    texto:
      "Do alto, o mezanino tem vista para todo o salão e reúne equipamentos aeróbicos. Na frente dele está a faixa laranja com a frase que resume a GRID: Stronger than yesterday.",
    foto: fotos.salaoMezanino,
    acao: { tipo: "link", href: "/galeria", rotulo: "Ver mais fotos" },
    validar: "Equipamentos do mezanino (aparentam ser aeróbicos nas fotos).",
  },
  {
    id: "criancas",
    numero: "04",
    titulo: "Espaço para crianças",
    texto:
      "Um diferencial para quem precisa levar os filhos junto. Para saber como o espaço funciona, a faixa de idade e os horários, fale diretamente com a equipe.",
    cartao: {
      titulo: "Treine com tranquilidade",
      texto: "Alunos destacam nas avaliações que a GRID tem um espaço dedicado às crianças.",
    },
    acao: { tipo: "whatsapp", mensagem: "criancas", rotulo: "Perguntar à equipe" },
    validar: "Funcionamento do espaço e foto real do ambiente.",
  },
  {
    id: "estacionamento",
    numero: "05",
    titulo: "Estacionamento",
    texto:
      "Em frente ao prédio, uma área de estacionamento facilita a chegada de quem vai de carro ou de moto até a Rua XV de Novembro.",
    foto: fotos.predioEstacionamento,
    acao: { tipo: "link", href: site.links.rota, rotulo: "Traçar rota no Google Maps" },
    validar: "Se o estacionamento é exclusivo para alunos.",
  },
];
