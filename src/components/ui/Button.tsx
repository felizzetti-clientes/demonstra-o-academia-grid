import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type NomeIcone } from "./Icon";

const variantes = {
  laranja: "chanfro bg-laranja text-preto hover:bg-laranja-hover",
  linha: "border-[1.5px] border-[#4a4b51] text-white hover:border-laranja hover:text-laranja",
  preto: "chanfro bg-preto text-white hover:bg-[#26262a]",
} as const;

export type VarianteBotao = keyof typeof variantes;

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/** Link interno (next/link) ou externo (nova aba, com rel seguro). */
export function SmartLink({ href, children, className, ariaLabel }: SmartLinkProps) {
  const externo = /^(https?:|tel:|mailto:)/.test(href);
  if (externo) {
    const novaAba = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...(novaAba ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variante?: VarianteBotao;
  icone?: NomeIcone;
  iconeFinal?: NomeIcone;
  className?: string;
}

export function ButtonLink({ href, children, variante = "laranja", icone, iconeFinal, className }: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "inline-flex min-h-13 items-center justify-center gap-2.5 px-6.5 font-display text-[0.95rem] font-bold tracking-[0.06em] whitespace-nowrap uppercase [font-stretch:112%] transition-colors",
        variantes[variante],
        className,
      )}
    >
      {icone && <Icon name={icone} className="size-4.5 shrink-0" />}
      {children}
      {iconeFinal && <Icon name={iconeFinal} className="size-4.5 shrink-0" />}
    </SmartLink>
  );
}

/** Link de texto com sublinhado laranja e seta. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const externo = href.startsWith("http");
  return (
    <SmartLink
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 border-b-2 border-laranja py-1.5 font-display text-[0.92rem] font-bold tracking-[0.08em] text-white uppercase [font-stretch:112%]",
        className,
      )}
    >
      {children}
      <Icon
        name={externo ? "seta-diagonal" : "seta"}
        className="size-4 transition-transform group-hover:translate-x-1"
      />
    </SmartLink>
  );
}

/** Versão visual da seta para usar dentro de cartões que já são links. */
export function ArrowLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 self-start border-b-2 border-laranja py-1.5 font-display text-[0.92rem] font-bold tracking-[0.08em] text-white uppercase [font-stretch:112%]">
      {children}
      <Icon name="seta" className="size-4" />
    </span>
  );
}
