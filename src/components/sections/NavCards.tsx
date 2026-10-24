import Link from "next/link";
import { ArrowLabel } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";

export interface NavCard {
  href: string;
  rotulo: string;
  titulo: string;
  texto: string;
  acao: string;
}

/** Cartões que levam às demais páginas do site. */
export function NavCards({ cartoes }: { cartoes: readonly NavCard[] }) {
  return (
    <ul className="grid gap-px border border-linha bg-linha md:grid-cols-2 lg:grid-cols-3">
      {cartoes.map((c, i) => (
        <li key={c.href} className={i === cartoes.length - 1 && cartoes.length % 2 === 1 ? "md:col-span-2 lg:col-span-1" : undefined}>
          <Link
            href={c.href}
            className="group surge relative flex h-full flex-col gap-3.5 bg-preto p-[clamp(1.75rem,3vw,2.5rem)] transition-colors before:absolute before:top-0 before:left-0 before:h-0.5 before:w-0 before:bg-laranja before:transition-all before:duration-350 hover:bg-carvao hover:before:w-full lg:min-h-65"
          >
            <span className="rotulo text-[0.78rem] text-laranja">{c.rotulo}</span>
            <Heading as="h3" tamanho="card">
              {c.titulo}
            </Heading>
            <p className="flex-1 text-[0.95rem] text-suave">{c.texto}</p>
            <ArrowLabel>{c.acao}</ArrowLabel>
          </Link>
        </li>
      ))}
    </ul>
  );
}
