"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import type { CategoriaFoto } from "@/content/fotos";
import { filtrosGaleria, type FormatoMosaico, type ItemGaleria } from "@/content/galeria";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Lightbox } from "./Lightbox";

const formatos: Record<FormatoMosaico, { classe: string; sizes: string }> = {
  padrao: { classe: "col-span-1 md:col-span-2", sizes: "(max-width: 768px) 50vw, 400px" },
  alto: { classe: "col-span-1 row-span-2 md:col-span-2", sizes: "(max-width: 768px) 50vw, 400px" },
  largo: { classe: "col-span-2 md:col-span-4", sizes: "(max-width: 768px) 100vw, 800px" },
  grande: { classe: "col-span-2 row-span-2 md:col-span-4", sizes: "(max-width: 768px) 100vw, 800px" },
  "alto-final": { classe: "col-span-2 row-span-2 md:col-span-2", sizes: "(max-width: 768px) 100vw, 400px" },
};

type Filtro = CategoriaFoto | "todas";

export function Gallery({ itens }: { itens: readonly ItemGaleria[] }) {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [aberto, setAberto] = useState<number | null>(null);
  const botoes = useRef<Array<HTMLButtonElement | null>>([]);
  /** Foto que abriu o visualizador, para devolver o foco ao fechar. */
  const origem = useRef<number | null>(null);

  const visiveis = useMemo(
    () => itens.filter((it) => filtro === "todas" || it.foto.categoria === filtro),
    [itens, filtro],
  );

  const aoFechar = useCallback(() => {
    setAberto(null);
    const indice = origem.current;
    origem.current = null;
    if (indice !== null) requestAnimationFrame(() => botoes.current[indice]?.focus());
  }, []);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar fotos">
        {filtrosGaleria.map((f) => (
          <button
            key={f.valor}
            type="button"
            aria-pressed={filtro === f.valor}
            onClick={() => setFiltro(f.valor)}
            className={cn(
              "rotulo border px-4.5 py-2.5 text-[0.8rem] tracking-[0.14em] transition-colors",
              filtro === f.valor
                ? "border-laranja bg-laranja text-preto"
                : "border-linha text-suave hover:border-[#4a4b51] hover:text-white",
            )}
          >
            {f.rotulo}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visiveis.length} fotos exibidas
      </p>

      <ul className="grid auto-rows-[44vw] grid-flow-dense grid-cols-2 gap-2 md:auto-rows-[clamp(200px,30vw,300px)] md:grid-cols-4 md:gap-3 lg:auto-rows-[clamp(220px,25vw,330px)] lg:grid-cols-6">
        {visiveis.map((item, i) => (
          <li key={item.foto.src} className={formatos[item.formato].classe}>
            <button
              ref={(el) => {
                botoes.current[i] = el;
              }}
              type="button"
              onClick={() => {
                origem.current = i;
                setAberto(i);
              }}
              aria-label={`Ampliar foto: ${item.rotulo}`}
              className="group relative block size-full overflow-hidden bg-faixa text-left"
            >
              <Image
                src={item.foto.src}
                alt={item.foto.alt}
                fill
                sizes={formatos[item.formato].sizes}
                quality={85}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <span className="absolute top-3.5 right-3.5 z-10 grid size-9.5 place-items-center border border-white/15 bg-preto/70 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Icon name="ampliar" className="size-4" />
              </span>
              <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent px-4.5 pt-10 pb-3.5 text-[0.8rem] text-[#e4e5e8] transition-all md:translate-y-1.5 md:text-[0.86rem] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                {item.rotulo}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox itens={visiveis} indice={aberto} aoMudar={setAberto} aoFechar={aoFechar} />
    </>
  );
}
