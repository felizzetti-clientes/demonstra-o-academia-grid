import { enderecoLinha1, site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { SmartLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type NomeIcone } from "@/components/ui/Icon";

const fatos: readonly { icone: NomeIcone; rotulo: string; valor: string; href?: string }[] = [
  { icone: "pin", rotulo: "Endereço", valor: `${enderecoLinha1} · ${site.endereco.bairro}` },
  { icone: "telefone", rotulo: "WhatsApp", valor: site.contato.telefoneExibicao, href: linkWhatsApp("informacoes") },
  { icone: "instagram", rotulo: "Instagram", valor: site.contato.instagramUsuario, href: site.contato.instagramUrl },
];

/** Faixa com endereço, WhatsApp e Instagram logo abaixo do hero. */
export function QuickFacts() {
  return (
    <section aria-label="Informações rápidas" className="border-y border-linha bg-carvao">
      <Container as="ul" className="grid lg:grid-cols-3">
        {fatos.map((f, i) => (
          <li
            key={f.rotulo}
            className={
              i === 0
                ? "flex items-center gap-3.5 py-4.5 lg:py-5.5 lg:pr-6"
                : "flex items-center gap-3.5 border-t border-linha py-4.5 lg:border-t-0 lg:border-l lg:py-5.5 lg:pl-6"
            }
          >
            <Icon name={f.icone} className="size-5.5 shrink-0 text-laranja" />
            <div>
              <span className="rotulo block text-[0.7rem] tracking-[0.18em] text-fraco">{f.rotulo}</span>
              {f.href ? (
                <SmartLink href={f.href} className="font-medium text-white transition-colors hover:text-laranja">
                  {f.valor}
                </SmartLink>
              ) : (
                <span className="font-medium text-white">{f.valor}</span>
              )}
            </div>
          </li>
        ))}
      </Container>
    </section>
  );
}
