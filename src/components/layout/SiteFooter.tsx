import { enderecoLinha1, enderecoLinha2, site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { LogoLink } from "@/components/brand/Logo";
import { SmartLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FooterNav } from "./FooterNav";

const tituloColuna = "rotulo mb-4.5 text-[0.78rem] text-white";
const linkRodape = "text-sm text-suave transition-colors hover:text-laranja";

export function SiteFooter() {
  return (
    <footer className="bg-preto">
      <div aria-hidden className="led opacity-90" />
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoLink rotulo="Academia GRID — voltar ao início" />
            <p className="mt-4.5 max-w-[30ch] text-sm text-suave">
              Academia na {site.endereco.bairro}, em {site.endereco.cidade}, Santa Catarina.
            </p>
            <p className="titulo mt-4 text-sm tracking-[0.04em] text-laranja italic">{site.slogan}</p>
          </div>

          <nav aria-labelledby="rodape-navegacao">
            <h2 id="rodape-navegacao" className={tituloColuna}>
              Navegação
            </h2>
            <FooterNav />
          </nav>

          <div>
            <h2 className={tituloColuna}>Contato</h2>
            <ul className="space-y-2.5">
              <li>
                <SmartLink href={linkWhatsApp("informacoes")} className={linkRodape}>
                  WhatsApp
                </SmartLink>
              </li>
              <li>
                <SmartLink href={`tel:${site.contato.telefoneE164}`} className={linkRodape}>
                  {site.contato.telefoneExibicao}
                </SmartLink>
              </li>
              <li>
                <SmartLink href={site.contato.instagramUrl} className={linkRodape}>
                  Instagram {site.contato.instagramUsuario}
                </SmartLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={tituloColuna}>Endereço</h2>
            <address className="text-sm text-suave not-italic">
              {enderecoLinha1}
              <br />
              {enderecoLinha2}
              <br />
              CEP {site.endereco.cep}
            </address>
            <SmartLink href={site.links.rota} className={`${linkRodape} mt-3.5 inline-block`}>
              Como chegar →
            </SmartLink>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-linha pt-5.5 pb-7 text-xs text-fraco">
          <span>
            © {new Date().getFullYear()} {site.nome}
          </span>
          <span>{site.creditos}</span>
        </div>
      </Container>
    </footer>
  );
}
