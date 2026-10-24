import type { MetadataRoute } from "next";
import { navegacao, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navegacao.map((rota) => ({
    url: `${site.url}${rota.href === "/" ? "" : rota.href}`,
    changeFrequency: "monthly",
    priority: rota.href === "/" ? 1 : 0.7,
  }));
}
