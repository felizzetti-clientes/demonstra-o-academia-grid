"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ItemGaleria } from "@/content/galeria";
import { Icon, type NomeIcone } from "@/components/ui/Icon";

interface LightboxProps {
  itens: readonly ItemGaleria[];
  /** Índice da foto aberta; `null` mantém o visualizador fechado. */
  indice: number | null;
  aoMudar: (indice: number) => void;
  aoFechar: () => void;
}

function BotaoLightbox({ icone, rotulo, onClick, className = "" }: { icone: NomeIcone; rotulo: string; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      aria-label={rotulo}
      onClick={onClick}
      className={`grid size-12 place-items-center border border-white/20 bg-preto/60 transition-colors hover:border-laranja hover:bg-laranja hover:text-preto ${className}`}
    >
      <Icon name={icone} className="size-5" />
    </button>
  );
}

/** Visualizador em tela cheia: setas, teclado (← → Esc) e gesto de arrastar. */
export function Lightbox({ itens, indice, aoMudar, aoFechar }: LightboxProps) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const toqueX = useRef<number | null>(null);
  const total = itens.length;
  const item = indice !== null ? itens[indice] : undefined;

  // Abre/fecha o <dialog> nativo (foco preso e Esc acessível por padrão).
  useEffect(() => {
    const el = dialogo.current;
    if (!el) return;
    if (indice !== null && !el.open) {
      el.showModal();
      document.body.style.overflow = "hidden";
    } else if (indice === null && el.open) {
      el.close();
    }
  }, [indice]);

  const passo = (delta: number) => {
    if (indice === null || total === 0) return;
    aoMudar((indice + delta + total) % total);
  };

  return (
    <dialog
      ref={dialogo}
      aria-label="Visualizador de fotos"
      onClose={() => {
        document.body.style.overflow = "";
        aoFechar();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") passo(-1);
        if (e.key === "ArrowRight") passo(1);
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogo.current?.close();
      }}
      onTouchStart={(e) => {
        toqueX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const inicio = toqueX.current;
        const fim = e.changedTouches[0]?.clientX;
        toqueX.current = null;
        if (inicio === null || fim === undefined) return;
        const delta = fim - inicio;
        if (Math.abs(delta) > 50) passo(delta < 0 ? 1 : -1);
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-[#060607]/96 p-0 text-white backdrop:bg-[#060607]/96 open:grid open:grid-rows-[auto_1fr_auto]"
    >
      {item && (
        <>
          <div className="flex items-center justify-between px-4 py-4 sm:px-10">
            <span className="rotulo text-sm tracking-[0.16em] text-suave" aria-live="polite">
              {String((indice ?? 0) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <BotaoLightbox icone="fechar" rotulo="Fechar" onClick={() => dialogo.current?.close()} />
          </div>

          <div className="relative min-h-0 px-2 sm:px-18">
            <div className="relative size-full">
              <Image
                key={item.foto.src}
                src={item.foto.src}
                alt={item.foto.alt}
                fill
                sizes="100vw"
                quality={90}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 pt-4 pb-6 sm:px-10">
            <BotaoLightbox icone="anterior" rotulo="Foto anterior" onClick={() => passo(-1)} className="sm:fixed sm:top-1/2 sm:left-3 sm:-translate-y-1/2" />
            <p className="flex-1 text-center text-[0.95rem] text-[#d3d4d8]">{item.foto.legenda}</p>
            <BotaoLightbox icone="proximo" rotulo="Próxima foto" onClick={() => passo(1)} className="sm:fixed sm:top-1/2 sm:right-3 sm:-translate-y-1/2" />
          </div>
        </>
      )}
    </dialog>
  );
}
