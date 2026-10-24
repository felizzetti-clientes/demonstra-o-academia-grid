"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { navegacao } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { rotaAtiva } from "@/lib/rotas";
import { ButtonLink } from "@/components/ui/Button";

/** Navegação principal: links em linha no desktop e painel em tela cheia no celular. */
export function MainNav() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const menuId = useId();
  const fechar = useCallback(() => setAberto(false), []);

  // Bloqueia a rolagem da página com o menu aberto; Esc fecha.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && fechar();
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = anterior;
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto, fechar]);

  // Fecha ao voltar para o layout de desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const aoMudar = (e: MediaQueryListEvent) => e.matches && fechar();
    mq.addEventListener("change", aoMudar);
    return () => mq.removeEventListener("change", aoMudar);
  }, [fechar]);

  return (
    <>
      <button
        type="button"
        className="relative -mr-2 size-11.5 lg:hidden"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls={menuId}
        onClick={() => setAberto((v) => !v)}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "absolute inset-x-2.75 h-0.5 bg-white transition-all duration-300",
              i === 0 && (aberto ? "top-5.5 rotate-45" : "top-4"),
              i === 1 && (aberto ? "top-5.5 opacity-0" : "top-5.5"),
              i === 2 && (aberto ? "top-5.5 -rotate-45" : "top-7"),
            )}
          />
        ))}
      </button>

      <nav
        id={menuId}
        aria-label="Navegação principal"
        className={cn(
          // celular: painel fixo abaixo do cabeçalho
          "fixed inset-x-0 top-header bottom-0 flex flex-col overflow-y-auto bg-preto px-4 pt-3 pb-8 transition-[opacity,transform,visibility] duration-250 sm:px-6",
          aberto ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
          // desktop: linha no cabeçalho
          "lg:visible lg:static lg:translate-y-0 lg:flex-row lg:items-center lg:gap-[clamp(1.1rem,2.2vw,2.1rem)] lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100",
        )}
      >
        {navegacao.map((item) => {
          const ativo = rotaAtiva(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={fechar}
              aria-current={ativo ? "page" : undefined}
              className={cn(
                "group relative flex items-center justify-between border-b border-linha py-4.5 font-display text-lg font-semibold tracking-[0.08em] uppercase [font-stretch:108%] transition-colors",
                "lg:border-0 lg:py-2 lg:text-[0.86rem] xl:text-[0.88rem]",
                ativo ? "text-laranja lg:text-white" : "text-[#c9cace] hover:text-white",
              )}
            >
              {item.rotulo}
              {/* marcador no celular */}
              {ativo && <span aria-hidden className="size-2 bg-laranja lg:hidden" />}
              {/* sublinhado no desktop */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 hidden h-0.5 origin-left bg-laranja transition-transform duration-250 lg:block",
                  ativo ? "scale-x-100 shadow-[0_0_10px_rgb(240_90_26/0.7)]" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          );
        })}
        <ButtonLink
          href={linkWhatsApp("conhecer")}
          icone="whatsapp"
          className="mt-6 min-h-13.5 lg:mt-0 lg:min-h-11 lg:px-5 lg:text-[0.85rem]"
        >
          Fale com a GRID
        </ButtonLink>
      </nav>
    </>
  );
}
