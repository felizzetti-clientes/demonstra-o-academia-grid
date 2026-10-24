import { enderecoLinha1, enderecoLinha2, navegacao, site } from "@/config/site";

export const dynamic = "force-static";

const descricoes: Record<string, string> = {
  "/": "Apresentação da academia, ambientes e avaliações.",
  "/academia": "Quem é a GRID, diferenciais citados nas avaliações e o ambiente.",
  "/estrutura": "Musculação, pesos livres, mezanino, espaço para crianças e estacionamento.",
  "/galeria": "Fotos do salão, dos equipamentos e da fachada.",
  "/planos": "Como se matricular; planos e valores são informados pela equipe.",
  "/contato": "Endereço, mapa, WhatsApp, telefone e Instagram.",
};

/** Resumo do site para assistentes de IA (llms.txt), gerado da configuração tipada. */
export function GET() {
  const paginas = navegacao
    .map((r) => `- [${r.rotulo}](${site.url}${r.href === "/" ? "" : r.href}): ${descricoes[r.href] ?? ""}`)
    .join("\n");

  const corpo = `# ${site.nome}

> ${site.descricao}

## Páginas
${paginas}

## Informações confirmadas
- Endereço: ${enderecoLinha1}, ${enderecoLinha2}, CEP ${site.endereco.cep}
- Telefone: ${site.contato.telefoneExibicao}
- Instagram: ${site.contato.instagramUrl}
- Google Maps: ${site.links.googleMaps}

## Informações não publicadas no site
- Horários de funcionamento, modalidades, planos e valores devem ser consultados diretamente com a academia.
`;

  return new Response(corpo, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
