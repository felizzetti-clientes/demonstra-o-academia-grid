import { enderecoLinha1, enderecoLinha2, site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { SmartLink } from "@/components/ui/Button";
import { Icon, type NomeIcone } from "@/components/ui/Icon";

interface Canal {
  icone: NomeIcone;
  rotulo: string;
  valor: string;
  href?: string;
  texto?: string;
  acoes?: readonly { href: string; rotulo: string }[];
}

const canais: readonly Canal[] = [
  {
    icone: "pin",
    rotulo: "Endereço",
    valor: enderecoLinha1,
    texto: `${enderecoLinha2} · CEP ${site.endereco.cep}`,
    acoes: [
      { href: site.links.rota, rotulo: "Como chegar" },
      { href: site.links.googleMaps, rotulo: "Ver no Google Maps" },
    ],
  },
  {
    icone: "whatsapp",
    rotulo: "WhatsApp",
    valor: site.contato.telefoneExibicao,
    href: linkWhatsApp("informacoes"),
    texto: "Atendimento pelo número publicado pela academia.",
  },
  { icone: "telefone", rotulo: "Telefone", valor: site.contato.telefoneExibicao, href: `tel:${site.contato.telefoneE164}` },
  {
    icone: "instagram",
    rotulo: "Instagram",
    valor: site.contato.instagramUsuario,
    href: site.contato.instagramUrl,
    texto: "Novidades e o dia a dia da academia.",
  },
  {
    icone: "relogio",
    rotulo: "Horário de funcionamento",
    // Dado pendente de confirmação: não exibir horários como fato.
    valor: "Consulte a equipe",
    texto: site.pendentes.horarios.orientacao,
    acoes: [{ href: linkWhatsApp("horarios"), rotulo: "Perguntar no WhatsApp" }],
  },
];

/** Lista dos canais oficiais de contato da academia. */
export function ContactChannels() {
  return (
    <ul className="grid gap-px border border-linha bg-linha">
      {canais.map((c) => (
        <li key={c.rotulo} className="flex items-start gap-4.5 bg-carvao px-6.5 py-6">
          <Icon name={c.icone} className="mt-0.5 size-6 shrink-0 text-laranja" />
          <div>
            <span className="rotulo mb-1 block text-[0.72rem] tracking-[0.18em] text-fraco">{c.rotulo}</span>
            {c.href ? (
              <SmartLink href={c.href} className="text-[1.05rem] font-medium text-white transition-colors hover:text-laranja">
                {c.valor}
              </SmartLink>
            ) : (
              <b className="text-[1.05rem] font-medium text-white">{c.valor}</b>
            )}
            {c.texto && <p className="mt-1 text-[0.92rem] text-suave">{c.texto}</p>}
            {c.acoes && (
              <div className="mt-3 flex flex-wrap gap-4">
                {c.acoes.map((a) => (
                  <SmartLink
                    key={a.href}
                    href={a.href}
                    className="border-b border-transparent text-[0.88rem] font-medium text-laranja hover:border-laranja"
                  >
                    {a.rotulo}
                  </SmartLink>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
