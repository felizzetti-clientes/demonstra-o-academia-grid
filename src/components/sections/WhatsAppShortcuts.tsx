import { linkWhatsApp, type MensagemWhatsApp } from "@/lib/whatsapp";
import { SmartLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export interface AtalhoWhatsApp {
  mensagem: MensagemWhatsApp;
  titulo: string;
  descricao: string;
}

/** Botões que abrem o WhatsApp oficial com a mensagem pronta para cada assunto. */
export function WhatsAppShortcuts({ atalhos }: { atalhos: readonly AtalhoWhatsApp[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {atalhos.map((a) => (
        <li key={a.mensagem}>
          <SmartLink
            href={linkWhatsApp(a.mensagem)}
            className="flex h-full items-center justify-between gap-4 border border-linha bg-preto px-6 py-5.5 transition-colors hover:border-laranja hover:bg-carvao"
          >
            <span>
              <b className="block font-semibold text-white">{a.titulo}</b>
              <small className="text-[0.85rem] text-fraco">{a.descricao}</small>
            </span>
            <Icon name="seta-diagonal" className="size-5.5 shrink-0 text-laranja" />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
