"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacao } from "@/config/site";
import { rotaAtiva } from "@/lib/rotas";

export function FooterNav() {
  const pathname = usePathname();
  return (
    <ul className="space-y-2.5">
      {navegacao.map((item) => {
        const ativo = rotaAtiva(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={ativo ? "page" : undefined}
              className={ativo ? "text-sm text-white" : "text-sm text-suave transition-colors hover:text-laranja"}
            >
              {item.rotulo}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
