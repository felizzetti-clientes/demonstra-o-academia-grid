import { notaFormatada, site } from "@/config/site";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow, Heading } from "@/components/ui/Typography";

interface RatingPanelProps {
  rotulo: string;
  titulo: string;
  introducao?: string;
  link: { href: string; rotulo: string };
}

/** Nota pública no Google + temas mais citados nas avaliações. */
export function RatingPanel({ rotulo, titulo, introducao, link }: RatingPanelProps) {
  return (
    <div className="surge grid items-center gap-[clamp(2rem,6vw,6rem)] border border-linha bg-carvao p-[clamp(1.5rem,5vw,4rem)] lg:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-start">
        <p className="sr-only">
          Nota {notaFormatada} de 5 no {site.avaliacao.fonte}, com {site.avaliacao.total} avaliações.
        </p>
        <span
          aria-hidden
          className="font-display text-[clamp(5.5rem,12vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.03em] text-white italic [font-stretch:118%]"
        >
          {notaFormatada}
        </span>
        <div aria-hidden className="mt-4.5 mb-2.5 flex gap-1 text-laranja">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="estrela" className="size-6" />
          ))}
        </div>
        <p aria-hidden className="text-sm text-suave">
          <b className="font-semibold text-white">{site.avaliacao.total} avaliações</b> no {site.avaliacao.fonte}
        </p>
      </div>
      <div>
        <Eyebrow>{rotulo}</Eyebrow>
        <Heading className="mt-4 mb-4.5">{titulo}</Heading>
        {introducao && <p className="max-w-[52ch] text-suave">{introducao}</p>}
        <ul className="my-6 flex flex-wrap gap-2" aria-label="Temas mais citados nas avaliações">
          {site.temasAvaliacoes.map((tema) => (
            <li key={tema} className="border border-[#3a3b40] px-3.5 py-1.5 text-[0.86rem] text-[#d8d9dd]">
              {tema}
            </li>
          ))}
        </ul>
        <ArrowLink href={link.href}>{link.rotulo}</ArrowLink>
      </div>
    </div>
  );
}
