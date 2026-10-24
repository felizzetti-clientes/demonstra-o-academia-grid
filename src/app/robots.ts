import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * Protótipo privado: bloqueia todos os robôs.
 * Para publicar, defina NEXT_PUBLIC_INDEXAR=true e NEXT_PUBLIC_SITE_URL com o domínio definitivo.
 */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexavel) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
