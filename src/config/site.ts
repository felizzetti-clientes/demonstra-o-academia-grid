/**
 * Configuração central da Academia GRID.
 *
 * Todos os dados comerciais do site vêm daqui. Itens com `status: "pendente"`
 * ainda precisam ser confirmados com a academia e não são exibidos como fato.
 * Fonte dos dados confirmados: briefing do projeto + capturas do Google Maps
 * e do Instagram da academia.
 */

export type StatusDado = "confirmado" | "pendente";

export interface DadoPendente {
  status: "pendente";
  /** Orientação exibida ao visitante enquanto o dado não é confirmado. */
  orientacao: string;
}

export interface Rota {
  href: `/${string}`;
  rotulo: string;
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const site = {
  nome: "Academia GRID",
  nomeCurto: "GRID",
  slogan: "Stronger than yesterday",
  /** Frase usada na comunicação do Instagram da academia. */
  posicionamento: "O centro de treinamento que Joinville merece.",
  descricao:
    "Academia GRID, na Rua XV de Novembro, Vila Nova, Joinville/SC. Salão de musculação amplo, equipamentos modernos e equipe atenciosa.",

  /** Domínio definitivo (NEXT_PUBLIC_SITE_URL). Ainda não definido para este projeto. */
  url: siteUrl,
  /** Enquanto for protótipo privado, o site inteiro fica com noindex. */
  indexavel: process.env.NEXT_PUBLIC_INDEXAR === "true",

  endereco: {
    logradouro: "Rua XV de Novembro",
    numero: "5992",
    bairro: "Vila Nova",
    cidade: "Joinville",
    uf: "SC",
    cep: "89237-000",
    geo: { lat: -26.2870652, lng: -48.9002293 },
  },

  contato: {
    /** Número publicado na ficha do Google Maps. VALIDAR: se atende pelo WhatsApp. */
    telefoneExibicao: "(47) 99170-0039",
    telefoneE164: "+5547991700039",
    whatsapp: "5547991700039",
    instagramUsuario: "@academia.grid",
    instagramUrl: "https://www.instagram.com/academia.grid/",
  },

  links: {
    googleMaps:
      "https://www.google.com/maps/place/Academia+GRID/@-26.2870652,-48.9002293,17z/data=!3m1!4b1!4m6!3m5!1s0x94dea52dec64d797:0xa9afc0c71bc1ae90!8m2!3d-26.2870652!4d-48.9002293!16s%2Fg%2F11tg9dxcns",
    rota: "https://www.google.com/maps/dir/?api=1&destination=-26.2870652%2C-48.9002293",
    mapaEmbed: "https://maps.google.com/maps?q=-26.2870652,-48.9002293&z=16&hl=pt-BR&output=embed",
  },

  /** Avaliação pública observada no Google. VALIDAR: atualizar antes de publicar. */
  avaliacao: {
    nota: 4.9,
    total: 570,
    fonte: "Google Maps",
  },

  /** Pontos destacados nas avaliações públicas do Google. */
  temasAvaliacoes: [
    "Equipamentos modernos",
    "Estrutura ampla e organizada",
    "Ambiente limpo",
    "Equipe atenciosa",
    "Espaço para crianças",
  ],

  pendentes: {
    horarios: {
      status: "pendente",
      orientacao: "Confirme os horários atualizados pelo WhatsApp ou na página da GRID no Google Maps.",
    },
    modalidades: {
      status: "pendente",
      orientacao: "Aulas, acompanhamento e demais serviços são apresentados pela equipe.",
    },
    planos: {
      status: "pendente",
      orientacao: "Os planos e condições são apresentados diretamente pela equipe, sempre com valores atualizados.",
    },
  } satisfies Record<string, DadoPendente>,

  creditos: "Protótipo demonstrativo desenvolvido por Felizzetti Studios",
} as const;

export const navegacao: readonly Rota[] = [
  { href: "/", rotulo: "Início" },
  { href: "/academia", rotulo: "A Academia" },
  { href: "/estrutura", rotulo: "Estrutura" },
  { href: "/galeria", rotulo: "Galeria" },
  { href: "/planos", rotulo: "Planos" },
  { href: "/contato", rotulo: "Contato" },
] as const;

export const enderecoLinha1 = `${site.endereco.logradouro}, ${site.endereco.numero}`;
export const enderecoLinha2 = `${site.endereco.bairro} · ${site.endereco.cidade} – ${site.endereco.uf}`;
export const notaFormatada = site.avaliacao.nota.toLocaleString("pt-BR", { minimumFractionDigits: 1 });
