import type { SVGProps } from "react";

const tracos = {
  seta: <path d="M4 12h15M13 6l6 6-6 6" />,
  "seta-diagonal": <path d="M7 17 17 7M8 7h9v9" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  telefone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  haltere: <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />,
  grade: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
  brilho: (
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
  ),
  equipe: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.7.8 2.8 2.6 3 5.2" />
    </>
  ),
  criancas: <path d="M3 21h18M5 21V10l7-5 7 5v11M10 21v-5h4v5" />,
  rota: <path d="M3 11 21 3l-8 18-2-8-8-2Z" />,
  ampliar: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  fechar: <path d="M5 5l14 14M19 5 5 19" />,
  anterior: <path d="M15 5l-7 7 7 7" />,
  proximo: <path d="M9 5l7 7-7 7" />,
} as const;

const preenchidos = {
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
  ),
  estrela: <path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.4 21.7l1.8-7.3L1.5 9.5 9 8.9z" />,
} as const;

export type NomeIcone = keyof typeof tracos | keyof typeof preenchidos;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: NomeIcone;
  /** Texto para leitores de tela; sem ele o ícone é decorativo. */
  titulo?: string;
}

export function Icon({ name, titulo, className = "size-5", ...props }: IconProps) {
  const preenchido = name in preenchidos;
  const acessivel = titulo ? { role: "img", "aria-label": titulo } : { "aria-hidden": true };
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      {...acessivel}
      {...(preenchido
        ? { fill: "currentColor" }
        : { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "square", strokeLinejoin: "round" })}
      {...props}
    >
      {preenchido ? preenchidos[name as keyof typeof preenchidos] : tracos[name as keyof typeof tracos]}
    </svg>
  );
}
