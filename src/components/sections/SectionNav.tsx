"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

interface SectionNavProps {
  itens: readonly { id: string; rotulo: string }[];
  rotulo: string;
}

/** Subnavegação fixa que destaca a seção visível na tela. */
export function SectionNav({ itens, rotulo }: SectionNavProps) {
  const [ativo, setAtivo] = useState<string | null>(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setAtivo(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of itens) {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    }
    return () => observador.disconnect();
  }, [itens]);

  return (
    <nav
      aria-label={rotulo}
      className="sticky top-header z-30 border-b border-linha bg-preto/95 backdrop-blur-sm"
    >
      <Container>
        <ul className="sem-barra flex gap-1.5 overflow-x-auto py-3">
          {itens.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={ativo === item.id ? "location" : undefined}
                className={cn(
                  "rotulo block border px-3.5 py-2 text-[0.78rem] tracking-[0.14em] whitespace-nowrap transition-colors",
                  ativo === item.id ? "border-laranja text-white" : "border-linha text-suave hover:border-laranja hover:text-white",
                )}
              >
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
