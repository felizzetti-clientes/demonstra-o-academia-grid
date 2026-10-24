import type { Metadata } from "next";
import { enderecoLinha1, site } from "@/config/site";
import { fotos } from "@/content/fotos";

/** Diretiva de indexação: noindex enquanto o site for protótipo privado. */
export const robotsDiretiva: Metadata["robots"] = site.indexavel
  ? { index: true, follow: true }
  : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } };

interface PaginaMeta {
  titulo: string;
  descricao: string;
  /** Caminho da rota, ex.: "/academia". */
  caminho: `/${string}`;
}

/** Metadados de uma página com URL canônica relativa ao domínio configurado. */
export function metadadosPagina({ titulo, descricao, caminho }: PaginaMeta): Metadata {
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: { title: `${titulo} · ${site.nome}`, description: descricao, url: caminho },
  };
}

/** Dados estruturados (schema.org) apenas com informações confirmadas. */
export function dadosEstruturados() {
  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: site.nome,
    description: site.descricao,
    url: site.url,
    image: `${site.url}${fotos.fachada.src}`,
    telephone: site.contato.telefoneE164,
    sameAs: [site.contato.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: enderecoLinha1,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.uf,
      postalCode: site.endereco.cep,
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.endereco.geo.lat, longitude: site.endereco.geo.lng },
    hasMap: site.links.googleMaps,
  };
}
