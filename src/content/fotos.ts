/**
 * Catálogo das fotografias reais da Academia GRID (public/images).
 * Origem: capturas das fontes públicas da academia fornecidas no briefing.
 * VALIDAR: substituir pelos arquivos originais em alta resolução quando disponíveis.
 */

export type CategoriaFoto = "salao" | "fachada";

export interface Foto {
  src: `/images/${string}`;
  width: number;
  height: number;
  alt: string;
  legenda: string;
  categoria: CategoriaFoto;
}

export const fotos = {
  salaoPrincipal: {
    src: "/images/salao-principal.jpg",
    width: 832,
    height: 852,
    alt: "Salão de musculação da Academia GRID com linhas de LED laranja e brancas no teto e o mezanino ao fundo",
    legenda: "Salão principal sob as linhas de LED",
    categoria: "salao",
  },
  salaoMezanino: {
    src: "/images/salao-mezanino.jpg",
    width: 718,
    height: 864,
    alt: "Vista do alto do salão da GRID, com alunos treinando e o mezanino com a faixa laranja da academia",
    legenda: "Vista do alto do salão, com o mezanino e a faixa da GRID",
    categoria: "salao",
  },
  corredorMusculacao: {
    src: "/images/corredor-musculacao.jpg",
    width: 881,
    height: 882,
    alt: "Corredor de musculação com máquinas laranja e pretas, luminárias em X no teto e espelhos com contorno de LED",
    legenda: "Corredor de musculação com luminárias em X no teto",
    categoria: "salao",
  },
  maquinasCimerian: {
    src: "/images/maquinas-cimerian.jpg",
    width: 892,
    height: 838,
    alt: "Máquinas articuladas da marca Cimerian e o letreiro luminoso GRID na parede do salão",
    legenda: "Máquinas articuladas e o letreiro luminoso GRID",
    categoria: "salao",
  },
  fachada: {
    src: "/images/fachada.jpg",
    width: 924,
    height: 863,
    alt: "Fachada da Academia GRID na Rua XV de Novembro, 5992, com o letreiro GRID em branco sobre faixa preta e moldura laranja",
    legenda: "Fachada da GRID na Rua XV de Novembro, 5992",
    categoria: "fachada",
  },
  predioEstacionamento: {
    src: "/images/predio-estacionamento.jpg",
    width: 696,
    height: 897,
    alt: "Prédio da Academia GRID ao entardecer, com fachada cinza e preta, detalhes em laranja e estacionamento em frente",
    legenda: "Prédio da GRID ao entardecer, com estacionamento em frente",
    categoria: "fachada",
  },
} as const satisfies Record<string, Foto>;

export type ChaveFoto = keyof typeof fotos;
