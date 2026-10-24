import { Heading } from "@/components/ui/Typography";

export interface Passo {
  titulo: string;
  texto: string;
}

/** Lista numerada de passos (ex.: como se matricular). */
export function StepsList({ passos }: { passos: readonly Passo[] }) {
  return (
    <ol className="grid gap-px border border-linha bg-linha md:grid-cols-2 lg:grid-cols-3">
      {passos.map((p, i) => (
        <li
          key={p.titulo}
          className={`surge flex flex-col gap-3.5 bg-carvao p-[clamp(1.75rem,3vw,2.5rem)] ${
            i === passos.length - 1 && passos.length % 2 === 1 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <span aria-hidden className="contorno font-display text-[3.4rem] leading-[0.8] font-extrabold [font-stretch:118%]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Heading as="h3" tamanho="card">
            {p.titulo}
          </Heading>
          <p className="text-[0.95rem] text-suave">{p.texto}</p>
        </li>
      ))}
    </ol>
  );
}
