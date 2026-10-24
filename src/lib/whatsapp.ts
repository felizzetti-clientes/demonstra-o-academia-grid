import { site } from "@/config/site";

/** Mensagens pré-preenchidas usadas nos botões de WhatsApp. */
export const mensagens = {
  conhecer: "Olá! Gostaria de conhecer a Academia GRID.",
  visita: "Olá! Gostaria de agendar uma visita à Academia GRID.",
  informacoes: "Olá! Gostaria de mais informações sobre a Academia GRID.",
  planos: "Olá! Gostaria de conhecer os planos da Academia GRID.",
  matricula: "Olá! Gostaria de saber como faço a matrícula na Academia GRID.",
  horarios: "Olá! Quais são os horários de funcionamento da Academia GRID?",
  modalidades: "Olá! Quais modalidades e serviços a GRID oferece?",
  criancas: "Olá! Gostaria de saber como funciona o espaço para crianças da GRID.",
} as const;

export type MensagemWhatsApp = keyof typeof mensagens;

/** Link wa.me com o número oficial e, opcionalmente, uma mensagem pronta. */
export function linkWhatsApp(mensagem?: MensagemWhatsApp): string {
  const base = `https://wa.me/${site.contato.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagens[mensagem])}` : base;
}
