import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { fotos } from "@/content/fotos";
import { dadosEstruturados, robotsDiretiva } from "@/lib/seo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

// Fontes hospedadas no projeto (licença SIL OFL em src/fonts/licencas).
const saira = localFont({
  src: [
    { path: "../fonts/saira-latin-standard-normal.woff2", style: "normal" },
    { path: "../fonts/saira-latin-standard-italic.woff2", style: "italic" },
  ],
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "50% 125%" }],
  variable: "--font-saira",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const chakra = localFont({
  src: [
    { path: "../fonts/chakra-petch-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/chakra-petch-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} · Joinville — ${site.slogan}`, template: `%s · ${site.nome}` },
  description: site.descricao,
  applicationName: site.nome,
  robots: robotsDiretiva,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    url: "/",
    images: [{ url: fotos.salaoPrincipal.src, width: fotos.salaoPrincipal.width, height: fotos.salaoPrincipal.height, alt: fotos.salaoPrincipal.alt }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${saira.variable} ${inter.variable} ${chakra.variable}`}>
      <body className="font-sans leading-relaxed">
        <a
          href="#conteudo"
          className="fixed -top-16 left-3 z-[100] bg-laranja px-4 py-2.5 font-semibold text-preto transition-[top] focus:top-3"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          // JSON gerado a partir da configuração tipada (sem dados de usuários).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados()).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
