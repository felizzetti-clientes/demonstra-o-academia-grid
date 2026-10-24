import type { Area } from "@/content/estrutura";
import { linkWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Heading } from "@/components/ui/Typography";

/** Um ambiente da página Estrutura, alternando a foto entre esquerda e direita. */
export function AreaBlock({ area, invertido }: { area: Area; invertido: boolean }) {
  const tituloId = `titulo-${area.id}`;
  return (
    <section
      id={area.id}
      aria-labelledby={tituloId}
      className="grid scroll-mt-[calc(var(--spacing-header)+4.5rem)] items-center gap-8 border-b border-linha py-14 md:gap-[clamp(2rem,6vw,5.5rem)] md:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
    >
      <div className={cn("surge", invertido && "lg:order-2")}>
        {area.foto ? (
          <Photo foto={area.foto} proporcao="4/3.6" sizes="(max-width: 1024px) 100vw, 620px" />
        ) : area.cartao ? (
          <div className="flex aspect-[4/3.6] flex-col justify-center gap-4.5 border border-linha bg-carvao p-[clamp(1.75rem,4vw,3rem)]">
            <Icon name="criancas" className="size-11 text-laranja" />
            <Heading as="h3" tamanho="card">
              {area.cartao.titulo}
            </Heading>
            <p className="text-suave">{area.cartao.texto}</p>
          </div>
        ) : null}
      </div>

      <div className={cn("surge", invertido && "lg:order-1")}>
        <span aria-hidden className="contorno mb-4.5 block font-display text-[clamp(3rem,6vw,4.6rem)] leading-[0.8] font-extrabold [font-stretch:118%]">
          {area.numero}
        </span>
        <Heading id={tituloId} tamanho="bloco" className="mb-5.5">
          {area.titulo}
        </Heading>
        <p className="mb-6.5 max-w-[62ch] text-suave">{area.texto}</p>
        {area.itens && (
          <ul className="mb-7 grid gap-3">
            {area.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#d3d4d8]">
                <span aria-hidden className="marcador mt-[0.45em] size-3 shrink-0 bg-laranja" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {area.acao?.tipo === "link" && <ArrowLink href={area.acao.href}>{area.acao.rotulo}</ArrowLink>}
        {area.acao?.tipo === "whatsapp" && (
          <ButtonLink href={linkWhatsApp(area.acao.mensagem)} variante="linha" icone="whatsapp">
            {area.acao.rotulo}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
