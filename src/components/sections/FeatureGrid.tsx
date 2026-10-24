import { diferenciais } from "@/content/diferenciais";
import { linkWhatsApp } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Typography";

/** Grade com os diferenciais citados nas avaliações + cartão de chamada. */
export function FeatureGrid() {
  return (
    <div className="grid gap-px border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
      {diferenciais.map((d) => (
        <article key={d.titulo} className="surge bg-carvao p-[clamp(1.75rem,3vw,2.5rem)]">
          <Icon name={d.icone} className="mb-5.5 size-8.5 text-laranja" />
          <Heading as="h3" tamanho="card" className="mb-2.5">
            {d.titulo}
          </Heading>
          <p className="text-[0.95rem] text-suave">{d.texto}</p>
        </article>
      ))}
      <article className="surge flex flex-col justify-between gap-6 bg-laranja p-[clamp(1.75rem,3vw,2.5rem)] text-preto">
        <div>
          <Heading as="h3" tamanho="card" className="text-preto">
            Venha ver de perto
          </Heading>
          <p className="mt-2.5 text-[0.95rem] text-[#2a1608]">A melhor forma de conhecer a GRID é visitando o salão.</p>
        </div>
        <ButtonLink href={linkWhatsApp("visita")} variante="preto" icone="whatsapp">
          Agendar visita
        </ButtonLink>
      </article>
    </div>
  );
}
